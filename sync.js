//copy the database to a new 
const { app, BrowserWindow, Menu, ipcMain, ClientRequest, dialog } = require('electron');

const fs = require('fs');
const log = require('electron-log');
var sqlite3 = require('sqlite-async')// require('sqlite3').verbose()
const path = require('path')

let constants = require('./constants')
let appName = constants.appname
let company_id_global = "";

let internal_backup_folder = constants.internal_backups_path;
let to_upload_folder = path.join( constants.internal_backups_path,'to_upload')
if (!fs.existsSync(to_upload_folder)) fs.mkdir(to_upload_folder, function (err) {
    if (err) {
      console.log('folder not created')
    }
    else {
      console.log('folder created')
    }
  });
let connection = null;
// fs.copyFile(constants.db_path, internal_backup_folder + `/current_file.db`, (err) => {
//     if (err) {
//       console.log(err)
//       console.log('could not copy db to internal folder');

//     }
//     else {
//       console.log('copied cb to internal folder');

//     }

//   });

  async function getConnection() {
    //path to save to. the remote.app comes in if we call the api from render
    // const userDataPath = constants.settings_location;
    const dbpath = constants.db_path;
    // log.error(dbpath)
    try {
        if (connection == null) {
            connection = await sqlite3.open(internal_backup_folder + `/current_file.db`);
            connection.exec("PRAGMA foreign_keys=ON");
            console.log('connected to db fake')
        }

        else {
           
        }

    } catch (error) { 
        log.error(error)
        console.error(error)
    }
}
//run on start, then every hour
// startOperation();  
// startOperation(); 

//every 60 minutes

async function closeConnection() {
  try {
      await connection.close().then(succ => { connection = null; }, err => { })
      // await this.getConnection();
  } catch (error) {
      log.error(error)
  }

}

async function startOperation() {
  fs.copyFileSync(constants.db_path, internal_backup_folder + `/current_file.db`)
  

    //use placeholders for the variables
    //products, sales, sales_details, purchases, purchase_details, stock_values, outgoingpayments,
    //
    let sql = `select * from products `;

    
    
    try {
        await getConnection();
        let string = "";
        let query = await connection.all(sql);
        let company_query = await connection.get("select * from settings where name = 'company_id'");
        let company_id = "";
        if(company_query != undefined){
            company_id = company_query.value
            company_id_global = company_query.value;
        }
        else{
            company_id = null;
        }
        for(var i = 0; i < query.length; i++){
            query[i].company_id = company_id;
            query[i].product_id = query[i].id
        }
            
        fs.writeFileSync(to_upload_folder + `/${company_id}_products_to_upload.json`, JSON.stringify(query))
        ////////////////
        let sales_sql = `select * from sales`
        let sales_query = await connection.all(sales_sql);
        for(var i = 0; i < sales_query.length; i++){
            sales_query[i].company_id = company_id;
        }
        fs.writeFileSync(to_upload_folder + `/${company_id}_sales_to_upload.json`, JSON.stringify(sales_query))

        /////////////////

        let sales_details_sql = `select * from sales_details`
        let sales_details_query = await connection.all(sales_details_sql);
        for(var i = 0; i < sales_details_query.length; i++){
            sales_details_query[i].company_id = company_id;
        }
        fs.writeFileSync(to_upload_folder + `/${company_id}_sales_details_to_upload.json`, JSON.stringify(sales_details_query))
        /////////////////////////////////

        let purchase_sql = `select * from purchases`
        let purchase_query = await connection.all(purchase_sql);
        for(var i = 0; i < purchase_query.length; i++){
            purchase_query[i].company_id = company_id;
        }
        fs.writeFileSync(to_upload_folder + `/${company_id}_purchases_to_upload.json`, JSON.stringify(purchase_query))
        /////////////////////////////

        let purchase_details_sql = `select * from purchase_details`
        let purchase__details_query = await connection.all(purchase_details_sql);
        for(var i = 0; i < purchase__details_query.length; i++){
            purchase__details_query[i].company_id = company_id;
        }
        fs.writeFileSync(to_upload_folder + `/${company_id}_purchase_details_to_upload.json`, JSON.stringify(purchase__details_query))
        ///////////////////////////
        let stock_values_sql = `select * from stock_values`
        let stock_values_query = await connection.all(stock_values_sql);
        for(var i = 0; i < stock_values_query.length; i++){
            stock_values_query[i].company_id = company_id;
        }
        fs.writeFileSync(to_upload_folder + `/${company_id}_stock_values_to_upload.json`, JSON.stringify(stock_values_query))
        ///////////////////////////
        let op_sql = `select * from outgoing_payments`
        let op_query = await connection.all(op_sql);
        for(var i = 0; i < op_query.length; i++){
            op_query[i].company_id = company_id;
        } 
        fs.writeFileSync(to_upload_folder + `/${company_id}_outgoing_payments_to_upload.json`, JSON.stringify(op_query))
        //////////////////////////
        let v_sql = `select * from vendors` 
        let v_query = await connection.all(v_sql); 
        for(var i = 0; i < v_query.length; i++){
            v_query[i].company_id = company_id;
            v_query[i].local_vendor_id = v_query[i].id;
        }
        fs.writeFileSync(to_upload_folder + `/${company_id}_vendors_to_upload.json`, JSON.stringify(v_query))
        //////////////////////////
        let t_sql = `select * from transfers`
        let t_query = await connection.all(t_sql);
        for(var i = 0; i < t_query.length; i++){
          t_query[i].company_id = company_id;
        }
        fs.writeFileSync(to_upload_folder + `/${company_id}_transfers_to_upload.json`, JSON.stringify(t_query))
        //////////////////////////
        let td_sql = `select * from transfer_details`
        let td_query = await connection.all(td_sql);
        for(var i = 0; i < td_query.length; i++){
          td_query[i].company_id = company_id;
        }
        fs.writeFileSync(to_upload_folder + `/${company_id}_transfer_details_to_upload.json`, JSON.stringify(td_query))
        //////////////////////////
        let rtd_sql = `select * from received_transfer_details`
        let rtd_query = await connection.all(rtd_sql);
        for(var i = 0; i < rtd_query.length; i++){
          rtd_query[i].company_id = company_id;
        }
        fs.writeFileSync(to_upload_folder + `/${company_id}_received_transfer_details_to_upload.json`, JSON.stringify(rtd_query))
         //////////////////////////
         let rt_sql = `select * from received_transfers`
         let rt_query = await connection.all(rt_sql); 
         for(var i = 0; i < rt_query.length; i++){
          rt_query[i].company_id = company_id;
         }
         fs.writeFileSync(to_upload_folder + `/${company_id}_received_transfers_to_upload.json`, JSON.stringify(rt_query))
          //////////////////////////
          let u_sql = `select * from users`
          let u_query = await connection.all(u_sql); 
          for(var i = 0; i < u_query.length; i++){
            u_query[i].company_id = company_id;
            u_query[i].user_id =  u_query[i].id ;
          }
          fs.writeFileSync(to_upload_folder + `/${company_id}_users_to_upload.json`, JSON.stringify(u_query))
          //////////////////////////
          let b_sql = `select * from branches`
          let b_query = await connection.all(b_sql); 
          for(var i = 0; i < b_query.length; i++){
            b_query[i].company_id = company_id;
            b_query[i].branch_id =  b_query[i].id ;
          }
          fs.writeFileSync(to_upload_folder + `/${company_id}_branches_to_upload.json`, JSON.stringify(b_query))
          
         
         await closeConnection()
        compress()
        //zip the folder and upload 

    } catch (err) { 
        log.error(sql);
        console.log(sql)
        log.error(err);
    }

}


function compress() {
    var archiver = require('archiver');
    // var docs_folder = path.join(app.getPath('documents'), "druglaneBackups");
    // create a file to stream archive data to.
    var ts = getToday('timestamp_string')
    var output = fs.createWriteStream(constants.internal_backups_path + `/${company_id_global}_druglane_sync_${ts}.zip`);
    var archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    });

    // listen for all archive data to be written
    // 'close' event is fired only when a file descriptor is involved
    output.on('close', function () {
      //copy to the internal backup location
      

    //   var data = {
    //     file_name: `"${internal_backup_folder}/druglane_sync_${ts}.zip"`,
    //     description: `'manual backup'`,
    //     created_by: `'admin'`,
    //     uploaded: `'no'`,
    //     db_version: filestore.get('dbversion')
    //   }
    //   saveBackup(data)
    uploadfile(constants.internal_backups_path + `/${company_id_global}_druglane_sync_${ts}.zip`)


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
    archive.file(to_upload_folder + `/${company_id_global}_products_to_upload.json`, { name: `${company_id_global}_products_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_sales_to_upload.json`, { name: `${company_id_global}_sales_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_sales_details_to_upload.json`, { name: `${company_id_global}_sales_details_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_purchases_to_upload.json`, { name: `${company_id_global}_purchases_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_purchase_details_to_upload.json`, { name: `${company_id_global}_purchase_details_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_stock_values_to_upload.json`, { name: `${company_id_global}_stock_values_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_vendors_to_upload.json`, { name: `${company_id_global}_vendors_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_outgoing_payments_to_upload.json`, { name: `${company_id_global}_outgoing_payments_to_upload.json` });
  
    archive.file(to_upload_folder + `/${company_id_global}_transfers_to_upload.json`, { name: `${company_id_global}_transfers_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_transfer_details_to_upload.json`, { name: `${company_id_global}_transfer_details_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_received_transfers_to_upload.json`, { name: `${company_id_global}_received_transfers_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_received_transfer_details_to_upload.json`, { name: `${company_id_global}_received_transfer_details_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_users_to_upload.json`, { name: `${company_id_global}_users_to_upload.json` });
    archive.file(to_upload_folder + `/${company_id_global}_branches_to_upload.json`, { name: `${company_id_global}_branches_to_upload.json` });
 
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

  async function uploadfile(file_location) {
    
    global.file_to_sync = file_location;
    global.company_id = company_id_global;
    try { 
      createWindow()
      //why not open a new broser window and try to upload the file from there? 
        
        // const FormData = require('form-data');
        // let formdata = new FormData()
       
 

        // const fetch = require('node-fetch');

        // // const req = require("request");
        // const fs = require("fs");
         
        // // formdata.append('file', fs.createReadStream(file_location));
        // formdata.append('company_id', company_id_global);
        //    console.log( formdata)
        // const postUrl = constants.server_url + "/api_admin/sync" //replace your upload url here     req.post({url: postUrl,formData: formData }, function(err, httpResponse, body) {        
        
        //   const axios = require('axios')

        //  let resp =  await axios  
        //     .post(postUrl, formdata, {
        //       // You need to use `getHeaders()` in Node.js because Axios doesn't
        //       // automatically set the multipart form boundary in Node.
        //       headers: formdata.getHeaders()
        //     });
        //     console.log(resp)
           
  

      
    } catch (error) {
      console.log(error)

      // res.redirect('restoreBackup?m=Server error. Please try again or contact your admin');

    }

  }
let mwindow = null;
  function createWindow() {
    //  mainWindow = new MainWindow(`./app/index.html`); 
    mwindow = new BrowserWindow({
      height: 300,
      width: 300,
      title: `${appName}Server Sync`,
      webPreferences: {
        nodeIntegration: true
      },

      icon: `${__dirname}/app/assets/icon2.png`,
      x: 0,
      y:0

    });  

    mwindow.loadURL(`file://${__dirname}/app/sync.html`);
    // mwindow.webContents.openDevTools()
   

    // mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    // mainWindow.loadFile('./app/index.html')
  }

  exports.start_sync= function(){startOperation()} 
//read the data, and upload them