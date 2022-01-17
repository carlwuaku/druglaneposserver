/**
 * This contains the logic for all the functionalities in the staffcontroller. also used in the 
 * firebase functions. all functions must be async, and throw errors if necessary
 */
const constants = require('../constants');
const path = require('path')

const ActivitiesHelper = require('../helpers/activitiesHelper');

const AdminHelper = require('../helpers/adminHelper');
// const { default: rebuild } = require('electron-rebuild');
const helper = new AdminHelper();
const activitiesHelper = new ActivitiesHelper()

const CustomerHelper = require('../helpers/customerHelper.js');
const customerHelper = new CustomerHelper();


const log = require('electron-log');

/**
 * Verify a username and password and log the user in if correct
 * @param {Object} data the object containing data. typically will be _data or _data
 */
exports.login_function = async function (data) {
    var bcrypt = require('bcryptjs');
    var username = data.username;
    var password = data.password;
    try {
        var login = await helper.login(username, password);
        if (!login) {
            //wrong combination
            return { status: 0, user_data: login }

        }
        else {
            //create a session
            const now = new Date();
            var hash = bcrypt.hashSync(username + now, 10);
            expires = now.getDate() + 3;
            var session_obj = { user_id: login.id, token: `'${hash}'`, expires: `'${expires}'` }
            await helper.insert(session_obj, helper.sessions_table);
            login.token = hash;
            login.role = login.role_id;
            login.permissions = await helper.getRolePermissions(login.role_id, 'strings');

            let settingsHelper = require('../helpers/settingsHelper');
            let sh = new settingsHelper();
            login.company_name = await sh.getSetting(`'company_name'`);
            login.company_phone = await sh.getSetting(`'phone'`);
            login.company_address = await sh.getSetting(`'address'`);
            login.digital_address = await sh.getSetting(`'digital_address'`);
            login.number_of_shifts = await sh.getSetting(`'number_of_shifts'`);
            login.tax = await sh.getSetting(`'tax'`);
            login.company = {
                id: 0, name: login.company_name, address: login.company_address,
                phone: login.company_phone, digital_address: login.digital_address
            }
            login.company_id = 0;
            login.parent_company = { id: 0, name: 'default' };


            login.type = "staff";
            await activitiesHelper.log(login.id, "'logged in'")

            return { status: 1, user_data: login }
        }

    } catch (error) {
        await helper.closeConnection();
        throw new Error(error)

    }
}

/**
 * get the branches of the facility
 * @returns {Object}
 */
exports.get_branches_function = async function () {
    try {
        let query = await helper.getAll(helper.branches_table_name);
        return { status: 1, data: query }

    } catch (error) {
        await helper.closeConnection();
        throw new Error(error)
    }
}

/**
 * get the logo of the facility
 * @returns {Object}
 */
exports.get_logo_function = async function () {
    try {
        const fs = require('fs');
        let settingsHelper = require('../helpers/settingsHelper');
        let sh = new settingsHelper();
        let logo = await sh.getSetting(`'logo'`);//null or string (filenam.jpg for instance)
        let extension = "jpg";
        let image = "";
        if (logo != null) {
            //get the extension. it will be the last item in the array if split by a dot (.)
            let split = logo.split(".");
            extension = split.pop();
            image = `data:image/${extension};base64,` + fs.readFileSync(path.join(constants.settings_location, logo), 'base64');

        }

        return { status: 1, data: image }

    } catch (error) {
        await helper.closeConnection();
        throw new Error(error)
    }
}

/**
 * inserta a new branch
 * @param {Object} _data object containing data
 * @returns {Object}
 */
exports.save_branch_function = async function (_data) {
    try {
        let data = {
            name: `'${_data.name}'`,
            phone: `'${_data.phone}'`
        }
        let id = await helper.insert(data, helper.branches_table_name)
        return { status: id }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error)
        //console.log(error);

    }
}

/**
 * get all insurers
 * @returns {Object}
 */
exports.get_insurers_function = async function () {
    try {
        let query = await helper.getAll(helper.insurers_table_name);
        return { status: '1', data: query }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error)
        //console.log(error);

    }
}




exports.add_insurer_function = async (_data) => {
    try {
        let data = { name: `'${_data.name}'` }
        await helper.insert(data, helper.insurers_table_name);
        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        //console.log(error);
        log.error(error)
        throw new Error(error)
    }
};

exports.delete_insurer_function = async (_data) => {
    try {
        await helper.delete(` name = '${_data.name}'`, helper.insurers_table_name);
        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        //console.log(error);
        log.error(error)
        throw new Error(error)
    }
};

exports.get_all_activities_function = async (_data) => {
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    let start = _data.start_date == undefined ? null : _data.start_date;
    let end = _data.end_date == undefined ? null : _data.end_date;

    try {
        let objects;
        if (start == null) {
            objects = await activitiesHelper.getAll(activitiesHelper.table_name, limit, offset);
        }
        else {
            objects = await activitiesHelper.getMany(`  created_on >= '${start} 00:00:00' and created_on <= '${end} 23:59:59'`, activitiesHelper.table_name, limit, offset);

        }

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.user = await helper.getItem(` id = ${obj.user_id} `, helper.table_name)

        }
        //console.log(objects)
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error)
    }

};


exports.get_activities_function = async (_data) => {
    let reg = _data.r;
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    try {
        let objects = await activitiesHelper.getMany(` activity like '%${reg}%'`, activitiesHelper.table_name, limit, offset);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.user = await helper.getItem(` id = ${obj.user_id} `, helper.table_name)

        }

        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error)
    }

};

exports.get_user_activities_function = async (_data) => {
    let reg = _data.id;
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    let user = await helper.getItem(` id  = ${reg} `, helper.table_name);
    let start = _data.start_date == undefined ? null : _data.start_date;
    let end = _data.end_date == undefined ? null : _data.end_date;

    try {
        let where = start == null ? `user_id = ${reg}` : ` user_id = ${reg} and created_on >= '${start} 00:00:00' and created_on <= '${end} 23:59:59'`;
        let objects = await activitiesHelper.getMany(where, activitiesHelper.table_name, limit, offset);
        let total = await activitiesHelper.countBy(where, activitiesHelper.table_name)
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.user = await helper.getItem(` id = ${obj.user_id} `, helper.table_name)

        }

        return { status: '1', data: objects, total: total, limit: limit, user: user }
    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        throw new Error(error)
    }

};

exports.get_users_function = async () => {
    try {


        let objects = await helper.getAll(helper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.role = await helper.getItem(` role_id = ${obj.role_id} `, helper.roles_table)

        }
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        throw new Error(error)
    }
};




exports.save_user_function = async (_data) => {
    try {
        let h = helper;
        let id = _data.id;

        if (id !== undefined) {
            let data = h.prep_data(_data);
            //update. else insert
            var password = _data.password;
            //console.log(password)
            if (password !== undefined && password !== null && password != "undefined") {
                var bcrypt = require('bcryptjs');
                var hash = bcrypt.hashSync(password, 10);
                data.password_hash = `'${hash}'`;
            }
            else {
                delete data.password;
            }
            //console.log(data)
            let where = ` id = ${id} `;
            await h.update(data, where, h.table_name);
        }
        else {
            var bcrypt = require('bcryptjs');
            var password = _data.password;
            var hash = bcrypt.hashSync(password, 10);
            var data = h.prep_data(_data);
            data.password_hash = `'${hash}'`
            await h.insert(data, h.table_name);

        }


        return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        throw new Error(error)
    }





};



exports.delete_user_function = async (_data) => {

    let id = _data.id;
    let user = await helper.getUserName(id)
    //console.log(id)
    try {

        await helper.delete(`id = ${id}`, helper.table_name);
        await activitiesHelper.log(_data.userid, `'deleted user ${user}'`)
        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};

exports.get_user_function = async (_data) => {
    try {
        let user = _data.id;

        let object = await helper.getItem(`id = ${user}`, helper.table_name);
        object.role = await helper.getItem(`role_id = ${object.role_id}`, helper.roles_table)
        return { status: '1', data: object }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};

exports.get_roles_function = async () => {
    try {
        let objects = await helper.getRoles();
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};

exports.get_roles_limit_function = async () => {
    try {
        let objects = await helper.getRoles();
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};



exports.get_role_permissions_function = async (_data) => {
    try {
        let h = helper;
        let id = _data.id;
        var rp = await h.getRolePermissions(id);

        return { status: '1', data: rp }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};

exports.get_role_excluded_permissions_function = async (_data) => {
    try {
        let h = helper;
        let id = _data.id;
        var rp = await h.getRolePermissions(id);
        var allpermissions = await h.getPermissions();

        var permission_ids = [];
        for (var i = 0; i < rp.length; i++) {
            permission_ids.push(rp[i].permission_id);
        }
        //console.log(permission_ids)
        let objects = [];
        for (var j = 0; j < allpermissions.length; j++) {
            //console.log(allpermissions[j].permission_id)
            if (permission_ids.indexOf(allpermissions[j].permission_id) == -1) {
                objects.push(allpermissions[j])
            }
        }
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        throw new Error(error)
    }

};



exports.activate_user_function = async (_data) => {
    let h = helper
    let id = _data.id;
    let active = _data.active;

    //console.log(id)
    try {
        let user = await helper.getUserName(id)
        let data = { active: active }
        await h.update(data, `id = ${id}`, h.table_name);

        await activitiesHelper.log(_data.userid, `'updated user status ${user} to ${active}'`)
        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        //console.log(error)

    }

};



exports.add_role_function = async (_data) => {
    let h = helper;
    let id = _data.id;
    let permissions = _data.role_permissions
    //console.log(_data)
    try {
        let data = {};
        data.role_name = `'${_data.role_name}'`;
        data.description = `'${_data.description}'`;

        id = await h.insert(data, h.roles_table);

        return { status: `'${id}'` }
        // await h.insertMany(['role_id, permission_id', perms, h.role_permissions_table])
    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        throw new Error(error)
    }




};


exports.delete_role_function = async (_data) => {
    let h = helper;
    const ah = activitiesHelper;

    let id = _data.id;
    let name = _data.name;
    try {
        //delete the role permissions, users
        await h.delete(`role_id = ${id}`, h.role_permissions_table);
        await h.delete(`role_id = ${id}`, h.table_name);
        await h.delete(`role_id = ${id}`, h.roles_table);
        await ah.log(_data.userid, `'deleted a role ${name}'`);

        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)

    }





};

exports.get_role_function = async (_data) => {
    let h = helper
    let id = _data.id;

    try {
        let object = await helper.getItem(`role_id = ${id}`, helper.roles_table)
        return { status: '1', data: object }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};

exports.add_role_rermission_function = async (_data) => {
    let role_id = _data.role_id;
    let permission_id = _data.permission_id;
    let data = {
        role_id: role_id,
        permission_id: permission_id
    }
    try {
        await helper.insert(data, helper.role_permissions_table)
        await activitiesHelper.log(_data.userid, `' added a permission to role: ${role_id}'`)
        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};

exports.delete_role_permission_function = async (_data) => {
    let role_id = _data.role_id;
    let permission_id = _data.permission_id;

    try {
        await helper.delete(`role_id = ${role_id} and permission_id = ${permission_id} `, helper.role_permissions_table)
        await activitiesHelper.log(_data.userid, `' deleted a permission from role: ${role_id}'`)
        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        throw new Error(error)
    }

};

exports.change_staff_password_function = async (_data) => {

    var bcrypt = require('bcryptjs');
    var username = _data.username;
    var password = _data.password;
    var id = _data.id;
    var old = _data.old_password
    try {
        var login = await helper.login(username, old);
        if (!login) {
            //wrong combination
            return { status: "-1", message: "The old password is wrong. Try again" }

        }
        else {
            //update with the new one
            var hash = bcrypt.hashSync(password, 10);
            var data = {
                password_hash: `'${hash}'`
            }
            await helper.update(data, ` id = ${id} `, helper.table_name)

            await activitiesHelper.log(login.id, "'updated own password'")

            return { status: "1" }
        }

    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        throw new Error(error)
    }



};

exports.get_setting_function = async (_data) => {
    try {
        let setting = _data.setting;
        let settingsHelper = require('../helpers/settingsHelper');
        let sh = new settingsHelper();
        let result = await sh.getSetting(`'${setting}'`);

        return { status: '1', data: result }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};

//////////////////ACCOUNT STUFF///////////////////////

exports.save_outgoing_payment_function = async (_data) => {
    try {
        let helperClass = require('../helpers/outgoingPaymentHelper')
        let h = new helperClass();

        let data = h.prep_data(_data);
        data.created_by = _data.userid;
        // //console.log(data)
        await h.insert(data, h.table_name);

        return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        log.error(error)
        throw new Error(error)
    }





};

exports.find_outgoing_payments_between_dates_function = async (_data) => {
    try {
        let helperClass = require('../helpers/outgoingPaymentHelper')
        let h = new helperClass();
        let vendorClass = require('../helpers/vendorHelper');
        let vendorHelper = new vendorClass();

        let start = _data.start_date == undefined ? h.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? h.getToday() : _data.end_date;
        let code = _data.code;
        let type = _data.type

        let objects = null;
        if (code != undefined) {
            objects = await h.search(code)
        }
        else if (type != undefined) {
            objects = await h.getMany(` date >= '${start}' and date <= '${end}' and type ='${type}'`, h.table_name);
        }
        else {
            objects = await h.getMany(` date >= '${start}' and date <= '${end}' `, h.table_name);

        }

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            //if a purchase credit, get the vendor
            if (obj.type == 'Credit Purchase Payment') {
                try {
                    let vendor = await vendorHelper.getItem(` id = ${obj.recipient}`, vendorHelper.table_name);
                    obj.recipient = vendor.name;
                } catch (error) {
                    log.error(error)
                    obj.recipient = 'Unknown Vendor';

                }

            }


        }


        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        // //console.log(error)
        log.error(error)
        throw new Error(error)
    }

};

exports.delete_payment_function = async (_data) => {
    let helperClass = require('../helpers/outgoingPaymentHelper')
    let h = new helperClass();
    try {
        let codes = _data.code.split(",");//comma-separated
        let code_quotes = []
        for (var i = 0; i < codes.length; i++) {
            code_quotes.push(`${codes[i]}`)
        }


        await h.delete(` id in (${code_quotes.join(",")}) `, h.table_name);
        await activitiesHelper.log(_data.userid, `"deleted  payment receipt: ${code_quotes.join(",")}  "`, `'Accounts'`)



        return {
            status: '1'
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};

exports.find_vendor_outgoing_payments_between_dates_function = async (_data) => {
    try {
        let helperClass = require('../helpers/outgoingPaymentHelper')
        let h = new helperClass();
        let vendorClass = require('../helpers/vendorHelper');
        let vendorHelper = new vendorClass();

        let start = _data.start_date == undefined ? h.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? h.getToday() : _data.end_date;
        let vendor = _data.vendor;

        let objects = null;
        objects = await h.getMany(` recipient = ${vendor} and date >= '${start}' and date <= '${end}' `, h.table_name);


        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            //if a purchase credit, get the vendor
            if (obj.type == 'Credit Purchase Payment') {
                try {
                    let vendor = await vendorHelper.getItem(` id = ${obj.recipient}`, vendorHelper.table_name);
                    obj.recipient = vendor.name;
                } catch (error) {
                    log.error(error)
                    obj.recipient = 'Unknown Vendor';

                }

            }


        }


        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        // //console.log(error)
        log.error(error)
        throw new Error(error)
    }

};




exports.get_payment_recipients_function = async (_data) => {
    try {
        let helperClass = require('../helpers/outgoingPaymentHelper')
        let h = new helperClass();
        let vendorClass = require('../helpers/vendorHelper');
        let vendorHelper = new vendorClass();

        let start = _data.start_date == undefined ? h.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? h.getToday() : _data.end_date;
        let vendor = _data.vendor;

        let objects = null;
        objects = await h.getMany(` recipient = ${vendor} and date >= '${start}' and date <= '${end}' `, h.table_name);


        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            //if a purchase credit, get the vendor
            if (obj.type == 'Credit Purchase Payment') {
                try {
                    let vendor = await vendorHelper.getItem(` id = ${obj.recipient}`, vendorHelper.table_name);
                    obj.recipient = vendor.name;
                } catch (error) {
                    log.error(error)
                    obj.recipient = 'Unknown Vendor';

                }

            }


        }


        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        // //console.log(error)
        log.error(error)
        throw new Error(error)
    }

};


exports.get_accounting_report_function = async (_data) => {
    try {
        let defs = helper.setDates('this_month')
        let start = _data.start_date == undefined ? defs.start_date : _data.start_date;
        let end = _data.end_date == undefined ? defs.end_date : _data.end_date;


        const SalesDetailsHelper = require('../helpers/salesDetailsHelper.js');
        const salesDetailsHelper = new SalesDetailsHelper();

        const purchaseDetailsHelper = require("../helpers/purchaseDetailsHelper")
        const pDetailsHelper = new purchaseDetailsHelper()

        const tDetailsClass = require('../helpers/transferDetailsHelper.js');
        const tdetailsHelper = new tDetailsClass();

        const rDetailsClass = require('../helpers/receivedTransferDetailsHelper.js');
        const rdetailsHelper = new rDetailsClass();

        let stockValueClass = require('../helpers/stockValueHelper')
        let stockValueHelper = new stockValueClass();

        let paymentClass = require('../helpers/outgoingPaymentHelper')
        let paymentHelper = new paymentClass();


        let outgoingHelperClass = require('../helpers/outgoingPaymentHelper')
        let h = new outgoingHelperClass();

        let sales = await salesDetailsHelper.getTotalSales(start, end);
        let purchases = await pDetailsHelper.getTotalPurchase(start, end)
        let transfers_out = await tdetailsHelper.getTotal(start, end)
        let transfers = await rdetailsHelper.getTotal(start, end)
        let starting_stock = await stockValueHelper.getStockCostValueByDate(start);
        let closing_stock = await stockValueHelper.getStockCostValueByDate(end);
        let expenses = await h.getAllTotalPaid('', start, end);
        let expenses_list = await h.getPaymentsGrouped(start, end);

        let difference = sales + purchases - (starting_stock - closing_stock) - expenses
        let profit = difference > 0
        let formula = `Total sales made + Total purchases made - ( Starting stock - Closing stock) - Total expenses`


        return {
            status: '1',
            total_purchase: purchases.toLocaleString(),
            total_sale: sales.toLocaleString(),
            starting_stock: starting_stock.toLocaleString(),
            closing_stock: closing_stock.toLocaleString(),
            expenses: expenses.toLocaleString(),
            profit: profit,
            difference: difference.toLocaleString(),
            expenses_list: expenses_list,
            formula

        }
    } catch (error) {
        await helper.closeConnection();
        // //console.log(error)
        log.error(error)
        throw new Error(error)
    }

};
//////////////////END ACCOUNT STUFF///////////////////

////////////////INCOMING PAYMENTS//////////////////////
exports.save_incoming_payment_function = async (_data) => {
    try {
        let helperClass = require('../helpers/incomingPaymentHelper')
        let h = new helperClass();

        let data = h.prep_data(_data);
        data.created_by = _data.userid;

        try {
            let customer_phone = _data.customer_phone;
            //get the customer who matches the name
            let cust_details = await customerHelper.getItem(` phone = "${customer_phone}" `, customerHelper.table_name);
            if (cust_details == null) {
                //save the person
                data.payer =
                    await customerHelper.insert({
                        name: `"${_data.customer_name}"`,
                        phone: `"${_data.customer_phone}"`
                    }, customerHelper.table_name)
            }
            // sales_data.customer = `"${_data.customer_name} - ${_data.customer_phone}"`;

        } catch (error) {
            log.error(error)
        }


        // //console.log(data)
        await h.insert(data, h.table_name);

        return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        log.error(error)
        throw new Error(error)
    }





};

exports.find_incoming_payments_between_dates_function = async (_data) => {
    try {
        let helperClass = require('../helpers/incomingPaymentHelper')
        let h = new helperClass();

        let start = _data.start_date == undefined ? h.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? h.getToday() : _data.end_date;
        let code = _data.code;
        let type = _data.type

        let objects = null;
        if (code != undefined) {
            objects = await h.search(code)
        }
        else if (type != undefined) {
            objects = await h.getMany(` date >= '${start}' and date <= '${end}' and type ='${type}'`, h.table_name);
        }
        else {
            objects = await h.getMany(` date >= '${start}' and date <= '${end}' `, h.table_name);

        }

        for (var i = 0; i < objects.length; i++) {
            try {
                let customer = await customerHelper.getItem(`id = '${objects[i].payer}'`, customerHelper.table_name);
                objects[i].customer_name = customer.name;
                objects[i].phone = customer.phone;
            } catch (error) {
                log.error(error)
                objects[i].customer_name = "N/A";
                objects[i].phone = "N/A";
            }

        }




        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        // //console.log(error)
        log.error(error)
        throw new Error(error)
    }

};

exports.delete_incoming_payment_function = async (_data) => {
    let helperClass = require('../helpers/incomingPaymentHelper')
    let h = new helperClass();
    try {
        let codes = _data.id.split(",");//comma-separated
        let code_quotes = []
        for (var i = 0; i < codes.length; i++) {
            code_quotes.push(`${codes[i]}`)
        }


        await h.delete(` id in (${code_quotes.join(",")}) `, h.table_name);
        await activitiesHelper.log(_data.userid, `"deleted credit payment receipt: ${code_quotes.join(",")}  "`, `'Accounts'`)



        return {
            status: '1'
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};


exports.get_customer_payments_function = async (_data) => {

    let helperClass = require('../helpers/incomingPaymentHelper')
    let h = new helperClass();
    try {
        let id = _data.customer;
        let objects = await h.getMany(` payer = ${id}  `, h.table_name);


        // objects.map(obj => {
        //     obj.stock = obj.current_stock
        // })
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error)
    }

};
///////////////////END INCOMING PAYMENTS///////////////


exports.reset_user_password = async (_data) => {
    let Helper = require('../helpers/token');
    let h = new Helper();
    try {


        //if retry, do not regenerate the token.
        if (_data.retry == "1") {
            message = _data.message;

            let data = { error: true, retry: true, message: message }
            //render the page
            res.render("resetPassword", data)
            return false;
        }
        //check the username  or email
        let user = _data.user;
        let AdminHelper = require("../helpers/adminHelper")
        let adminHelper = new AdminHelper();
        let user_details = await adminHelper.getItem(`lower(email) = lower('${user}') or lower(username) = lower('${user}')`, adminHelper.table_name);
        //if found, generate the token and send the mail
        if (user_details != null) {


            //create a token and send it to the url
            const crypto = require("crypto");

            const token = crypto.randomBytes(5).toString("hex");
            //insert it into the token table
            //clear others
            await h.delete(`name = 'reset_user_password_${user_details.email}'`, h.table_name)
            await h.insert({ name: `'reset_user_password_${user_details.email}'`, token: `'${token}'` }, h.table_name)

            const axios = require('axios');


            let email = user_details.email;

            message = `You have requested to reset your Druglane password. Please use this code as token in the reset page: ${token}.`;
            // console.log(message)
            const FormData = require('form-data');

            const form = new FormData();
            form.append('mails', email);
            form.append('message', message);
            form.append('subject', "Reset Druglane Password");

            axios.post(constants.server_url + `/api_admin/sendBulkMail`, form, { headers: form.getHeaders() })


                .then(function (response) {
                    // console.log(response.data);
                    let data = {
                        error: false, retry: false, message: `Email sent to your email. Please 
            check your inbox to retrieve the token`}
                    //render the page
                    return data;
                })
                .catch(function (error) {
                    let data = {
                        error: true, retry: false, message: `Unable to communicate with cloud server. Please 
            check your internet connection and try again`}
                    return data;
                });
        }
        else {
            let data = {
                error: true, retry: false, message: `No username or email found. Please check and try 
                again.`}
            return data;
        }

    } catch (error) {
        // console.log(error);
        let data = {
            error: true, retry: false, message: `Server error. Please try again`
        }
        return data;
    }

};


exports.do_reset_user_password = async (_data) => {
    try {
        let Helper = require('../helpers/token');
        let h = new Helper();
        const activityHelper = require('../helpers/activitiesHelper')
        const ah = new activityHelper();

        let token = _data.token;
        let password = _data.password;
        let email = _data.username;

        var bcrypt = require('bcryptjs');

        let AdminHelper = require("../helpers/adminHelper")
        let adminHelper = new AdminHelper();
        let user_details = await adminHelper.getItem(`lower(email) = lower('${email}') or lower(username) = lower('${email}')`, adminHelper.table_name);

        if (user_details == null) {
            return { status: "-1", message: "Username or email not found" }
        }
        //get the setting admin_password
        var old_token = await h.getField("token", h.table_name, `name = 'reset_user_password_${user_details.email}'`);
        // console.log(old_token.token, token)
        if (token == old_token.token) {
            var hash = bcrypt.hashSync(password, 10);

            //set the new password
            await adminHelper.updateField("password_hash", `'${hash}'`, `id = ${user_details.id}`, adminHelper.table_name)
            return { status: "1", message: "Password reset successfully" }

        } else {
            // Passwords don't match
            return { status: "-1", message: "Wrong token entered. Try again" }

        }

    } catch (error) {
        log.error(error)
        // console.log(error)
        throw new Error(error)

    }




};



