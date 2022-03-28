
const log = require('electron-log');
const constants = require('../constants')

const Helper = require('../helpers/purchaseHelper.js');
const helper = new Helper();

const DetailsHelper = require('../helpers/purchaseDetailsHelper.js');
const detailsHelper = new DetailsHelper();

const ProductHelper = require('../helpers/productHelper.js');
const productHelper = new ProductHelper();

const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();

let adminClass = require('../helpers/adminHelper');
let adminHelper = new adminClass();

let vendorClass = require('../helpers/vendorHelper');
let vendorHelper = new vendorClass();

let stockValueClass = require('../helpers/stockValueHelper')
let stockValueHelper = new stockValueClass();

let productBatchClass = require('../helpers/productBatchesHelper')
let productBatchHelper = new productBatchClass();


exports._getList= async(_data) => {
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    try {
        let objects = await helper.getAll(helper.table_name, limit, offset);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getTotal(obj.code)
            obj.num_of_items = await detailsHelper.getNumItems(obj.code)
            let vendor = await vendorHelper.getItem(` id = ${obj.vendor}`)
            obj.vendor_name = vendor.name;
            obj.vendor_id = obj.vendor;
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



        let payment_method = _data.payment_method;






        let products = _data.products.split("||");
        let prices = _data.prices.split("||");
        let quantities = _data.quantities.split("||");
        let selling_prices = _data.selling_prices.split("||");
        let expiries = _data.expiries.split("||");
        let units = _data.units.split("||");
        let markups = _data.markups.split("||");
        let descriptions = _data.descriptions.split("||")

        await helper.getConnection();
        //last id
        let last_id = await helper.getField('max(id) as max_id', helper.table_name);
        // console.log(last_id)
        let code = last_id.max_id == null ? `'00001'` : `'${(last_id.max_id + 1).toString().padStart(5, '0')}'`;

        let objects = [];
        let product_updates = [];
        for (let i = 0; i < products.length; i++) {
            let data = detailsHelper.prep_data(_data);
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.unit = `'${units[i]}'`;
            data.product = products[i];
            data.selling_price = selling_prices[i];
            data.quantity = quantities[i];
            data.price = prices[i];
            data.markup = markups[i];
            data.code = code;
            data.created_by = _data.userid;
            data.expiry = `'${expiries[i]}'`;
            objects.push(data);
            //generate the update for the product
            let product_data = {
                price: selling_prices[i],
                cost_price: prices[i],
                unit: `'${units[i]}'`,
                expiry: `'${expiries[i]}'`,
                markup: markups[i],
                description: `'${descriptions[i]}'`,
            }
            let p = productHelper.generateUpdateQuery(product_data, ` id = ${products[i]} `, productHelper.table_name)
            product_updates.push(p);
        }
        // console.log(objects)

        let purchase_data = helper.prep_data(_data);
        purchase_data.date = `'${date}'`;
        purchase_data.created_on = `'${created_on}'`;
        purchase_data.created_by = _data.userid;
        purchase_data.code = code;
        // console.log(purchase_data)

        let batches = JSON.parse(_data.batch_details);
            batches.map(bat => {
                bat.purchase_code = code;
                bat.barcode = `'${bat.barcode}'`;
                bat.batch_number = `'${bat.batch_number}'`;
                bat.expiry = `'${bat.expiry}'`;
                bat.quantity_sold = 0;

            })




        let sql = "BEGIN TRANSACTION; ";
        sql += helper.generateInsertQuery(purchase_data, helper.table_name);
        sql += detailsHelper.generateInsertManyQuery(detailsHelper.fields, objects, detailsHelper.table_name);
        sql += product_updates.join(" ");
        if(batches.length > 0){
            sql += productBatchHelper.generateInsertManyQuery(productBatchHelper.fields, batches, productBatchHelper.table_name);

        }

        sql += "COMMIT;"
        // console.log(sql)
        await helper.connection.exec(sql);
        // console.log(sql)

        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        await stockValueHelper.updateStockValue();

        //enter the different batches
       


        activities.log(_data.userid, `"added new purchases: ${code} : ${payment_method}"`, `'Purchase'`)
        // helper.connection.close().then(succ => { }, err => { })


 
        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        // console.log(error)
        throw new Error(error);
    }
};


exports._edit= async(_data) => {
    try {

        //delete the receipt first
        let id = _data.id;
        let code = _data.code;

        let delete_products = []
        let product_query = await detailsHelper.getDistinct('product', detailsHelper.table_name, ` code = '${code}'`);
        product_query.map(p => {
            delete_products.push(p.product);
        })

        await helper.delete(` id in (${id})`, helper.table_name);
        await activities.log(_data.userid, `"deleted purchase: ${code}"`, "'Vendors'")

        for (var x = 0; x < delete_products.length; x++) {

            let pid = delete_products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        //then insert

        let date = _data.date;
        let created_on = _data.created_on;
        let payment_method = _data.payment_method;
        let products = _data.products.split("||");
        let prices = _data.prices.split("||");
        let quantities = _data.quantities.split("||");
        let selling_prices = _data.selling_prices.split("||");
        let expiries = _data.expiries.split("||");
        let units = _data.units.split("||");
        let markups = _data.markups.split("||");


        await helper.getConnection();


        let objects = [];
        let product_updates = [];
        for (let i = 0; i < products.length; i++) {
            let data = detailsHelper.prep_data(_data);
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.unit = `'${units[i]}'`;
            data.product = products[i];
            data.selling_price = selling_prices[i];
            data.quantity = quantities[i];
            data.price = prices[i];
            data.markup = markups[i];
            data.code = `'${code}'`;
            data.created_by = _data.userid;
            objects.push(data);
            //generate the update for the product
            let product_data = {
                price: selling_prices[i],
                cost_price: prices[i],
                unit: `'${units[i]}'`,
                expiry: `'${expiries[i]}'`
            }
            let p = productHelper.generateUpdateQuery(product_data, ` id = ${products[i]} `, productHelper.table_name)
            product_updates.push(p);
        }
        // console.log(objects)

        let purchase_data = helper.prep_data(_data);
        purchase_data.date = `'${date}'`;
        purchase_data.created_on = `'${created_on}'`;
        purchase_data.created_by = _data.userid;
        purchase_data.code = `'${code}'`;
        // console.log(purchase_data)

        let sql = "BEGIN TRANSACTION; ";
        sql += helper.generateInsertQuery(purchase_data, helper.table_name);
        sql += detailsHelper.generateInsertManyQuery(detailsHelper.fields, objects, detailsHelper.table_name);
        sql += product_updates.join(" ")
        sql += "COMMIT;"
        // console.log(sql)
        await helper.connection.exec(sql);

        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        await stockValueHelper.updateStockValue();
        activities.log(_data.userid, `"edited  purchases: ${code} : ${payment_method}"`, `'Purchase'`)
        // helper.connection.close().then(succ => { }, err => { })



        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        // console.log(error)
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

        }
        let item = await helper.getItem(` code = '${code}'`, helper.table_name)
        let vendor = await vendorHelper.getItem(` id = ${item.vendor}`, vendorHelper.table_name)
        let cashier = await adminHelper.getUserName(item.created_by)

        let total = await detailsHelper.getTotal(code)
        return {
            status: '1',
            vendor_id: vendor.id,
            cashier: cashier,
            vendor_name: vendor.name,
            invoice: item.invoice,
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


exports._delete= async(_data) => {
    try {

        let id = _data.id;//comma-separated
        let code = _data.code;

        let products = []
        let product_query = await detailsHelper.getDistinct('product', detailsHelper.table_name, ` code = '${code}'`);
        product_query.map(p => {
            products.push(p.product);
        })

        await helper.delete(` id in (${id})`, helper.table_name);
        await activities.log(_data.userid, `"deleted purchase: ${code}"`, "'Vendors'")

        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        await stockValueHelper.updateStockValue();

        return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
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
        await activities.log(_data.userid, `"deleted purchases with invoices: ${invoices}"`, "'Vendors'")



        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        await stockValueHelper.updateStockValue();
        return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error)
        throw new Error(error);
    }

};



exports._findById= async(_data) => {
    try {
        let id = _data.id;
        let details = []
        let object = await helper.getItem(`id = ${id} `, helper.table_name);
        if (object != null && object != undefined) {
            object.vendor = await vendorHelper.getItem(` id = ${object.vendor} `, vendorHelper.table_name)
            details = await detailsHelper.getMany(` code = '${object.code}' `, detailsHelper.table_name)
            for (var i = 0; i < details.length; i++) {
                let product = await productHelper.getItem(` id = ${details[i].product} `, productHelper.table_name)
                details[i].product_name = product.name
                details[i].expiry = product.expiry
                details[i].stock = 'n/a'
                details[i].product_id = product.id
                details[i].name = product.name
                details[i].product = product

            }
        }



        return {
            status: '1',
            data: object,
            details: details
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};


exports._findBetweenDates= async(_data) => {
    try {

        let start = _data.start_date == undefined ? helper.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? helper.getToday() : _data.end_date;
        let vendor = _data.vendor == undefined ? null : _data.vendor;

        let where = [` date >= '${start}' and date <= '${end}' `];
        if (vendor != null) {
            where.push(` vendor = ${vendor} `)
        }

        let objects = await detailsHelper.getMany(where, detailsHelper.table_name);
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
        let vendor = _data.vendor == undefined ? null : _data.vendor;

        let objects = null;
        if (code != undefined) {
            objects = await helper.search(code)
        }
        else {
            if (vendor == null) {
                objects = await helper.getMany(` date >= '${start}' and date <= '${end}' `, helper.table_name);

            }
            else {
                objects = await helper.getMany(` date >= '${start}' and date <= '${end}' and vendor = '${vendor}'`, helper.table_name);

            }

        }

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getTotal(obj.code);
            obj.num_of_items = await detailsHelper.getNumItems(obj.code);
            obj.display_name = await adminHelper.getUserName(obj.created_by)
            let vendor = await vendorHelper.getItem(` id = ${obj.vendor} `, vendorHelper.table_name);
            obj.vendor_name = vendor.name;
            obj.vendor_id = vendor.id;

        }


        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._findReceiptsByVendor= async(_data) => {
    try {
        let vendor = _data.vendor;


        let objects = await helper.getMany(` vendor = ${vendor} `, helper.table_name);


        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getTotal(obj.code);
            obj.num_of_items = await detailsHelper.getNumItems(obj.code);
            obj.display_name = await adminHelper.getUserName(obj.created_by)
            let vendor = await vendorHelper.getItem(` id = ${obj.vendor} `, vendorHelper.table_name);
            obj.vendor_name = vendor.name;
            obj.vendor_id = vendor.id;

        }


        return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._getPurchaseTotals= async(_data) => {


    let paymentClass = require('../helpers/outgoingPaymentHelper')
    let paymentHelper = new paymentClass();
    try {
        //get the total purchased, total credit, total paid, total arrears
        let vendor = _data.vendor == undefined ? '' : _data.vendor;
        let start = _data.start_date == undefined ? helper.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? helper.getToday() : _data.end_date;
        //get the total amount in purchases
        let total_purchase = await detailsHelper.getTotalPurchasedByDates(start, end, '', vendor)
        let total_credit = await detailsHelper.getTotalPurchasedByDates(start, end, 'Credit', vendor)
        let total_paid = await paymentHelper.getTotalPaidToVendor(vendor, start, end)
        let balance = total_purchase - total_paid;



        return {
            status: '1',
            total_purchase: total_purchase.toLocaleString(),
            total_credit: total_credit.toLocaleString(),
            total_paid: total_paid.toLocaleString(),
            balance: balance.toLocaleString()

        }
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._getProductPurchases= async(_data) => {


    try {
        //get the total purchased, total credit, total paid, total arrears
        let product = _data.product;
        let objects = await detailsHelper.getMany(`product = ${product}`,detailsHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            
            let purchase = await helper.getItem(`code = '${obj.code}'`, helper.table_name);
            let vendor = await vendorHelper.getItem(` id = ${purchase.vendor}`, vendorHelper.table_name)
            obj.total = (obj.quantity * obj.price).toLocaleString();
            obj.vendor_name = vendor.name;
            obj.vendor_id = obj.vendor;
            obj.display_name = await adminHelper.getUserName(obj.created_by);

        }



        return {
            status: '1',
            data:objects ,
            

        }
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error)
        throw new Error(error);
    }

};


