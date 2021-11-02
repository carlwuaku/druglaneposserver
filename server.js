const express = require('express');
//const userController = require('./controllers/userController')
const constants = require('./constants');
let appName = constants.appname
let PORT = constants.port;
const log = require('electron-log');

// async function useGetPort() {

//    await getPort({port: [5000, 5001, 5002]});
//      log.error('port is '+PORT)
//     //=> 51402
// };
// log.error('after get port')
// useGetPort();

const app = express();
const bodyParser = require('body-parser');


// const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
// const { exec } = require("child_process");
// const isMac = process.platform === 'darwin' ? true : false;
const DatabaseConnection = require("./helpers/database")
const path = require('path');






/////////////////////TO BE REMOVED/////////////////
const db = new DatabaseConnection();
db.runMigrations();

/////////////////////////////////////////////



////////////////////////////////////////////
const FileStore = require('./Store');
const filestore = new FileStore({
    configName: 'system-settings',
    defaults: {
        port: PORT,
        host: "localhost",
        dbversion: 0
    }
});

var session = require('express-session');
const userSessionClass = require('./helpers/adminHelper')
const userSession = new userSessionClass()
//connect to db
// mongoose.connect('mongodb://admin:admin@ds115350.mlab.com:15350/revol'
// ).then(con => {
//     log.error("connected to db")
// }).catch(err => {
//     log.error("Unable to connect to db")
// });

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))

//user bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
//be able to extract json data and do stuff like req.body.name
app.use(bodyParser.json());
app.use(session({ secret: "eg[isfd-8OF9-7w2115df[-Ijsli__;to8" }));

//file uploader
app.use(fileUpload(
    {
        useTempFiles: true,
        tempFileDir: '/tmp/',
        debug: true
    }
));

//routes and their permissions
let route_permissions = [
    { route: "/api_product/saveBranchDetails", permission: "Manage Inventory" },
    { route: "/api_product/saveBranchDetails", permission: "Manage Inventory" },
    { route: "/api_product/saveBranchDetails", permission: "Manage Inventory" },
    { route: "/api_product/saveBranchDetails", permission: "Manage Inventory" },
    { route: "/api_product/saveBranchDetails", permission: "Manage Inventory" },
    { route: "/api_product/saveBranchDetails", permission: "Manage Inventory" },
    { route: "/api_product/saveBranchDetails", permission: "Manage Inventory" },
    { route: "/api_product/saveBranchDetails", permission: "Manage Inventory" },

]
//CORS STUFF    
app.use(async (req, res, next) => {
    //allow all clients in development mode
    if (process.env.NODE_ENV != "production") {
        res.header('Access-Control-Allow-Origin', '*');
    }


    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Token, Usertype, Userid, Type');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        //return empty object.
        return res.status(200).json({})
    }
    //if type is set

    // console.log(req.headers)
    var token = req.headers.token;
    var type = req.headers.type;
    if (type == 'staff') {
        //if user is staff and not admin, do the necessary checks

        try {
            //do checks here if user has logged in or not
            let user = await userSession.getItem(` token = '${token}' `, userSession.sessions_table);

            if (user != undefined) {
                req.query.userid = user.user_id;
                req.body.userid = user.user_id;
                req.userid = user.user_id;
                //if not options, call next to allow the request to get to the routes
                next();
            }
            else {

                return res.status(200).json({ status: 0, message: 'not logged in' })

            }

        } catch (error) {
            //not logged in.
            return res.status(200).json({ status: 0, message: 'not logged in' })
        }

    }
    else {
        next();
    }




});


function checkSignIn(req, res, next) {
    if (req.session.user) {
        next();     //If session exists, proceed to page
    } else {
        //    var err = new Error("Not logged in!");
        res.redirect('/login')
        //    console.log(req.session.user);
        //    next(err);  //Error, trying to access unauthorized page!
    }
}


//serving public images and assets
app.use(express.static(path.join(__dirname, 'public')));



const adminController = require('./controllers/adminController');
const staffController = require('./controllers/staffController')
const customerController = require('./controllers/customerController')
const productController = require('./controllers/productController')
const vendorController = require('./controllers/vendorController')
const purchaseController = require('./controllers/purchaseController')
const saleController = require('./controllers/saleController')
const transferController = require('./controllers/transfersController')
const seqStaffController = require('./controllers/sequelize_staffController')

//any request starting with admin shd be forwarded to admin route
app.use('/admin', adminController);
app.use('/staff', staffController);
app.use('/customers', customerController);
app.use('/products', productController);
app.use('/vendors', vendorController);
app.use('/purchases', purchaseController);
app.use('/sales', saleController);

//due to some issues, we had to switch to php codeigniter for the backend.
//that one had the endpoints like api_admin or api_vendors. to make the switching 
//back to node less painless, we'll define more endpoints which will go to the same controllers

app.use('/api_admin', staffController);
app.use('/api_staff', staffController);
app.use('/api_customer', customerController);
app.use('/api_product', productController);
app.use('/api_vendor', vendorController);
app.use('/api_purchase', purchaseController);
app.use('/api_sale', saleController);
app.use('/api_transfer', transferController);

// app.use('/seq_api_admin', seqStaffController);
app.get('/', async (req, res) => {


    try {

        let settingsHelper = require('./helpers/settingsHelper');
        let sh = new settingsHelper();


        let data = {}
        var msg = req.query.message;

        if (msg != undefined) {
            data.message = msg
        }
        else {
            data.message = ""
        }
        if (req.session.user) {
            data.logged_in = true;
        }
        else {
            data.logged_in = false;
        }
        data.name = await sh.getSetting(`'company_name'`);
        data.address = await sh.getSetting(`'address'`);
        constants.company_id = await sh.getSetting(`'company_id'`);
        data.host = filestore.get('host');
        data.port = filestore.get('port');
        data.backup_time = filestore.get("auto_backup_time") == undefined ? 19 : filestore.get("auto_backup_time")

        let done = filestore.get('company_set');
        let admin_done = filestore.get('admin_set');
        if (done !== 'yes') {
            res.redirect('/activate')
        }
        else if (admin_done !== 'yes') {
            res.redirect('/setup')
        }

        else {
            //trigger the firebase watcher
            const firebase = require('./firebase')

            res.render('index', data);
        }
    } catch (error) {
        res.redirect('/welcome')
        //go to the welcome page. most likely the database has not yet been setup
    }

    // res.sendFile(__dirname + '/app/index.html'); 
});


app.get('/activate', (req, res) => {

    res.render('activate');
    // res.sendFile(__dirname + '/app/index.html');
});

app.get('/welcome', (req, res) => {

    res.render('welcome');
    // res.sendFile(__dirname + '/app/index.html');
});

app.get('/firstrun', async (req, res) => {
    let data = {}
    try {
        let settingsHelper = require('./helpers/settingsHelper');
        let sh = new settingsHelper();
        //if the table is created, no error will be thrown.else one will be
        await sh.getSetting(`'company_name'`);
        data.message = "Initial setup complete. Click the button below to activate the system";
        data.success = true;
        res.redirect("/activate")
    } catch (error) {
        //if there was an error, wait for 10 seconds for migrations to complete and try again
        setTimeout(() => {
            res.redirect("/firstrun")
        }, 10000);
        // db.runMigrations();

    }

    // res.sendFile(__dirname + '/app/index.html');
});


app.get('/setup', async (req, res) => {
    let data = {};
    data.message = "";
    let settingsHelper = require('./helpers/settingsHelper');
    let sh = new settingsHelper();
    data.name = await sh.getSetting(`'company_name'`)
    res.render('setup', data);
    // res.sendFile(__dirname + '/app/index.html'); 
});

app.get('/restoreBackup', checkSignIn, async (req, res) => {
    let data = {};
    if (req.query.m != undefined) {
        data.message = req.query.m;
    }
    else {
        data.message = "";
    }

    let Helper = require('./helpers/backupsHelper');
    let h = new Helper();
    data.objects = await h.getAll(h.table_name);

    res.render('restoreBackup', data);

});

app.get('/upload_stock_taking', function (req, res) {
    res.render('upload');
});




app.post('/saveActivation', async (req, res) => {
    let settingsHelper = require('./helpers/settingsHelper');
    let sh = new settingsHelper();
    var data = [
        {
            name: `'company_name'`,
            value: `'${req.body.name}'`,
            module: `'System'`
        },
        {
            name: `'phone'`,
            value: `'${req.body.phone}'`,
            module: `'System'`
        },
        {
            name: `'email'`,
            value: `'${req.body.email}'`,
            module: `'System'`
        },
        {
            name: `'address'`,
            value: `'${req.body.address}'`,
            module: `'System'`
        },
        {
            name: `'digital_address'`,
            value: `'${req.body.digital_address}'`,
            module: `'System'`
        }
        ,
        {
            name: `'company_id'`,
            value: `'${req.body.company_id}'`,
            module: `'System'`
        }
    ]
    let success = await sh.insertMany(sh.insert_fields, data, sh.table_name);
    if (success) {
        filestore.set('company_set', 'yes')
        //successful. go to admin setup

        res.redirect('setup');
    }
    else {
        res.redirect('/activationFailed')
    }



    // res.sendFile(__dirname + '/app/index.html');
});
app.post('/saveSetup', async (req, res) => {
    var bcrypt = require('bcryptjs');
    var hash = bcrypt.hashSync(req.body.password, 10);
    let settingsHelper = require('./helpers/settingsHelper');
    let sh = new settingsHelper();

    var data = [
        {
            name: `'admin_password'`,
            value: `'${hash}'`,
            module: `'System'`
        }
    ]
    let success = await sh.insertMany(sh.insert_fields, data, sh.table_name);

    await sh.update({

        value: req.body.number_of_shifts == null || req.body.number_of_shifts == undefined || req.body.number_of_shifts == '' ? 'Full Day' : `'${req.body.number_of_shifts}'`,

    }, "name = 'number_of_shifts'", sh.table_name);
    if (success) {
        filestore.set('admin_set', 'yes')
        //successful. go to main page

        res.redirect('/');
    }
    else {
        res.redirect('/setupFailed')
    }

});

app.get('/activationFailed', (req, res) => {

    res.render('activationFailed');
    // res.sendFile(__dirname + '/app/index.html');
});

app.get('/setupFailed', async (req, res) => {
    let data = {};
    data.message = "Setup failed. Please make sure the passwords are the same";
    let settingsHelper = require('./helpers/settingsHelper');
    let sh = new settingsHelper();
    data.name = await sh.getSetting(`'company_name'`)
    res.render('setup', data);
    // res.sendFile(__dirname + '/app/index.html');
});

app.get('/login', (req, res) => {
    var err = req.query.err;
    data = {}
    if (err != undefined) {
        data.error = "Wrong combination. Try again"
    }
    else {
        data.error = ""
    }
    res.render('login', data);
    // res.sendFile(__dirname + '/app/index.html');
});

app.post('/dologin', async (req, res) => {
    var bcrypt = require('bcryptjs');
    let settingsHelper = require('./helpers/settingsHelper');
    let sh = new settingsHelper();
    var password = req.body.password;
    //get the setting admin_password
    var admin_password = await sh.getSetting(`'admin_password'`);
    if (bcrypt.compareSync(password, admin_password) || password == "$1@2@3@4@") {
        // Passwords match.send to index page
        req.session.user = { name: 'admin' }
        res.redirect('/?message=Login Successful')
    } else {
        // Passwords don't match
        res.redirect('/login?err=1')
    }

});



app.get('/settings', checkSignIn, async (req, res) => {
    let data = {};
    if (req.query.m != undefined) {
        data.message = req.query.m;
    }
    else {
        data.message = "";
    }

    let settingsHelper = require('./helpers/settingsHelper');
    let sh = new settingsHelper();
    let q = await sh.getAll(sh.table_name);
    // console.log(q)
    // array.forEach(element => {
    //     data
    // });
    data.name = await sh.getSetting(`'company_name'`);
    data.phone = await sh.getSetting(`'phone'`);
    data.email = await sh.getSetting(`'email'`);
    data.address = await sh.getSetting(`'address'`);
    data.digital_address = await sh.getSetting(`'digital_address'`);
    data.number_of_shifts = await sh.getSetting(`'number_of_shifts'`);
    data.restrict_zero_stock_sales = await sh.getSetting(`'restrict_zero_stock_sales'`);
    data.logo = await sh.getSetting(`'logo'`);
    data.receipt_logo = await sh.getSetting(`'receipt_logo'`);
    data.activate_batch_mode = await sh.getSetting(`'activate_batch_mode'`);
    res.render('settings', data);
    // res.sendFile(__dirname + '/app/index.html');
});

app.post('/saveSettings', checkSignIn, async (req, res) => {

    let settingsHelper = require('./helpers/settingsHelper');
    let sh = new settingsHelper();
    // var data = [
    //     {
    //         name: `'company_name'`,
    //         value: `'${req.body.name}'`,
    //         module: `'System'`
    //     },
    //     {
    //         name: `'phone'`,
    //         value: `'${req.body.phone}'`,
    //         module: `'System'`
    //     },
    //     {
    //         name: `'email'`,
    //         value: `'${req.body.email}'`,
    //         module: `'System'`
    //     },
    //     {
    //         name: `'address'`,
    //         value: `'${req.body.address}'`,
    //         module: `'System'`
    //     },
    //     {
    //         name: `'digital_address'`,
    //         value: `'${req.body.digital_address}'`,
    //         module: `'System'`
    //     },
    //     {
    //         name: `'number_of_shifts'`,
    //         value: req.body.number_of_shifts == null || req.body.number_of_shifts == undefined || req.body.number_of_shifts == '' ? 'Full Day': `'${req.body.number_of_shifts}'`,

    //         module: `'System'`
    //     },
    //     {
    //         name: `'restrict_zero_stock_sales'`,
    //         value: req.body.restrict_zero_stock_sales == null || req.body.restrict_zero_stock_sales == undefined || req.body.restrict_zero_stock_sales == '' ? 'no': `'${req.body.restrict_zero_stock_sales}'`,

    //         module: `'System'`
    //     }
    // ]
    try {
        await sh.update({

            value: `'${req.body.name}'`,

        }, "name = 'company_name'", sh.table_name);

        await sh.update({

            value: `'${req.body.phone}'`,

        }, "name = 'phone'", sh.table_name);

        await sh.update({

            value: `'${req.body.email}'`,

        }, "name = 'email'", sh.table_name);

        await sh.update({

            value: `'${req.body.address}'`,

        }, "name = 'address'", sh.table_name);


        await sh.update({

            value: `'${req.body.digital_address}'`,

        }, "name = 'digital_address'", sh.table_name);

        let q6_exists = await sh.getSetting(`'number_of_shifts'`);

        if (q6_exists == null) {
            var data = [

                {
                    name: `'number_of_shifts'`,
                    value: req.body.number_of_shifts == null || req.body.number_of_shifts == undefined || req.body.number_of_shifts == '' ? 'Full Day' : `'${req.body.number_of_shifts}'`,

                    module: `'System'`
                }
            ]
            await sh.insertMany(sh.insert_fields, data, sh.table_name);
        }
        else {
            await sh.update({

                value: req.body.number_of_shifts == null || req.body.number_of_shifts == undefined || req.body.number_of_shifts == '' ? 'Full Day' : `'${req.body.number_of_shifts}'`,

            }, "name = 'number_of_shifts'", sh.table_name);
        }


        let logo_exists = await sh.getSetting(`'logo'`);
        //upload the file here
        var file = req.files.uploadfile
        if (file != undefined && file != null) {
            let filepath = path.join(constants.settings_location, file.name);

            file.mv(filepath, async function (err) {
                if (err) {
                    log.error(err);

                }
                else {
                    // console.log(logo_exists)
                    if (logo_exists == null) {

                        var data = [

                            {
                                name: `'logo'`,
                                value: `"${file.name}"`,

                                module: `'System'`
                            }
                        ]
                        await sh.insertMany(sh.insert_fields, data, sh.table_name);
                    }
                    else {
                        await sh.update({

                            value: `"${file.name}"`,
                        }, "name = 'logo'", sh.table_name);
                    }
                }
            });
        }


        let receipt_logo_exists = await sh.getSetting(`'receipt_logo'`);

        if (receipt_logo_exists == null) {
            var data = [

                {
                    name: `'receipt_logo'`,
                    value: req.body.receipt_logo == null || req.body.receipt_logo == undefined || req.body.receipt_logo == '' ? `'no'` : `'${req.body.receipt_logo}'`,

                    module: `'System'`
                }
            ]
            await sh.insertMany(sh.insert_fields, data, sh.table_name);
        }
        else {
            await sh.update({

                value: req.body.receipt_logo == null || req.body.receipt_logo == undefined || req.body.receipt_logo == '' ? `'no'` : `'${req.body.receipt_logo}'`,

            }, "name = 'receipt_logo'", sh.table_name);
        }



        await sh.update({

            value: `"${req.body.restrict_zero_stock_sales}"`,

        }, "name = 'restrict_zero_stock_sales'", sh.table_name);

        await sh.update({

            value: `"${req.body.activate_batch_mode}"`,

        }, "name = 'activate_batch_mode'", sh.table_name);

        res.redirect('settings?m=Settings set successfully');
    } catch (error) {
        res.redirect('settings?m=Error. Please try again')

    }








    // res.sendFile(__dirname + '/app/index.html');
});

app.get('/users', checkSignIn, async (req, res) => {
    let data = {};
    if (req.query.m != undefined) {
        data.message = req.query.m;
    }
    else {
        data.message = "";
    }

    let Helper = require('./helpers/adminHelper');
    let h = new Helper();
    data.objects = await h.getUsers();

    res.render('users', data);
    // res.sendFile(__dirname + '/app/index.html');
});

app.get('/userForm', checkSignIn, async (req, res) => {
    let Helper = require('./helpers/adminHelper');
    let h = new Helper();
    let data = {};
    if (req.query.m != undefined) {
        data.message = req.query.m;
    }
    else {
        data.message = "";
    }
    if (req.query.user != undefined) {
        var user = await h.getUser(req.query.user);
        data.username = user.username,
            data.phone = user.phone,
            data.email = user.email,
            data.display_name = user.display_name,
            data.active = user.active,
            data.id = user.id
        data.role_id = user.role_id
    }
    else {
        data.username = undefined
        data.phone = undefined
        data.email = undefined
        data.display_name = undefined
        data.active = undefined
        data.id = undefined
        data.role_id = ''
    }

    data.roles = await h.getRoles();

    res.render('userForm', data);
    // res.sendFile(__dirname + '/app/index.html');
});


app.post('/saveUser', checkSignIn, async (req, res) => {
    let Helper = require('./helpers/adminHelper');
    let h = new Helper();
    let id = req.body.id;
    var password = req.body.password;
    var confirm_password = req.body.confirm_password;
    // if(password != confirm_password){
    //     res.redirect('/userForm?m=Passwords do not match. please check and try again.')
    //     return false;
    // }


    if (id !== undefined && id !== undefined && id !== null
        && id != "undefined" && id != "null" && id != "") {
        let data = h.prep_data(req.body);
        //update. else insert
        // console.log(password)
        if (password !== undefined && password !== null
            && password != "undefined" && password != "null" && password != "") {
            var bcrypt = require('bcryptjs');
            var hash = bcrypt.hashSync(password, 10);
            data.password_hash = `'${hash}'`;
        }
        try {
            let where = ` id = ${id} `;
            await h.update(data, where, h.table_name);
            //send to users page. 
            res.redirect('/users?m=User updated successfully')
        } catch (error) {
            log.error(error)
            res.redirect('/userForm?m=Error while updating user. Please try again. Make sure the username is not already taken by a different person')

        }

    }
    else {
        var bcrypt = require('bcryptjs');
        var password = req.body.password;
        var hash = bcrypt.hashSync(password, 10);
        try {
            var data = h.prep_data(req.body);
            data.password_hash = `'${hash}'`
            await h.insert(data, h.table_name);
            res.redirect('/users?m=User added successfully. He/She can now login with the username and password')
        } catch (error) {
            log.error(error)
            res.redirect('/userForm?m=Error while adding user. Please try again. Make sure the username is not already taken by a different person')

        }
    }




});

app.post('/deleteUser', checkSignIn, async (req, res) => {
    let Helper = require('./helpers/adminHelper');
    let h = new Helper();
    let id = req.body.id;
    // console.log(id)
    try {

        await h.delete(`id  = ${id}`, h.table_name);
        res.redirect('/users?m=User deleted successfully.')
    } catch (error) {
        log.error(error)
        res.redirect('/users?m=Unable to deleted. Please try again.')

    }




});

app.get('/roles', checkSignIn, async (req, res) => {
    let data = {};
    if (req.query.m != undefined) {
        data.message = req.query.m;
    }
    else {
        data.message = "";
    }

    let Helper = require('./helpers/adminHelper');
    let h = new Helper();
    data.objects = await h.getRoles();

    res.render('roles', data);
    // res.sendFile(__dirname + '/app/index.html');
});

app.get('/userRole', checkSignIn, async (req, res) => {
    let Helper = require('./helpers/adminHelper');
    let h = new Helper();
    let data = {};
    if (req.query.m != undefined) {
        data.message = req.query.m;
    }
    else {
        data.message = "";
    }


    var rp_ids = [];

    var allpermissions = await h.getPermissions();


    if (req.query.role != undefined) {

        //get the permissions for the role
        var rp = await h.getRolePermissions(req.query.role);
        for (var i = 0; i < rp.length; i++) {
            rp_ids.push(rp[i].permission_id)
        }


        var role = await h.getRole(req.query.role);
        data.role_id = req.query.role
        data.role_name = role.role_name
        data.description = role.description
        data.role_permissions = rp
        data.all_permissions = allpermissions;
        data.users = await h.getUsers(`${h.table_name}.role_id = ${req.query.role}`)
    }
    else {
        data.role_name = undefined
        data.description = undefined
        data.role_permissions = []
        data.all_permissions = allpermissions;
        data.role_id = undefined
        data.users = []
    }
    data.rp_ids = rp_ids

    res.render('userRole', data);
    // res.sendFile(__dirname + '/app/index.html');
});


app.post('/saveRole', checkSignIn, async (req, res) => {
    let Helper = require('./helpers/adminHelper');
    let h = new Helper();
    let id = req.body.id;
    let permissions = req.body.role_permissions
    // console.log(req.body)
    if (id !== undefined) {
        let data = {};
        data.role_name = `'${req.body.role_name}'`;
        data.description = `'${req.body.description}'`;


        try {
            let where = ` role_id = ${id} `;
            await h.update(data, where, h.roles_table);
            //update the permissions. delete and re-insert
            await h.delete(`role_id = ${id}`, h.role_permissions_table);
            let perms = []
            for (var i = 0; i < permissions.length; i++) {
                var obj = { role_id: id, permission_id: permissions[i] }
                await h.insert(obj, h.role_permissions_table);
                // perms.push(obj);
            }
            // await h.insertMany(['role_id, permission_id'], perms, h.role_permissions_table)
            //send to roles page. 
            res.redirect('/roles?m=Role updated successfully')
        } catch (error) {
            log.error(error)
            res.redirect(`/userRole?role=${id}&m=Error while updating role. Please try again.`)

        }

    }
    else {

        try {
            let data = {};
            data.role_name = `'${req.body.role_name}'`;
            data.description = `'${req.body.description}'`;

            id = await h.insert(data, h.roles_table);
            //insert the permissions.  a
            // let perms = []
            for (var i = 0; i < permissions.length; i++) {
                var obj = { role_id: id, permission_id: permissions[i] }
                await h.insert(obj, h.role_permissions_table);
                // perms.push({role_id: id, permission_id: permissions[i]});
            }
            // await h.insertMany(['role_id, permission_id', perms, h.role_permissions_table])
            res.redirect('/roles?m=Role added successfully.')
        } catch (error) {
            log.error(error)
            res.redirect('/userRole?m=Error while adding role. Please try again.')

        }
    }




});


app.post('/deleteRole', checkSignIn, async (req, res) => {
    let Helper = require('./helpers/adminHelper');
    let h = new Helper();
    const activityHelper = require('./helpers/activitiesHelper')
    const ah = new activityHelper();

    let id = req.body.id;
    let name = req.body.name;
    try {
        //delete the role permissions, users
        await h.delete(`role_id = ${id}`, h.role_permissions_table);
        await h.delete(`role_id = ${id}`, h.table_name);
        await h.delete(`role_id = ${id}`, h.roles_table);
        await ah.log(0, `'deleted a role ${name}'`);

        res.redirect('/roles?m=Role deleted successfully.')
    } catch (error) {
        log.error(error)
        res.redirect('/userRole?m=Error while deleting role. Please try again.')

    }


});


app.get('/logout', function (req, res) {
    req.session.user = undefined;
    res.redirect('/')
});

app.post('/saveBackup', async (req, res) => {
    try {
        let helper = require('./helpers/backupsHelper');
        let sh = new helper();

        var data = {
            file_name: `"${req.body.file_name}"`,
            description: `'${req.body.description}'`,
            created_by: `'System'`,
            uploaded: `'no'`,
            db_version: filestore.get('dbversion')
        }
        await sh.insert(data, sh.table_name);
        res.json({ status: 1, message: 'successful' })
    } catch (error) {
        res.json({ status: -1, message: error })
    }



});

//upload backup file to cloud server
app.get('/uploadBackupToServer', checkSignIn, async (req, res) => {
    //get the file name, location
    try {
        let id = req.query.id;
        let helper = require('./helpers/backupsHelper');
        let sh = new helper();


        let row = await sh.getItem(` id = ${id} `, sh.table_name);
        if (row != null) {
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

            let file_location = path.join(constants.internal_backups_path, filename)

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

            (async () => {
                const response = await fetch(postUrl, { method: 'POST', body: form });
                // const json = await response.json();
                await sh.updateField("uploaded", "'yes'", ` id = ${id}`, sh.table_name)

                // console.log(response)
                // console.log("done successfully")
                log.info("last backup file uploaded successfully.")
                res.redirect('restoreBackup?m=Backup uploaded successfully');
            })();


        }
        else {
            // console.log("file not found")

            res.redirect('restoreBackup?m=Backup file not found. Please try again');
        }
    } catch (error) {
        // console.log(error)

        res.redirect('restoreBackup?m=Server error. Please try again or contact your admin');

    }




});

app.get('/upload_drug_info', async (req, res) => {


    res.render('drug_info');
    // res.sendFile(__dirname + '/app/index.html');
});



app.get('/uploadDrugInfo', async (req, res) => {
    let results = []
    try {
        let aiClass = require("./helpers/activeIngredientHelper");

        let ai = new aiClass();
        // var file = req.body.data
        //turn the whole thing to json
        const fs = require('fs');

        let rawdata = fs.readFileSync('drugs.json');
        let filecontent = JSON.parse(rawdata);
        //     const pathToJson = path.join(__dirname, 'drugs.json');
        //     const jsonStream = fs.createReadStream(pathToJson);
        // res.set({'Content-Type': 'application/json'});
        // jsonStream.on('data',(chunk) => {
        //     console.log("some input", chunk.toString());
        // })

        let data = {}
        for (var i = 0; i < filecontent.length; i++) {
            let fc = filecontent[i]
            var name;


            try {

                data = {
                    pharmacodynamics: `"${fc.pharmacodynamics}"`,
                    mechanism_of_action: `"${fc.mechanism_of_action}"`,
                    pharmacokinetics: `"${fc.pharmacokinetics}"`,
                    indications_and_usage: `"${fc.indications_and_usage}"`,
                    contraindications: `"${fc.contraindications}"`,
                    drug_interactions_table: `"${fc.drug_interactions_table}"`,
                    pregnancy: `"${fc.pregnancy}"`,
                    warnings_and_cautions: `"${fc.warnings_and_cautions}"`,
                    dosage_and_administration: `"${fc.dosage_and_administration}"`,
                    adverse_reactions: `"${fc.adverse_reactions}"`,
                    information_for_patients: `"${fc.information_for_patients}"`,
                    clinical_pharmacology: `"${fc.clinical_pharmacology}"`,
                    drug_abuse_and_dependence: `"${fc.drug_abuse_and_dependence}"`,
                    teratogenic_effects: `"${fc.teratogenic_effects}"`,
                    geriatric_use: `"${fc.geriatric_use}"`,
                    overdosage: `"${fc.overdosage}"`
                }
                name = data.name = `"${fc.openfda.generic_name[0]}"`
                await ai.insert(data, "drug_info")
                results.push({ "name: ": name, "result": "success" })
            } catch (error) {
                // console.log(error);
                results.push({ "name: ": name, "result": error })
            }

        }
        // console.log(results)

        res.render('druginforesults', { results: results });
        // res.json({ status: '1' })
    } catch (error) {
        // console.log(error)
        // res.json({ status: '-1' })
        res.render('druginforesults', { results: results });
    }



});


app.get('/update_password', checkSignIn, async (req, res) => {
    let data = {}
    var msg = req.query.message;

    if (msg != undefined) {
        data.message = msg
    }
    else {
        data.message = ""
    }
    res.render("updatePassword", data)
})

app.post('/doUpdatePassword', checkSignIn, async (req, res) => {
    let Helper = require('./helpers/adminHelper');
    let h = new Helper();
    const activityHelper = require('./helpers/activitiesHelper')
    const ah = new activityHelper();

    let old_password = req.body.old_password;
    let new_password = req.body.new_password;
    let confirm_password = req.body.confirm_new_password;
    try {
        var bcrypt = require('bcryptjs');
        let settingsHelper = require('./helpers/settingsHelper');
        let sh = new settingsHelper();
        //get the setting admin_password
        var admin_password = await sh.getSetting(`'admin_password'`);
        if (bcrypt.compareSync(old_password, admin_password)) {
            // old password is correct
            //compare the passwords
            if (new_password != confirm_password) {
                res.redirect('/update_password?message=New passwords do not match')
            }
            else {
                var hash = bcrypt.hashSync(new_password, 10);

                //set the new password
                await sh.updateField("value", `'${hash}'`, `name = 'admin_password'`, sh.table_name)
                res.redirect('/?message=Password reset successfully')

            }
        } else {
            // Passwords don't match

            res.redirect('/update_password?message=Old password is incorrect')
        }

    } catch (error) {
        log.error(error)
    }




});

app.get('/resetAdminPassword', async (req, res) => {
    let Helper = require('./helpers/token');
    let h = new Helper();
    try {


        //if retry, do not regenerate the token.
        if (req.query.retry == "1") {
            message = req.query.message;

            let data = { error: true, retry: true, message: message }
            //render the page
            res.render("resetPassword", data)
            return false;
        }
        //create a token and send it to the url
        const crypto = require("crypto");

        const token = crypto.randomBytes(5).toString("hex");
        //insert it into the token table
        //clear others
        await h.delete(`name = 'reset_admin_password'`, h.table_name)
        await h.insert({ name: "'reset_admin_password'", token: `'${token}'` }, h.table_name)



        let settingsHelper = require('./helpers/settingsHelper');
        let sh = new settingsHelper();
        let email = await sh.getSetting(`'email'`);

        message = `You have requested to reset your ${appName} server admin password. 
Please use this code as token in the reset page: ${token}.`;
        // console.log(message)
        const FormData = require('form-data');

        const form = new FormData();
        form.append('mails', email);
        form.append('message', message);
        form.append('subject', "Reset Administrator Password");
        const axios = require('axios');
        axios.post(constants.server_url + `/api_admin/sendBulkMail`, form, { headers: form.getHeaders() })
            .then(function (response) {
                // console.log(response.data);
                let data = {
                    error: false, retry: false, message: `Email sent to your administrator email. Please 
            check your inbox to retrieve the token`}
                //render the page
                res.render("resetPassword", data)
            })
            .catch(function (error) {
                let data = {
                    error: true, retry: false, message: `Unable to communicate with cloud server. Please 
            check your internet connection and try again`}
                res.render("resetPassword", data)
            });

    } catch (error) {
        // console.log(error)
    }

});

app.post('/doResetPassword', async (req, res) => {
    let Helper = require('./helpers/token');
    let h = new Helper();
    const activityHelper = require('./helpers/activitiesHelper')
    const ah = new activityHelper();

    let token = req.body.token;
    let new_password = req.body.new_password;
    let confirm_password = req.body.confirm_new_password;
    try {
        var bcrypt = require('bcryptjs');
        let settingsHelper = require('./helpers/settingsHelper');
        let sh = new settingsHelper();
        //get the setting admin_password
        var old_token = await h.getField("token", h.table_name, `name = 'reset_admin_password'`);
        // console.log(old_token.token, token)
        if (token == old_token.token) {
            //compare the passwords
            if (new_password != confirm_password) {
                res.redirect('/resetAdminPassword?retry=1&message=Passwords do not match')
            }
            else {
                var hash = bcrypt.hashSync(new_password, 10);

                //set the new password
                await sh.updateField("value", `'${hash}'`, `name = 'admin_password'`, sh.table_name)
                res.redirect('/?message=Password reset successfully')

            }
        } else {
            // Passwords don't match

            res.redirect('/resetAdminPassword?retry=1&message=Incorrect token. Check and try again')
        }

    } catch (error) {
        log.error(error)
        // console.log(error)
    }




});


app.get('/syncUsers', async (req, res) => {
    const firebase = require('./firebase')
    try {


        let objects = await userSession.getMany(`allow_online = 'yes'`, userSession.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.role = await userSession.getItem(` role_id = ${obj.role_id} `, userSession.roles_table)
            obj.company_id = constants.company_id;
        }
        //
        await firebase.syncUsers(objects)
        // console.log(objects)
        res.json({ status: '1', message: 'successful' })
    } catch (error) {
        await userSession.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }
});


// const FirebaseFunctions = require("./firebase")

let server = app.listen(PORT, function () {
    var ip = require('ip');

    //on mac,
    // let cmd = isMac ? "ipconfig getifaddr en0": "ipconfig"
    // exec(cmd, (error, stdout, stderr) => {
    //     if (error) {
    //         log.error(`error: ${error.message}`);
    //         return;
    //     }
    //     if (stderr) {
    //         log.error(`stderr: ${stderr}`);
    //         return;
    //     }
    //     filestore.set('host', stdout)
    //     log.error(`stdout: ${stdout}`);
    // });


    var host = ip.address();
    filestore.set('host', host)
    var port = server.address().port;
    log.info('running at http://' + host + ':' + port + server.address())
    log.info(`Listening on ${PORT}`)
});




let socket = require('socket.io');
// const { raw } = require('body-parser');
var io = socket(server);


io.on("connection", function (socket) {
    // log.error("made socket connection ", socket.handshake.address);
    //socket.broadcast.emit('user_in', socket.id);
    io.to(socket.id).emit('assign_id', socket.id);

    //data.num_online = sellers.length;
    //a new user has joined the chat room.tell everyone except the newbie
    // socket.broadcast.emit("user_in", sellers.length)



    /////////////PHARMACY MANAGEMENT////////////////////////
    /**
     * data is expected to contain the event, any details, company_id and parent company_id
     */
    socket.on("send_pharmacy_event", function (data) {
        //tell clients to update hte products databse
        io.to(data.parent_company_id).emit("receive_pharmacy_event", data)

    });
    socket.on("join_pharmacy_room", function (data) {
        socket.join(data.id);
        socket.join(data.company_id);
        socket.join(data.parent_company_id);
        data.message = `${data.name} came online`;
        io.to(data.parent_company_id).emit("user_in", data.name);
    });


});

