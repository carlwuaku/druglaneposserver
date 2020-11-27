const path = require('path');
// const os = require('os');
const { app, BrowserWindow, Menu, ipcMain, ClientRequest, dialog } = require('electron');
const gotTheLock = app.requestSingleInstanceLock()

const fs = require('fs');
const log = require('electron-log');
const { autoUpdater } = require('electron-updater');
const schedule = require('node-schedule');
// const MainWindow = require('./MainWindow')
// const AppTray = require('./AppTray')
process.env.NODE_ENV = 'production';
let constants = require('./constants')
const isDev = process.env.NODE_ENV !== 'production' ? true : false;
const isMac = process.platform === 'darwin' ? true : false;
let PORT = constants.port;
const FileStore = require('./Store');
const filestore = new FileStore({
  configName: 'system-settings',
  defaults: constants.default_config
});
log.info('starting')
// let tray = null;
let mainWindow;
let aboutWindow;
let backup_folder = constants.backup_folder
let internal_backup_folder = constants.internal_backups_path

if (!gotTheLock) {
  app.quit()
 
  
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })




  try {
    let server = require('./server');

  } catch (error) {
    console.log(error)
    aboutWindow = new BrowserWindow({
      height: 250,
      width: 300,
      title: 'App Already Rrunning',
      resizable: false,

      icon: `${__dirname}/app/assets/logo.png`,

    });

    aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
  }


  //create folder for backups 
  console.log('creating folder')
  if (!fs.existsSync(backup_folder)) fs.mkdir(backup_folder, function (err) {
    if (err) {
      console.log('folder not created')
    }
    else {
      console.log('folder created')
    }
  });

  if (!fs.existsSync(internal_backup_folder)) fs.mkdir(internal_backup_folder, function (err) {
    if (err) {
      console.log('internal folder not created')
    }
    else {
      console.log('internal backup folder created')
    }
  });


  function createMainWindow() {
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

    mainWindow.once('ready-to-show', () => {
      autoUpdater.checkForUpdatesAndNotify();
    });

    // mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    // mainWindow.loadFile('./app/index.html')
  }
  function createAboutWindow() {
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

  app.on('ready', function () {
    createMainWindow();


    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

    // const icon = path.join(__dirname, 'app', 'assets', 'tray_icon_2.png');
    //create tray
    // tray = new AppTray(icon, mainWindow);


    //register global shortcuts
    // globalShortcut.register('CmdOrCtrl+R', () => mainWindow.reload());
    // globalShortcut.register('CmdOrCtrl+Alt+i', () => {mainWindow.toggleDevTools()});

    mainWindow.on('close', (e) => {
      // if (!app.isQuitting) {
      //   e.preventDefault();
      //   mainWindow.hide();
      //   tray.displayBalloon({
      //     title: 'Running In Background',
      //     content: 'Server is running. To quit, right-click and choose Quit option ', iconType: 'info'
      //   })
      // }
      // else {
      //   tray = null
      //   return true; 
      // }
      console.log("mainwindow closing")
      const options = {
        type: 'question',
        buttons: ['Minimize the application', 'Close Application', 'Cancel'],
        defaultId: 0,
        title: 'Druglane Server',
        message: 'Close the server?',
        detail: `You need to keep it running to use the Druglane software.
        You can minimize it instead. 
        A backup will be created if you choose to close the application`,

      };
      var index = dialog.showMessageBoxSync(mainWindow, options)
      console.log(index);
      switch (index) {
        case 0:
          e.preventDefault();
          mainWindow.minimize();
          break;
        case 1:
          mainWindow = null;
          createBackupAndShutDown();
          break;
        case 2:


        default:
          e.preventDefault();

          break;
      }





    })

    //when external link is clicked, open in browser
    mainWindow.webContents.on('new-window', function (e, url) {
      e.preventDefault();
      require('electron').shell.openExternal(url);
    });


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
    var time = filestore.get("auto_backup_time") == undefined ? 19 : filestore.get("auto_backup_time");
    console.log(time)
    //auto backup at 7:00PM each day

    var j = schedule.scheduleJob('auto_backup', `0 ${time} * * *`, function () {
      autoCreateBackup();
    });



    console.log(schedule.scheduledJobs.auto_backup)

  });

  const menu = [
    ...(isMac ? [{
      label: app.name,
      submenu: [{ label: 'About', click: createAboutWindow }]
    }] : []),
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
    ...(isDev ? [
      {
        label: 'Developer',
        submenu: [
          { role: 'reload' },
          { role: 'forcereload' },
          { type: 'separator' },
          { role: 'toggledevtools' }
        ]
      }
    ] : [])
  ]

  ipcMain.on('startBackup', (event, data) => {
    createBackup()
  })

  ipcMain.on('app_version', (event) => {
    event.sender.send('app_version', { version: app.getVersion() });
  });

  ipcMain.on('restart_app', () => {
    autoUpdater.quitAndInstall();
  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (!isMac) {
      // app.quit()
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

  function createBackupAndShutDown() {
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
    output.on('close', function () {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
      //copy to the internal backup location
      fs.copyFile(backup_folder + `/druglane_backup_${ts}.zip`, internal_backup_folder + `/druglane_backup_${ts}.zip`, (err) => {
        if (err) {
          console.log(err)
          console.log('could not copy to internal folder');

        }
        else {
          console.log('copied to internal folder');

        }

      });

      var data = {
        file_name: `"${internal_backup_folder}/druglane_backup_${ts}.zip"`,
        description: `'manual backup'`,
        created_by: `'admin'`,
        uploaded: `'no'`,
        db_version: filestore.get('dbversion')
      }
      saveBackup(data)
      app.quit();


    });

    // This event is fired when the data source is drained no matter what was the data source.
    // It is not part of this library but rather from the NodeJS Stream API.
    // @see: https://nodejs.org/api/stream.html#stream_event_end
    output.on('end', function () {
      console.log('Data has been drained');
    });

    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function (err) {
      if (err.code === 'ENOENT') {
        // log warning
      } else {
        // throw error
        throw err;
      }
    });

    // good practice to catch this error explicitly
    archive.on('error', function (err) {
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
  function createBackup() {
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
    output.on('close', function () {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
      //copy to the internal backup location
      fs.copyFile(backup_folder + `/druglane_backup_${ts}.zip`, internal_backup_folder + `/druglane_backup_${ts}.zip`, (err) => {
        if (err) {
          console.log(err)
          console.log('could not copy to internal folder');

        }
        else {
          console.log('copied to internal folder');

        }

      });

      var data = {
        file_name: `"${internal_backup_folder}/druglane_backup_${ts}.zip"`,
        description: `'manual backup'`,
        created_by: `'admin'`,
        uploaded: `'no'`,
        db_version: filestore.get('dbversion')
      }
      saveBackup(data)



      mainWindow.webContents.send('backup_done', { directory: backup_folder + `/druglane_backup_${ts}.zip` })
    });

    // This event is fired when the data source is drained no matter what was the data source.
    // It is not part of this library but rather from the NodeJS Stream API.
    // @see: https://nodejs.org/api/stream.html#stream_event_end
    output.on('end', function () {
      console.log('Data has been drained');
    });

    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function (err) {
      if (err.code === 'ENOENT') {
        // log warning
      } else {
        // throw error
        throw err;
      }
    });

    // good practice to catch this error explicitly
    archive.on('error', function (err) {
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
  function autoCreateBackup() {
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
    output.on('close', function () {

      fs.copyFile(backup_folder + `/druglane_backup_${ts}.zip`, internal_backup_folder + `/druglane_backup_${ts}.zip`, (err) => {
        if (err) {
          console.log(err)
          console.log('could not copy to internal folder');

        }
        else {
          console.log('copied to internal folder');

        }

      });

      var data = {
        file_name: `"${internal_backup_folder}/druglane_backup_${ts}.zip"`,
        description: `'automatic backup'`,
        created_by: `'system'`,
        uploaded: `'no'`,
        db_version: filestore.get('dbversion')
      }
      saveBackup(data)
      log.info('backup automatically created.');

    });

    // This event is fired when the data source is drained no matter what was the data source.
    // It is not part of this library but rather from the NodeJS Stream API.
    // @see: https://nodejs.org/api/stream.html#stream_event_end
    output.on('end', function () {
      console.log('Data has been drained');
    });

    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function (err) {
      if (err.code === 'ENOENT') {
        // log warning
        log.error('Warning creating auto backup: ' + err)
      } else {
        log.error('Warning creating auto backup: ' + err)
        // throw error
        throw err;
      }
    });

    // good practice to catch this error explicitly
    archive.on('error', function (err) {
      log.error('Warning creating auto backup: ' + err)
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

  ipcMain.on('restore', (event, option) => {
    restoreBackup(option.filename)
  })

  ipcMain.on('change_backup_time', (event, option) => {
    setBackupTime(option.new_time)
  })

  async function saveBackup(data) {
    try {
      let helper = require('./helpers/backupsHelper');
      let sh = new helper();


      await sh.insert(data, sh.table_name);
      uploadfiles();

      log.info("backup inserted into db successfully")
    } catch (error) {
      log.error("error on backup insert into db")
    }
  }

  function restoreBackup(filename) {
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

  function setBackupTime(time) {
    let new_time = time == undefined || time == null ? 19 : time;
    try {
      var cancel = schedule.scheduledJobs.auto_backup.cancel()
      console.log("cancel backups " + cancel)
      filestore.set("auto_backup_time", new_time)


      var j = schedule.scheduleJob('auto_backup', `0 ${new_time} * * *`, function () {
        autoCreateBackup();
      });
      mainWindow.webContents.send('backup_time_changed', { message: `Automatic backup time changed successfully` })
      app.relaunch()
      app.exit()
      //  console.log(schedule.scheduledJobs)
    } catch (error) {
      filestore.set("auto_backup_time", new_time)


      var j = schedule.scheduleJob('auto_backup', `0 ${new_time} * * *`, function () {
        autoCreateBackup();
      });
      mainWindow.webContents.send('backup_time_changed', { message: `Automatic backup time could not be changed. It was reset to the default of 7PM` })

    }


  }

  async function uploadfiles() {
    try {
      let helper = require('./helpers/backupsHelper');
      let sh = new helper();


      let row = await sh.getItem(` id = (SELECT MAX(id) from ${sh.table_name}) `, sh.table_name);
      if (row != null) {
        let id = row.id;
        let filepath = row.file_name;
        //split the path to get the filename
        let splitfilename = filepath.split("/")
        let filename = splitfilename.pop();
        const FormData = require('form-data');
        const fetch = require('node-fetch');

        // const req = require("request");
        const fs = require("fs");
        // const multiparty = require("multiparty");
        // let form = new multiparty.Form();

        let file_location = path.join(constants.internal_backups_path, filename);
        let settingsHelper = require('./helpers/settingsHelper');
        let sh = new settingsHelper();

        let name = await sh.getSetting(`'company_name'`);
        let address = await sh.getSetting(`'address'`);
        let email = await sh.getSetting(`'email'`);
        let phone = await sh.getSetting(`'phone'`);

        // let formData = {
        //     file: {
        //         value: fs.createReadStream(file_location),
        //         options: {
        //             filename: 'uploadFile'
        //         }
        //     }
        // };
        const postUrl = constants.server_url + "/api_admin/receive_file" //replace your upload url here     req.post({url: postUrl,formData: formData }, function(err, httpResponse, body) {        
        const form = new FormData();
        form.append('file', fs.createReadStream(file_location), {
          filename: filename,
        });
        form.append('email', email);
        form.append('phone', phone)
        form.append('name', name)
          //get the company details


          (async () => {
            const response = await fetch(postUrl, { method: 'POST', body: form });
            // const json = await response.json();
            await sh.updateField("uploaded", "'yes'", ` id = ${id}`, sh.table_name)

            console.log(response)
            console.log("done successfully")
            log.info("last backup file uploaded successfully.")
            // res.redirect('restoreBackup?m=Backup uploaded successfully');
          })();


      }
      else {
        console.log("file not found")

        // res.redirect('restoreBackup?m=Backup file not found. Please try again');
      }
    } catch (error) {
      console.log(error)

      // res.redirect('restoreBackup?m=Server error. Please try again or contact your admin');

    }

  }

  autoUpdater.on('update-available', () => {
    mainWindow.webContents.send('update_available');
  });
  autoUpdater.on('update-downloaded', () => {
    mainWindow.webContents.send('update_downloaded');
  });

}



