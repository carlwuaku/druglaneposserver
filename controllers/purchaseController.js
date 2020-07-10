const express = require('express');
const router = express.Router();


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




router.get('/getList', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    try {
        let objects = await helper.getAll(helper.table_name, limit, offset);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getTotal(obj.code)
            obj.num_of_items = await detailsHelper.getNumItems(obj.code)
            let vendor = vendorHelper.getItem(` id = ${obj.vendor}`)
            obj.vendor_name = vendor.name;
            obj.vendor_id = obj.vendor;
            obj.display_name = adminHelper.getUserName(obj.created_by);

        }

        res.json({ status: '1', data: objects })
    } catch (error) {
        res.json({ status: '-1', data: null })
    }

});



router.post('/saveBulk', async (req, res) => {
    try {

        let date = req.body.date == undefined ? helper.getToday() : req.body.date;
        let created_on = req.body.created_on == undefined ? helper.getToday('timestamp') : req.body.created_on;



        let payment_method = req.body.payment_method;






        let products = req.body.products.split("||");
        let prices = req.body.prices.split("||");
        let quantities = req.body.quantities.split("||");
        let selling_prices = req.body.selling_prices.split("||");
        let expiries = req.body.expiries.split("||");
        let units = req.body.units.split("||");
        let markups = req.body.markups.split("||");


        await helper.getConnection();
        //last id
        let last_id = await helper.getField('max(id) as max_id', helper.table_name);
        console.log(last_id)
        let code = last_id.max_id == null ? `'00001'`: `'${(last_id.max_id + 1).toString().padStart(5,'0')}'`;

        let objects = [];
        let product_updates = [];
        for (let i = 0; i < products.length; i++) {
            let data = detailsHelper.prep_data(req.body);
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.unit = `'${units[i]}'`;
            data.product = products[i];
            data.selling_price = selling_prices[i] ;
            data.quantity = quantities[i];
            data.price = prices[i];
            data.markup = markups[i];
            data.code = code;
            data.created_by = req.userid;
            objects.push(data);
            //generate the update for the product
            let product_data = {
                price:selling_prices[i], 
                cost_price: prices[i],
            unit: `'${units[i]}'`,
        expiry: `'${expiries[i]}'` }
        let p = productHelper.generateUpdateQuery(product_data, ` id = ${products[i]} `, productHelper.table_name)
                product_updates.push(p);
        }
        console.log(objects)

        let purchase_data = helper.prep_data(req.body);
        purchase_data.date = `'${date}'`;
        purchase_data.created_on = `'${created_on}'`;
        purchase_data.created_by = req.userid;
        purchase_data.code = code;
        console.log(purchase_data)

        let sql = "BEGIN TRANSACTION; ";
        sql += helper.generateInsertQuery(purchase_data, helper.table_name);
        sql += detailsHelper.generateInsertManyQuery(detailsHelper.fields, objects, detailsHelper.table_name);
        sql += product_updates.join(" ")
        sql += "COMMIT;"
        console.log(sql)
        await helper.connection.exec(sql);

        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        activities.log(req.query.userid, `"added new purchases: ${code} : ${payment_method}"`, `'Purchase'`)
        // helper.connection.close().then(succ => { }, err => { })



        res.json({ status: '1' })
    } catch (error) {

        console.log(error)
        res.json({ status: '-1' })
    }
});

router.get('/getDetails', async (req, res) => {
    try {
        let code = req.query.code


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

        let total = await detailsHelper.getTotal(code)
        res.json({
            status: '1',
            vendor_id: vendor.id,
            vendor_name: vendor.name,
            invoice: item.invoice,
            created_on : item.created_on,
            total: total.toFixed(2),
            data: objects
        })
    } catch (error) {
        res.json({ status: '-1', data: null })
    }

});


router.get('/getDetailsByVendor', async (req, res) => {
    try {
        let id = req.query.id


        let objects = await detailsHelper.getMany(`code in (select code from ${helper.table_name} where vendor = ${id})   `, detailsHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            let product = await productHelper.getItem(` id = ${obj.product} `, productHelper.table_name);
            // obj.product = product;
            obj.product_id = product.id;
            obj.product_name = product.name;

        }
         res.json({
            status: '1',
           
            data: objects
        })
    } catch (error) {
        res.json({ status: '-1', data: null })
    }

});


router.post('/delete', async (req, res) => {
    try {
        
         let id = req.body.id ;//comma-separated
         let code = req.body.code;

         let products = []
        let product_query = await detailsHelper.getDistinct('product', detailsHelper.table_name, ` code = '${code}'`);
        product_query.map(p => {
            products.push(p.product);
        })

         await helper.delete(` id in (${id})`, helper.table_name);
         await activities.log(req.userid,`"deleted purchase: ${code}"`,"'Vendors'")

         for (var x = 0; x < products.length; x++) {
    
            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
 
         res.json({ status: '1', data: null })
     } catch (error) {
        console.log(error)
         res.json({ status: '-1', data: null })
     }
 
 });

 router.post('/deleteItem', async (req, res) => {
    try {
        
         let id = req.body.id ;//comma-separated
         let codes = req.body.codes;
         let invoices = req.body.invoices;

         let products = []
        let product_query = await detailsHelper.getDistinct('product', detailsHelper.table_name, ` code in (${codes})`);
        product_query.map(p => {
            products.push(p.product);
        })

         await helper.delete(` id in (${id})`, helper.table_name);
         await activities.log(req.userid,`"deleted purchases with invoices: ${invoices}"`,"'Vendors'")



         for (var x = 0; x < products.length; x++) {
    
            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
 
         res.json({ status: '1', data: null })
     } catch (error) {
        console.log(error)
         res.json({ status: '-1', data: null })
     }
 
 });


 
router.get('/findById', async (req, res) => {
    try {
        let id = req.query.id;
        
        let object = await helper.getItem(`id = ${id} `, helper.table_name);
        
        
        
        res.json({
            status: '1',
            data: object
        })
    } catch (error) {
        res.json({ status: '-1', data: null })
    }

});

 
router.get('/findBetweenDates', async (req, res) => {
    try {
        
        let start = req.query.start_date == undefined ? helper.getToday : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday : req.query.end_date;


        let objects = await detailsHelper.getMany(` date >= '${start}' and date <= '${end}' `, detailsHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            
            let product = await productHelper.getItem(` id = ${obj.product} `, productHelper.table_name);
            obj.product = product;

        }
        
        
        res.json({
            status: '1',
            data: objects
        })
    } catch (error) {
        res.json({ status: '-1', data: null })
    }

});

router.get('/findReceiptsBetweenDates', async (req, res) => {
    try {
        
        let start = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;
        let code = req.query.code;

        let objects  = null;
        if(code != undefined){
            objects = await helper.search(code)
        }
        else{
          objects=  await helper.getMany(` date >= '${start}' and date <= '${end}' `, helper.table_name);
        
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
        
        
        res.json({
            status: '1',
            data: objects
        })
    } catch (error) {
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/findReceiptsByVendor', async (req, res) => {
    try {
        let vendor = req.query.vendor;
        

        let objects  = await helper.getMany(` vendor = ${vendor} `, helper.table_name);

       
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getTotal(obj.code);
            obj.num_of_items = await detailsHelper.getNumItems(obj.code);
            obj.display_name = await adminHelper.getUserName(obj.created_by)
            let vendor = await vendorHelper.getItem(` id = ${obj.vendor} `, vendorHelper.table_name);
            obj.vendor_name = vendor.name;
            obj.vendor_id = vendor.id;
        
        }
        
        
        res.json({
            status: '1',
            data: objects
        })
    } catch (error) {
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});



//export the whole thingy
module.exports = router;