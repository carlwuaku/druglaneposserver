

const Helper = require('../helpers/transfersHelper.js');
const helper = new Helper();

const DetailsHelper = require('../helpers/transferDetailsHelper.js');
const detailsHelper = new DetailsHelper();

const ReceivedHelper = require('../helpers/receivedTransfersHelper.js');
const receivedHelper = new ReceivedHelper();

const ReceivedDetailsHelper = require('../helpers/receivedTransferDetailsHelper.js');
const receivedDetailsHelper = new ReceivedDetailsHelper();

const ProductHelper = require('../helpers/productHelper.js');
const productHelper = new ProductHelper();

const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();

let adminClass = require('../helpers/adminHelper');
let adminHelper = new adminClass();

let vendorClass = require('../helpers/vendorHelper');
let vendorHelper = new vendorClass();
const log = require('electron-log');

let stockValueClass = require('../helpers/stockValueHelper')
let stockValueHelper = new stockValueClass();


exports._getList= async(_data) => {
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    try {
        let objects = await helper.getAll(helper.table_name, limit, offset);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getReceiptTotal(obj.code)
            obj.num_of_items = await detailsHelper.getNumItems(obj.code)

            obj.display_name = adminHelper.getUserName(obj.created_by);

        }

        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};



exports._saveBulk= async(_data) => {
    try {

        let date = _data.date == undefined ? helper.getToday() : _data.date;
        let created_on = _data.created_on == undefined ? helper.getToday('timestamp') : _data.created_on;

        let receiver = adminHelper.getItem(`id = ${_data.receiver}`, adminHelper.branches_table_name);

        let products = _data.products.split("||");
        let cost_prices = _data.cost_prices.split("||");
        let quantities = _data.quantities.split("||");
        let prices = _data.prices.split("||");
        let expiries = _data.expiries.split("||");


        await helper.getConnection();
        //last id
        let last_id = await helper.getField('max(id) as max_id', helper.table_name);
        // //console.l.log(last_id)
        let code = last_id.max_id == null ? `'00001'` : `'${(last_id.max_id + 1).toString().padStart(5, '0')}'`;

        let objects = [];
        for (let i = 0; i < products.length; i++) {
            let data = detailsHelper.prep_data(_data);
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.product = products[i];
            data.cost_price = cost_prices[i];
            data.quantity = quantities[i];
            data.price = prices[i];
            data.code = code;
            data.expiry = `'${expiries[i]}'`;
            data.created_by = _data.userid;
            objects.push(data);

        }
        // //console.l.log(objects)

        let purchase_data = helper.prep_data(_data);
        purchase_data.date = `'${date}'`;
        purchase_data.created_on = `'${created_on}'`;
        purchase_data.created_by = _data.userid;
        purchase_data.code = code;
        // //console.l.log(purchase_data)

        let sql = "BEGIN TRANSACTION; ";
        sql += helper.generateInsertQuery(purchase_data, helper.table_name);
        sql += detailsHelper.generateInsertManyQuery(detailsHelper.fields, objects, detailsHelper.table_name);
        sql += "COMMIT;"
        // //console.l.log(sql)
        await helper.connection.exec(sql);

        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        await stockValueHelper.updateStockValue();
        await activities.log(_data.userid, `"added new transfer: ${code} : to ${receiver.name}"`, `'Purchase'`)
        // helper.connection.close().then(succ => { }, err => { })



        return { status: '1', code: code }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        //console.l.log(error)
        throw new Error(error);
    }
};

exports._getDetails= async(_data) => {
    try {
        let code = _data.code

        let objects = await detailsHelper.getMany(` code = '${code}'  `, detailsHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            let product = await productHelper.getItem(` id = ${obj.product} `, productHelper.table_name);
            // obj.product = product;
            obj.product_id = product.id;
            obj.product_name = product.name;
            obj.product = product;

        }
        let item = await helper.getItem(` code = '${code}'`, helper.table_name)
        let receiver = await adminHelper.getItem(` id = ${item.receiver}`, adminHelper.branches_table_name)
        let display_name = await adminHelper.getUserName(item.created_by)
        let total = await detailsHelper.getReceiptTotal(code)
        return {
            status: '1',
            receiver_id: receiver.id,
            receiver_name: receiver.name,
            receiver_phone: receiver.phone,
            receiver_address: receiver.address,
            receiver_digital_address: receiver.digital_address,
            invoice: item.invoice,
            cashier: display_name,
            created_on: item.created_on,
            total: total.toLocaleString(),
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._getReceivedDetails= async(_data) => {
    try {
        let code = _data.code


        let objects = await receivedDetailsHelper.getMany(` code = '${code}'  `, receivedDetailsHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            let product = await productHelper.getItem(` id = ${obj.product} `, productHelper.table_name);
            // obj.product = product;
            obj.product_id = product.id;
            obj.product_name = product.name;
            obj.product = product;
        }

        let item = await receivedHelper.getItem(` code = '${code}'`, receivedHelper.table_name)
        let sender = await adminHelper.getItem(` id = ${item.sender}`, adminHelper.branches_table_name)
        let display_name = await adminHelper.getUserName(item.created_by)
        let total = await receivedDetailsHelper.getTotal(code)

        return {
            status: '1',
            sender_id: sender.id,
            sender_name: sender.name,
            sender_phone: sender.phone,
            invoice: item.invoice,
            cashier: display_name,
            created_on: item.created_on,
            total: total.toLocaleString(),
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};


exports._getDetailsByVendor= async(_data) => {
    try {
        let id = _data.id


        let objects = await detailsHelper.getMany(`code in (select code from ${helper.table_name} where vendor = ${id})   `, detailsHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            let product = await productHelper.getItem(` id = ${obj.product} `, productHelper.table_name);
            // obj.product = product;
            obj.product_id = product.id;
            obj.product_name = product.name;

        }
        return {
            status: '1',

            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};



exports._deleteItem= async(_data) => {
    try {

        let id = _data.id;//comma-separated
        let codes = _data.codes;
        let invoices = _data.invoices;

        let products = []
        let product_query = await detailsHelper.getDistinct('product', detailsHelper.table_name, ` code in (${codes})`);
        product_query.map(p => {
            products.push(p.product);
        })

        await helper.delete(` id in (${id})`, helper.table_name);
        await activities.log(_data.userid, `"deleted transfers with invoices: ${invoices}"`, "'Vendors'")



        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        await stockValueHelper.updateStockValue();
        return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};



exports._deleteReceivedItem= async(_data) => {
    try {

        let id = _data.id;//comma-separated
        let codes = _data.codes;
        let invoices = _data.invoices;

        let products = []
        let product_query = await receivedDetailsHelper.getDistinct('product', receivedDetailsHelper.table_name, ` code in (${codes})`);
        product_query.map(p => {
            products.push(p.product);
        })

        await receivedHelper.delete(` id in (${id})`, receivedHelper.table_name);
        await activities.log(_data.userid, `"deleted received transfers with invoices: ${invoices}"`, "'Transfers'")



        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        await stockValueHelper.updateStockValue();
        return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};

exports._findById= async(_data) => {
    try {
        let id = _data.id;

        let object = await helper.getItem(`id = ${id} `, helper.table_name);



        return {
            status: '1',
            data: object
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};


exports._findBetweenDates= async(_data) => {
    try {

        let start = _data.start_date == undefined ? helper.getToday : _data.start_date;
        let end = _data.end_date == undefined ? helper.getToday : _data.end_date;


        let objects = await detailsHelper.getMany(` date >= '${start}' and date <= '${end}' `, detailsHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            let product = await productHelper.getItem(` id = ${obj.product} `, productHelper.table_name);
            obj.product = product;

        }


        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};

exports._findReceiptsBetweenDates= async(_data) => {
    try {

        let start = _data.start_date == undefined ? helper.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? helper.getToday() : _data.end_date;
        let code = _data.code;

        let objects = null;
        if (code != undefined) {
            objects = await receivedHelper.search(code)
        }
        else {
            objects = await receivedHelper.getMany(` date >= '${start}' and date <= '${end}' `, receivedHelper.table_name);

        }

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            // //console.l.log(obj)
            obj.total_amount = await receivedDetailsHelper.getTotal(obj.code);
            obj.num_of_items = await receivedDetailsHelper.getNumItems(obj.code);
            obj.display_name = await adminHelper.getUserName(obj.created_by)
            let sender = await adminHelper.getItem(` id = ${obj.sender}`, adminHelper.branches_table_name)
            obj.sender_name = sender == undefined ? 'n/a' : sender.name;
            obj.sender_id = sender == undefined ? 0 : sender.id;

        }


        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._findSentReceiptsBetweenDates= async(_data) => {
    try {

        let start = _data.start_date == undefined ? helper.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? helper.getToday() : _data.end_date;
        let code = _data.code;

        let objects = null;
        if (code != undefined) {
            objects = await helper.search(code)
        }
        else {
            objects = await helper.getMany(` date >= '${start}' and date <= '${end}' `, helper.table_name);

        }

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getReceiptTotal(obj.code);
            // console.log(obj.code, obj.total_amount)

            obj.num_of_items = await detailsHelper.getNumItems(obj.code);
            obj.display_name = await adminHelper.getUserName(obj.created_by)
            let recipient = await adminHelper.getItem(` id = ${obj.receiver}`, adminHelper.branches_table_name)
            obj.recipient_name = recipient == undefined ? 'n/a' : recipient.name;
            obj.recipient_id = recipient == undefined ? 0 : recipient.id;

        }


        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._findReceiptsByBranch= async(_data) => {
    try {
        let branch = _data.branch;


        let objects = await helper.getMany(` sender = ${branch} `, helper.table_name);


        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getReceiptTotal(obj.code);
            obj.num_of_items = await detailsHelper.getNumItems(obj.code);
            obj.display_name = await adminHelper.getUserName(obj.created_by)
            let sender = await adminHelper.getItem(` id = ${obj.sender} `, adminHelper.table_name);
            obj.sender_name = sender == undefined ? 'n/a' : sender.name;
            obj.sender_id = sender == undefined ? 0 : sender.id;

        }


        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._findReceiptsByReceivingBranch= async(_data) => {
    try {
        let branch = _data.branch;


        let objects = await helper.getMany(` receiver = ${branch} `, helper.table_name);


        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getReceiptTotal(obj.code);
            obj.num_of_items = await detailsHelper.getNumItems(obj.code);
            obj.display_name = await adminHelper.getUserName(obj.created_by)
            let receiver = await adminHelper.getItem(` id = ${obj.receiver} `, adminHelper.table_name);
            obj.recipient_name = receiver == undefined ? 'n/a' : receiver.name;
            obj.recipient_id = receiver == undefined ? 'n/a' : receiver.id;

        }


        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._saveBulkReceive= async(_data) => {
    try {

        let date = _data.date == undefined ? helper.getToday() : _data.date;
        let created_on = _data.created_on == undefined ? helper.getToday('timestamp') : _data.created_on;



        let sender = _data.sender;






        let products = _data.products.split("||");
        let prices = _data.prices.split("||");
        let quantities = _data.quantities.split("||");
        let cost_prices = _data.cost_prices.split("||");
        let expiries = _data.expiries.split("||");


        await receivedHelper.getConnection();
        //last id
        let last_id = await receivedHelper.getField('max(id) as max_id', receivedHelper.table_name);
        // //console.l.log(last_id)
        let code = last_id.max_id == null ? `'00001'` : `'${(last_id.max_id + 1).toString().padStart(5, '0')}'`;

        let objects = [];
        let product_updates = [];
        for (let i = 0; i < products.length; i++) {
            let data = receivedDetailsHelper.prep_data(_data);
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.product = products[i];
            data.price = prices[i];
            data.quantity = quantities[i];
            data.cost_price = cost_prices[i];
            data.expiry = `'${expiries[i]}'`
            data.code = code;
            data.created_by = _data.userid;
            objects.push(data);
            //generate the update for the product
            let product_data = {
                price: prices[i],
                cost_price: cost_prices[i],
                expiry: `'${expiries[i]}'`
            }
            let p = productHelper.generateUpdateQuery(product_data, ` id = ${products[i]} `, productHelper.table_name)
            product_updates.push(p);
        }
        // //console.l.log(objects)

        let purchase_data = receivedHelper.prep_data(_data);
        purchase_data.date = `'${date}'`;
        purchase_data.created_on = `'${created_on}'`;
        purchase_data.created_by = _data.userid;
        purchase_data.code = code;
        purchase_data.sender = sender;
        // //console.l.log(purchase_data)

        let sql = "BEGIN TRANSACTION; ";
        sql += helper.generateInsertQuery(purchase_data, receivedHelper.table_name);
        sql += receivedDetailsHelper.generateInsertManyQuery(receivedDetailsHelper.fields, objects, receivedDetailsHelper.table_name);
        sql += product_updates.join(" ")
        sql += "COMMIT;"
        // //console.l.log(sql)
        await receivedHelper.connection.exec(sql);

        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        await stockValueHelper.updateStockValue();
        await activities.log(_data.userid, `"received transfers: ${code} "`, `'Transfers'`)
        // helper.connection.close().then(succ => { }, err => { })



        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();

        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }
};
