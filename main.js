const path = require('path');
// const os = require('os');
const {app, BrowserWindow, Menu, ipcMain, ClientRequest } = require('electron');
const server = require('./server');
const fs = require('fs');
const log = require('electron-log');
 
// const MainWindow = require('./MainWindow')
const AppTray = require('./AppTray')
process.env.NODE_ENV = 'development';
let constants = require('./constants')
const isDev = process.env.NODE_ENV !== 'production' ? true : false;
const isMac = process.platform === 'darwin' ? true : false;
log.info('starting')
let tray = null;
let mainWindow;
let aboutWindow;
let backup_folder = constants.backup_folder
let internal_backup_folder = constants.internal_backups_path
//create folder for backups
console.log('creating folder')
if (!fs.existsSync(backup_folder)) fs.mkdir(backup_folder, function(err){
    if(err){
        console.log('folder not created')
    }
    else{
        console.log('folder created')
    }
});

if (!fs.existsSync(internal_backup_folder)) fs.mkdir(internal_backup_folder, function(err){
  if(err){
      console.log('internal folder not created')
  }
  else{
      console.log('internal backup folder created')
  }
});
let PORT = constants.port;
const FileStore = require('./Store');
const filestore = new FileStore({
    configName: 'system-settings',
    defaults: {
        port: PORT,
        host: "localhost",
        dbversion: 0
    }
});
 
function createMainWindow(){
    //  mainWindow = new MainWindow(`./app/index.html`); 
     mainWindow = new BrowserWindow({
        height: 800,
        width: 1000,
        title: 'DruglaneServer',
        webPreferences: {
            nodeIntegration: true
        },
        icon: `${__dirname}/app/assets/icon2.png`,
        
    }); 
 
    mainWindow.loadURL(`http://localhost:${constants.port}/`);
 
    // mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    // mainWindow.loadFile('./app/index.html')
}
function createAboutWindow(){
    aboutWindow = new BrowserWindow({
       height: 250,
       width: 300,
       title: 'About DruglaneServer',
       resizable: false,
       
       icon: `${__dirname}/app/assets/logo.png`,
       
   });

   aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
   // mainWindow.loadFile('./app/index.html')
}

app.on('ready', function(){
    createMainWindow();

    
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

    const icon = path.join(__dirname,'app', 'assets', 'tray_icon_2.png');
    //create tray
    tray = new AppTray(icon, mainWindow);
    


    //register global shortcuts
    // globalShortcut.register('CmdOrCtrl+R', () => mainWindow.reload());
    // globalShortcut.register('CmdOrCtrl+Alt+i', () => {mainWindow.toggleDevTools()});

    mainWindow.on('close', (e)=>{ 
        if(!app.isQuitting){
            e.preventDefault();
            mainWindow.hide();
            tray.displayBalloon({title: 'Running In Background', 
            content: 'Server is running. To quit, right-click and choose Quit option ', iconType: 'info'})
        }
        else{
          tray = null
            return true;
        }
        // mainWindow = null;
    })

    //when external link is clicked, open in browser
    mainWindow.webContents.on('new-window', function(e, url) {
      e.preventDefault();
      require('electron').shell.openExternal(url);
    });

    var schedule = require('node-schedule');
    /**
     * 
     * *    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
     */
 //auto backup at 7:00PM each day
var j = schedule.scheduleJob('0 19 * * *', function(){
  autoCreateBackup();
});

});

const menu = [
    ...(isMac ? [{label: app.name,
    submenu: [{label: 'About', click: createAboutWindow}]}] : []),
    {
        label: 'System',
        submenu: [
            {
                label: 'Quit', 
                click: () => app.quit(),
                accelerator: 'CmdOrCtrl+w'
            },
            {
              label: 'Restart Sever', 
              click: () => {
                 app.relaunch()
                app.exit()
              },
              accelerator: 'CmdOrCtrl+r'
          }
        ]
    },
    ...(isDev? [
        {
            label:'Developer',
            submenu:[
                {role: 'reload'},
                {role: 'forcereload'},
                {type: 'separator'},
                {role: 'toggledevtools'}
            ]
        }
    ] : [])
]

ipcMain.on('startBackup',(event, data) => {
    createBackup()
})


// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (!isMac) {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  });

  function getToday(type, date = undefined) {
    var today = new Date();
    if (date != undefined) {
      today = new Date(date);
    }

    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    var dd_string
    if (dd < 10) {
      dd_string = '0' + dd;
    }
    else {
      dd_string = dd.toString()
    }



    var mm_string
    if (mm < 10) {
      mm_string = '0' + mm;
    }
    else {
      mm_string = mm.toString()
    }

    switch (type) {
      case "timestamp":
        var hrs = today.getHours();
        var mins = today.getMinutes();
        var secs = today.getSeconds();
        return yyyy + '-' + mm_string + '-' + dd_string + ' ' + hrs + ':' + mins + ':' + secs;

      case "timestamp_string":
        var hrs = today.getHours();
        var mins = today.getMinutes();
        var secs = today.getSeconds();
        return yyyy + '' + mm_string + '' + dd_string + '' + hrs + '' + mins + '' + secs;

      case "month":
        return mm_string;
      default:
        return yyyy + '-' + mm_string + '-' + dd_string;
    }



    // mm_string+'/'+dd_string+'/'+yyyy;
  }

  //create backup by zipping db and server-settings.json
  function createBackup(){
    var archiver = require('archiver');
    // var docs_folder = path.join(app.getPath('documents'), "druglaneBackups");
    // create a file to stream archive data to.
    var ts = getToday('timestamp_string')
    var output = fs.createWriteStream(backup_folder + `/druglane_backup_${ts}.zip`);
    var archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    });
     
    // listen for all archive data to be written
    // 'close' event is fired only when a file descriptor is involved
    output.on('close', function() {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
      //copy to the internal backup location
      fs.copyFile(backup_folder + `/druglane_backup_${ts}.zip`, internal_backup_folder + `/druglane_backup_${ts}.zip`, (err) => {
        if (err){
          console.log(err)
          console.log('could not copy to internal folder');

        } 
        else{
          console.log('copied to internal folder');

        }

      });

      var data = {
        file_name: `"${internal_backup_folder}/druglane_backup_${ts}.zip"`,
        description: `'manual backup'`,
        created_by: `'admin'`,
        uploaded: `'no'`,
        db_version:  filestore.get('dbversion')
    }
      saveBackup(data)
      


      mainWindow.webContents.send('backup_done', {directory: backup_folder + `/druglane_backup_${ts}.zip`})
    });
     
    // This event is fired when the data source is drained no matter what was the data source.
    // It is not part of this library but rather from the NodeJS Stream API.
    // @see: https://nodejs.org/api/stream.html#stream_event_end
    output.on('end', function() {
      console.log('Data has been drained');
    });
     
    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function(err) {
      if (err.code === 'ENOENT') {
        // log warning
      } else {
        // throw error
        throw err;
      }
    });
     
    // good practice to catch this error explicitly
    archive.on('error', function(err) {
      throw err;
    });
     
    // pipe archive data to the file
    archive.pipe(output);
     
    // // append a file from stream
    // var file1 = __dirname + '/file1.txt';
    // archive.append(fs.createReadStream(file1), { name: 'file1.txt' });
     
    // // append a file from string
    // archive.append('string cheese!', { name: 'file2.txt' });
     
    // // append a file from buffer
    // var buffer3 = Buffer.from('buff it!');
    // archive.append(buffer3, { name: 'file3.txt' });
    // append server-settings.json file
    archive.file(constants.settings_path, { name: constants.settings_filename });
    archive.file(constants.db_path, { name: constants.db_filename });

    // append files from a sub-directory and naming it `new-subdir` within the archive
    // archive.directory('subdir/', 'new-subdir');
     
    // append files from a sub-directory, putting its contents at the root of archive
    // archive.directory('subdir/', false);
     
    // append files from a glob pattern
    // archive.glob('subdir/*.txt');
     
    // finalize the archive (ie we are done appending files but streams have to finish yet)
    // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
    archive.finalize();
  }

  //create backup by zipping db and server-settings.json
  function autoCreateBackup(){
    var archiver = require('archiver');
    // var docs_folder = path.join(app.getPath('documents'), "druglaneBackups");
    // create a file to stream archive data to.
    var ts = getToday('timestamp_string')
    var output = fs.createWriteStream(backup_folder + `/druglane_backup_${ts}.zip`);
    var archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    });
     
    // listen for all archive data to be written
    // 'close' event is fired only when a file descriptor is involved
    output.on('close', function() {
      
      fs.copyFile(backup_folder + `/druglane_backup_${ts}.zip`, internal_backup_folder + `/druglane_backup_${ts}.zip`, (err) => {
        if (err){
          console.log(err)
          console.log('could not copy to internal folder');

        } 
        else{
          console.log('copied to internal folder');

        }

      });

      var data = {
        file_name: `"${internal_backup_folder}/druglane_backup_${ts}.zip"`,
        description: `'automatic backup'`,
        created_by: `'system'`,
        uploaded: `'no'`,
        db_version:  filestore.get('dbversion')
    }
      saveBackup(data)
      log.info('backup automatically created.');
      
    });
     
    // This event is fired when the data source is drained no matter what was the data source.
    // It is not part of this library but rather from the NodeJS Stream API.
    // @see: https://nodejs.org/api/stream.html#stream_event_end
    output.on('end', function() {
      console.log('Data has been drained');
    });
     
    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function(err) {
      if (err.code === 'ENOENT') {
        // log warning
        log.error('Warning creating auto backup: '+err)
      } else {
        log.error('Warning creating auto backup: '+err)
        // throw error
        throw err;
      }
    });
     
    // good practice to catch this error explicitly
    archive.on('error', function(err) {
      log.error('Warning creating auto backup: '+err)
      throw err;
    });
     
    // pipe archive data to the file
    archive.pipe(output);
     
    // // append a file from stream
    // var file1 = __dirname + '/file1.txt';
    // archive.append(fs.createReadStream(file1), { name: 'file1.txt' });
     
    // // append a file from string
    // archive.append('string cheese!', { name: 'file2.txt' });
     
    // // append a file from buffer
    // var buffer3 = Buffer.from('buff it!');
    // archive.append(buffer3, { name: 'file3.txt' });
    // append server-settings.json file
    archive.file(constants.settings_path, { name: constants.settings_filename });
    archive.file(constants.db_path, { name: constants.db_filename });

    // append files from a sub-directory and naming it `new-subdir` within the archive
    // archive.directory('subdir/', 'new-subdir');
     
    // append files from a sub-directory, putting its contents at the root of archive
    // archive.directory('subdir/', false);
     
    // append files from a glob pattern
    // archive.glob('subdir/*.txt');
     
    // finalize the archive (ie we are done appending files but streams have to finish yet)
    // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
    archive.finalize();
  }
 
  ipcMain.on('restore', (event, option)=>{
    restoreBackup(option.filename)
  })

  async function saveBackup(data){
    try {
      let helper = require('./helpers/backupsHelper');
      let sh = new helper();
  
      
      await sh.insert(data, sh.table_name);
      log.info("backup inserted into db successfully")
     } catch (error) {
      log.error("error on backup insert into db")
     }
  }

  function restoreBackup(filename){
    let DecompressZip = require('decompress-zip');
    var unzipper = new DecompressZip(filename);
    console.log(filename)
    // Add the error event listener
    unzipper.on('error', function (err) {
        console.log('Caught an error', err);
    });

    // Notify when everything is extracted
    unzipper.on('extract', function (data) {
        
        log.info('System restore completed successfully', data)
        mainWindow.webContents.send('restore_done')

    });

    // Notify "progress" of the decompressed files
    unzipper.on('progress', function (fileIndex, fileCount) {
        console.log('Extracted file ' + (fileIndex + 1) + ' of ' + fileCount);
    });

    // Unzip !
    unzipper.extract({
        path: constants.settings_location
    });
  }

 


   