const express = require('express');
const router = express.Router();

const Helper = require('../helpers/saleHelper.js');
const helper = new Helper();

const DetailsHelper = require('../helpers/salesDetailsHelper.js');
const detailsHelper = new DetailsHelper();

const CustomerHelper = require('../helpers/customerHelper.js');
const customerHelper = new CustomerHelper();

const ProductHelper = require('../helpers/productHelper.js');
const productHelper = new ProductHelper();

const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();

let adminClass = require('../helpers/adminHelper');
let adminHelper = new adminClass();

let stockValueClass = require('../helpers/stockValueHelper')
let stockValueHelper = new stockValueClass();
const log = require('electron-log');

let SalesBatchesClass = require('../helpers/salesBatchesHelper')
let salesBatchesHelper = new SalesBatchesClass();

let productBatchClass = require('../helpers/productBatchesHelper')
let productBatchHelper = new productBatchClass();



router.get('/getList', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    try {
        let objects = await helper.getAll(helper.table_name, limit, offset);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getSaleTotal(obj.code)
            obj.quantity = await detailsHelper.getNumItems(obj.code)
        }

        // objects.map(obj => {
        //     obj.stock = obj.current_stock
        // })
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getProductSales', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    try {
        let id = req.query.product;
        let objects = await detailsHelper.getMany(` product = ${id} `, detailsHelper.table_name, limit, offset);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getSaleTotal(obj.code)
            // obj.quantity = await detailsHelper.getNumItems(obj.code)
            let product = await productHelper.getItem(` id = ${obj.product} `, productHelper.table_name);
            obj.product = product;
        }

        // objects.map(obj => {
        //     obj.stock = obj.current_stock
        // })
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getCustomerSales', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    try {
        let id = req.query.customer;
        let objects = await detailsHelper.getMany(` code in (select code from sales where customer = ${id} ) `, detailsHelper.table_name, limit, offset);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getSaleTotal(obj.code)
            // obj.quantity = await detailsHelper.getNumItems(obj.code)
            let product = await productHelper.getItem(` id = ${obj.product} `, productHelper.table_name);
            let sale = await helper.getItem(` code = '${obj.code}' `, helper.table_name);
            obj.payment_method = sale.payment_method
            obj.product = product;
        }

        // objects.map(obj => {
        //     obj.stock = obj.current_stock
        // })
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/saveBulk', async (req, res) => {
    try {

        let date = req.body.date == undefined ? helper.getToday() : req.body.date;
        let created_on = req.body.created_on == undefined ? helper.getToday('timestamp') : req.body.created_on;



        let payment_method = req.body.payment_method;
        let code = req.body.code;
        let last_id = 1;
        //if code is not set, generate it
        await helper.getConnection();
        //last id
        if (code == undefined || code == null) {
            let last_id = await helper.getField('max(id) as max_id', helper.table_name);
            // console.log(last_id)
            code = last_id.max_id == null ? '00001' : `${(last_id.max_id + 1).toString().padStart(5, '0')}`;

        }





        let products = req.body.products.split("||");
        let cost_prices = req.body.cost_prices.split("||");
        let quantities = req.body.quantities.split("||");
        let prices = req.body.prices.split("||");

        //check if the code already exists
        let exists = await helper.getItem(` code = '${code}'`, helper.table_name)
        if (exists == undefined) {

            let objects = [];
            for (let i = 0; i < products.length; i++) {
                let data = detailsHelper.prep_data(req.body);
                data.created_on = `'${created_on}'`;
                data.date = `'${date}'`;
                data.product = products[i];
                data.cost_price = cost_prices[i] == undefined || cost_prices[i] == null
                    || cost_prices[i] == '' ? 0 : cost_prices[i];
                data.quantity = quantities[i];
                data.price = prices[i];
                data.code = `'${code}'`;
                objects.push(data);
            }
            // console.log(objects)

            let sales_data = helper.prep_data(req.body);
            sales_data.date = `'${date}'`;
            sales_data.created_on = `'${created_on}'`;
            sales_data.created_by = req.userid;
            sales_data.code = `'${code}'`;
            let batches = []
            if(req.body.batch_details != undefined && req.body.batch_details != null) {
                 batches = JSON.parse(req.body.batch_details);
                let batch_updates = [];
                for (let x = 0; x < batches.length; x++) {
                    const bat = batches[x];
                    bat.code = `'${code}'`;
                    bat.batch_number = `'${bat.batch_number}'`;
                    bat.expiry = `'${bat.expiry}'`;
                    bat.date = `'${date}'`;
                     bat.quantity_sold = await salesBatchesHelper.getTotalQuantityDateTime(bat.product)
                     batch_updates.push(productBatchHelper.generateUpdateFieldQuery(
                         "quantity_sold", bat.quantity_sold,`product = ${bat.product} and batch_number = ${bat.batch_number}`,
                         productBatchHelper.table_name
                         )
                     )
                    //  console.log(batch_updates)
                } 
            } 
            
            


            // try {
            //     let customer_phone = req.body.customer_phone;
    
            //     if (!customerHelper.isEmpty(customer_phone) &&
            //         customer_phone != "undefined" && customer_phone != "null" && !customerHelper.isEmpty(req.body.customer_name)) {
    
    
            //         //get the customer who matches the name
            //         let cust_details = await customerHelper.getItem(` phone = "${customer_phone}" `, customerHelper.table_name);
            //         if (cust_details == null) {
            //             //save the person
            //             sales_data.customer =
            //                 await customerHelper.insert({
            //                     name: `"${req.body.customer_name}"`,
            //                     phone: `"${req.body.customer_phone}"`
            //                 }, customerHelper.table_name)
            //         }
            //         else {
            //             sales_data.customer = cust_details.id
            //         }
            //     }
            //     // sales_data.customer = `"${req.body.customer_name} - ${req.body.customer_phone}"`;
    
            // } catch (error) {
            //     console.log(error)
            // }


            // console.log(sales_data)

            let sql = "BEGIN TRANSACTION; ";
            sql += helper.generateInsertQuery(sales_data, helper.table_name);
            sql += detailsHelper.generateInsertManyQuery(detailsHelper.fields, objects, detailsHelper.table_name);
            if(batches.length > 0){
                sql += salesBatchesHelper.generateInsertManyQuery(salesBatchesHelper.fields,batches, salesBatchesHelper.table_name);
                sql += batch_updates.join(" ")
            }

            sql += "COMMIT;"
            // console.log(sql)
            await helper.connection.exec(sql);

            for (var x = 0; x < products.length; x++) {

                let pid = products[x];
                await productHelper.refreshCurrentStock(pid)
            }
            activities.log(req.query.userid, `"added new sales: ${code} : ${payment_method}"`, `'Sales'`)
            await stockValueHelper.updateStockValue();
            // helper.connection.close().then(succ => { }, err => { })


            res.json({ status: '1', code: code })

        }
        else {
            res.json({ status: '-1' })
        }


    } catch (error) {
        await helper.closeConnection();

        log.error(error)
        console.log(error)
        res.json({ status: '-1' })
    }
});


router.post('/editSale', async (req, res) => {
    try {

        let date = req.body.date;
        let created_on = req.body.created_on == undefined ? helper.getToday('timestamp') : req.body.created_on;



        let payment_method = req.body.payment_method;
        let code = req.body.code;
        await helper.getConnection();





        let sales_data = helper.prep_data(req.body);
        sales_data.date = `'${date}'`;
        sales_data.created_on = `'${created_on}'`;
        sales_data.created_by = req.userid;
        sales_data.code = `'${code}'`;

        let old_data = await helper.getItem(`code = '${code}'`, helper.table_name)

        // try {
        //     let customer_phone = req.body.customer_phone;

        //     if (!customerHelper.isEmpty(customer_phone) &&
        //         customer_phone != "undefined" && customer_phone != "null" && !customerHelper.isEmpty(req.body.customer_name)) {


        //         //get the customer who matches the name
        //         let cust_details = await customerHelper.getItem(` phone = "${customer_phone}" `, customerHelper.table_name);
        //         if (cust_details == null) {
        //             //save the person
        //             sales_data.customer =
        //                 await customerHelper.insert({
        //                     name: `"${req.body.customer_name}"`,
        //                     phone: `"${req.body.customer_phone}"`
        //                 }, customerHelper.table_name)
        //         }
        //         else {
        //             sales_data.customer = cust_details.id
        //         }
        //     }
        //     // sales_data.customer = `"${req.body.customer_name} - ${req.body.customer_phone}"`;

        // } catch (error) {
        //     console.log(error)
        // }

        // let changes = [];
        // for (const property in sales_data) {
        //     if(sales_data[property] != req.body[property]){
        //         changes.push(`${property}: ${old_data[property]} => ${sales_data[property]}`)
        //     }
        //   }

        // console.log(sales_data)
        await helper.update(sales_data, `code = '${code}'`, helper.table_name);
        

        
        activities.log(req.query.userid, `"edited sale : ${code}. "`, `'Sales'`)
        // console.log(`"edited sale : ${code}. changes: ${changes.toString()} "`)
        // await stockValueHelper.updateStockValue();
        // helper.connection.close().then(succ => { }, err => { })


        res.json({ status: '1', code: code })




    } catch (error) {
        await helper.closeConnection();

        log.error(error)
        console.log(error)
        res.json({ status: '-1' })
    }
});


router.get('/getSaleDetails', async (req, res) => {
    try {
        let code = req.query.code
        let details = await helper.getItem(` code = '${code}'`, helper.table_name);
        details.cashier = await adminHelper.getUserName(details.created_by)

        let objects = await detailsHelper.getMany(` code = '${code}'  `, detailsHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            let product = await productHelper.getItem(` id = ${obj.product} `, productHelper.table_name);
            obj.product = product;

        }


        res.json({
            status: '1',
            details: details,
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/deleteByCode', async (req, res) => {
    try {
        let codes = req.body.code.split(",");//comma-separated
        let code_quotes = []
        for (var i = 0; i < codes.length; i++) {
            code_quotes.push(`'${codes[i]}'`)
        }
        let products = []
        let product_query = await detailsHelper.getDistinct('product', detailsHelper.table_name, ` code in (${code_quotes.join(",")}) `);
        product_query.map(p => {
            products.push(p.product);
        })

        await helper.delete(` code in (${code_quotes.join(",")}) `, helper.table_name);
        await activities.log(req.query.userid, `"deleted  sales receipt: ${code_quotes.join(",")}  "`, `'Products'`)


        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        await stockValueHelper.updateStockValue();
        res.json({
            status: '1'
        })
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
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
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/findReceiptsBetweenDates', async (req, res) => {
    try {

        let start = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;
        let code = req.query.code;
        let product = req.query.product;//if user searches with product name
        let payment_method = req.query.payment_method;
        let objects = null;
        if (code != undefined) {
            objects = await helper.search(code)
        }
        else if (payment_method != undefined) {
            objects = await helper.getMany(` date >= '${start}' and date <= '${end}' and payment_method = '${payment_method}' `, helper.table_name);

        }
        else {
            objects = await helper.getMany(` date >= '${start}' and date <= '${end}' `, helper.table_name);

        }
        let overall_total = 0;
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            let total = await detailsHelper.getSaleTotal(obj.code);
            overall_total += total;
            obj.total_amount = total.toLocaleString()
            // obj.num_of_items = await detailsHelper.getNumItems(obj.code);
            obj.display_name = await adminHelper.getUserName(obj.created_by)
            //check customer. if not an id, just use the raw value
            try {
                let cust = await customerHelper.getItem(`id = ${obj.customer}`, customerHelper.table_name);
                if (cust != null && cust != undefined) {
                    obj.customer = cust.name + " - " + cust.phone
                }
            } catch (error) {

            }

        }


        res.json({
            status: '1',
            data: objects,
            total: overall_total.toLocaleString()
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/findReceiptsByProduct', async (req, res) => {
    try {

        let start = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;
        let code = req.query.code;
        let product = req.query.product;//if user searches with product name
        let payment_method = req.query.payment_method;
        let search_results = await productHelper.search(product);
        // console.log(search_results)
        let product_ids = [];
        for (var i = 0; i < search_results.length; i++) {
            var obj = search_results[i];
            product_ids.push(obj.id)

        }
        let product_id_string = product_ids.join(",")
        let objects = await helper.getMany(` date >= '${start}' and date <= '${end}' and code in (select code from ${detailsHelper.table_name} 
            where product in (${product_id_string})) `, helper.table_name);


        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.total_amount = await detailsHelper.getSaleTotal(obj.code);
            obj.num_of_items = await detailsHelper.getNumItems(obj.code);
            obj.display_name = await adminHelper.getUserName(obj.created_by)
        }


        res.json({
            status: '1',
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/findUserSummaryBetweenDates', async (req, res) => {
    try {

        let start = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;

        let objects = await detailsHelper.getUserSales(start, end);
        let total_sales = 0;
        let num_sales = 0;

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            total_sales += obj.total_amount;
            num_sales += obj.num_of_items;

            let cash = await detailsHelper.getUserSalesByPaymentMethod(obj.created_by, 'Cash', start, end)
            let momo = await detailsHelper.getUserSalesByPaymentMethod(obj.created_by, 'Mobile Money', start, end)
            let cheque = await detailsHelper.getUserSalesByPaymentMethod(obj.created_by, 'Cheque', start, end)
            let pos = await detailsHelper.getUserSalesByPaymentMethod(obj.created_by, 'POS', start, end)
            let credit = await detailsHelper.getUserSalesByPaymentMethod(obj.created_by, 'Credit', start, end)
            let insurance = await detailsHelper.getUserSalesByPaymentMethod(obj.created_by, 'Insurance', start, end)
            let other = await detailsHelper.getUserSalesByPaymentMethod(obj.created_by, 'Other', start, end)
            let discount = await helper.getUserDiscount(obj.created_by, start, end);

            obj.total_amount = obj.total_amount.toLocaleString()
            obj.cash = cash.toLocaleString()
            obj.momo = momo.toLocaleString()
            obj.cheque = cheque.toLocaleString()
            obj.pos = pos.toLocaleString()
            obj.credit = credit.toLocaleString()
            obj.insurance = insurance.toLocaleString()
            obj.other = other.toLocaleString()
            obj.discount = discount.toLocaleString()
            let discounted_total = obj.total_amount - discount;
            obj.discounted_total = discounted_total.toLocaleString()
            obj.display_name = await adminHelper.getUserName(obj.created_by)
        }


        res.json({
            status: '1',
            num_sales: num_sales,
            total: total_sales.toLocaleString(),
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

//get the shift summary
router.get('/findShiftSummaryBetweenDates', async (req, res) => {
    try {

        let start = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;
        //get the shifts.
        // let shifts = helper.getDistinct('shift', helper.table_name, ` date >= '${start}' and date <= '${end}'  `)
        //
        //for each shift, get totals
        let objects = await detailsHelper.getShiftTotalSales(start, end);
        let total_sales = 0;
        let num_sales = 0;

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            total_sales += obj.total_amount;
            num_sales += obj.num_of_items;
            //get the total for the shift
            let cash = await detailsHelper.getShiftSalesByPaymentMethod(obj.shift, 'Cash', start, end)
            let momo = await detailsHelper.getShiftSalesByPaymentMethod(obj.shift, 'Mobile Money', start, end)
            let cheque = await detailsHelper.getShiftSalesByPaymentMethod(obj.shift, 'Cheque', start, end)
            let pos = await detailsHelper.getShiftSalesByPaymentMethod(obj.shift, 'POS', start, end)
            let credit = await detailsHelper.getShiftSalesByPaymentMethod(obj.shift, 'Credit', start, end)
            let insurance = await detailsHelper.getShiftSalesByPaymentMethod(obj.shift, 'Insurance', start, end)
            let other = await detailsHelper.getShiftSalesByPaymentMethod(obj.shift, 'Other', start, end)
            let discount = await helper.getShiftDiscount(obj.shift, start, end);

            obj.total_amount = obj.total_amount.toLocaleString()
            obj.cash = cash.toLocaleString()
            obj.momo = momo.toLocaleString()
            obj.cheque = cheque.toLocaleString()
            obj.pos = pos.toLocaleString()
            obj.credit = credit.toLocaleString()
            obj.insurance = insurance.toLocaleString()
            obj.other = other.toLocaleString()
            obj.discount = discount.toLocaleString()
            let discounted_total = obj.total_amount - discount;
            obj.discounted_total = discounted_total.toLocaleString()
        }


        res.json({
            status: '1',
            num_sales: num_sales,
            total: total_sales.toLocaleString(),
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/findPaymentMethodSummaryBetweenDates', async (req, res) => {
    try {

        let start = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;

        let objects = await detailsHelper.getUserSales(start, end);
        let total_sales = 0;
        let num_sales = 0;

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            total_sales += obj.total_amount;
            num_sales += obj.num_of_items;


            obj.display_name = await adminHelper.getUserName(obj.created_by)
        }

        let cash = await detailsHelper.getSalesByPaymentMethod('Cash', start, end)
        let momo = await detailsHelper.getSalesByPaymentMethod('Mobile Money', start, end)
        let cheque = await detailsHelper.getSalesByPaymentMethod('Cheque', start, end)
        let pos = await detailsHelper.getSalesByPaymentMethod('POS', start, end)
        let credit = await detailsHelper.getSalesByPaymentMethod('Credit', start, end)
        let insurance = await detailsHelper.getSalesByPaymentMethod('Insurance', start, end)
        let other = await detailsHelper.getSalesByPaymentMethod('Other', start, end)



        res.json({
            status: '1',
            num_sales: num_sales,
            total: total_sales.toLocaleString(),
            momo: momo.toLocaleString(),
            cash: cash.toLocaleString(),
            pos: pos.toLocaleString(),
            cheque: cheque.toLocaleString(),
            credit: credit.toLocaleString(),
            insurance: insurance.toLocaleString(),
            other: other.toLocaleString(),
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getDailySales', async (req, res) => {
    try {

        let start = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;

        let objects = await detailsHelper.getDailySales(start, end);
        // let total_sales = 0;
        // let num_sales = 0;

        // for (var i = 0; i < objects.length; i++) {
        //     var obj = objects[i];
        //     total_sales += obj.total_amount;
        //     num_sales += obj.num_of_items;


        //     obj.display_name = await adminHelper.getUserName(obj.created_by)
        // }
        let total = await detailsHelper.getTotalSales(start, end);
        let avg = await detailsHelper.getAverageSales(start, end);
        let cash = await detailsHelper.getSalesByPaymentMethod('Cash', start, end)
        let momo = await detailsHelper.getSalesByPaymentMethod('Mobile Money', start, end)
        let cheque = await detailsHelper.getSalesByPaymentMethod('Cheque', start, end)
        let pos = await detailsHelper.getSalesByPaymentMethod('POS', start, end)
        let credit = await detailsHelper.getSalesByPaymentMethod('Credit', start, end)
        let insurance = await detailsHelper.getSalesByPaymentMethod('Insurance', start, end)
        let other = await detailsHelper.getSalesByPaymentMethod('Other', start, end)
        let discount = await helper.getTotalDiscount(start, end);
        let discounted_total = total - discount


        res.json({
            status: '1',
            total_sales: total.toLocaleString(),
            average_sale: avg.toLocaleString(),
            momo: momo.toLocaleString(),
            cash: cash.toLocaleString(),
            pos: pos.toLocaleString(),
            cheque: cheque.toLocaleString(),
            credit: credit.toLocaleString(),
            insurance: insurance.toLocaleString(),
            other: other.toLocaleString(),
            discount: discount.toLocaleString(),
            discounted_total: discounted_total.toLocaleString(),
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getBranchDailySalesSummary', async (req, res) => {
    try {

        let start_date = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end_date = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;

        //get the range
        let range = helper.getDatesBetween(start_date, end_date);
        // console.log(range)
        let objects = []
        for (var i = 0; i < range.length; i++) {
            let start = range[i];
            let end = range[i];
            // let objects  =  await detailsHelper.getDailySales(start, end);
            let obj = {};

            let total = await detailsHelper.getTotalSales(start, end);
            let total_cost = await detailsHelper.getTotalSalesCost(start, end);
            let avg = await detailsHelper.getAverageSales(start, end);
            let cash = await detailsHelper.getSalesByPaymentMethod('Cash', start, end)
            let momo = await detailsHelper.getSalesByPaymentMethod('Mobile Money', start, end)
            let cheque = await detailsHelper.getSalesByPaymentMethod('Cheque', start, end)
            let pos = await detailsHelper.getSalesByPaymentMethod('POS', start, end)
            let credit = await detailsHelper.getSalesByPaymentMethod('Credit', start, end)
            let insurance = await detailsHelper.getSalesByPaymentMethod('Insurance', start, end)
            let other = await detailsHelper.getSalesByPaymentMethod('Other', start, end)
            let profit = total - total_cost


            obj.date = start;
            obj.total_sales = total == null ? 0.00 : total.toLocaleString()
            obj.average_sale = avg == null ? 0.00 : avg.toLocaleString()
            obj.momo = momo == null ? 0.00 : momo.toLocaleString()
            obj.cash = cash == null ? 0.00 : cash.toLocaleString()
            obj.pos = pos == null ? 0.00 : pos.toLocaleString()
            obj.cheque = cheque == null ? 0.00 : cheque.toLocaleString()
            obj.credit = credit == null ? 0.00 : credit.toLocaleString()
            obj.insurance = insurance == null ? 0.00 : insurance.toLocaleString()
            obj.other = other == null ? 0.00 : other.toLocaleString();
            obj.profit = profit.toLocaleString()
            obj.cost = total_cost.toLocaleString()
            objects.push(obj)
        }
        // let best_sellers = await detailsHelper.getBestSellers(start_date, end_date);
        // let worst_sellers = await detailsHelper.getWorstSellers(start_date, end_date);
        let total = await detailsHelper.getTotalSales(start_date, end_date);
        let avg = await detailsHelper.getAverageSales(start_date, end_date)
        let total_cost = await detailsHelper.getTotalSalesCost(start_date, end_date);
        let total_credit = await detailsHelper.getSalesByPaymentMethod('Credit', start_date, end_date)
        let incomingPaymentHelper = require('../helpers/incomingPaymentHelper')
        let incomingHelper = new incomingPaymentHelper();

        let total_credit_paid = await incomingHelper.getTotalPaid('', start_date, end_date)
        let credit_balance = total_credit - total_credit_paid;
        let cost = total_cost.toLocaleString()
        let overall_profit = total - total_cost
        res.json({
            status: '1',
            data: objects,
            // best_sellers: best_sellers,
            // worst_sellers: worst_sellers,
            total: total.toLocaleString(),
            average: avg,
            profit: overall_profit.toLocaleString(),
            cost: cost,
            total_credit: total_credit.toLocaleString(),
            total_credit_paid: total_credit_paid.toLocaleString(),
            credit_balance: credit_balance.toLocaleString(),
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getBranchDailyRecords', async (req, res) => {
    try {
        let helperClass = require('../helpers/dailyRecordsHelper')
        let daily_record_helper = new helperClass();

        let start_date = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end_date = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;

        //get the range
        let range = await daily_record_helper.getDatesBetween(start_date, end_date);
        // console.log(range)
        let objects = []
        for (var i = 0; i < range.length; i++) {
            let start = range[i];
            let end = range[i];
            // let objects  =  await detailsHelper.getDailySales(start, end);
            let obj = await daily_record_helper.getTotalSummary(start);
            //computer sales
            let total = await detailsHelper.getTotalSales(start, end);
            let keys = ["momo","cash","cheque","insurance","other","credit","pos"]
            keys.forEach(k => {
                obj[k] = obj[k] == null ? 0 : obj[k];
            });
            let entered_total = obj.momo + obj.cash + obj.credit + 
            obj.insurance + obj.credit + obj.other + obj.pos;
            


            obj.date = start;
            obj.computer_sales = total.toLocaleString()
            obj.difference = entered_total - total;
            obj.total_sales = entered_total;
            objects.push(obj)
        }
       
        res.json({
            status: '1',
            data: objects,
            
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getCategorySales', async (req, res) => {
    try {

        let start_date = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end_date = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;


        let data = await detailsHelper.getCategorySales(start_date, end_date);
        res.json({
            status: '1',
            data: data
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getBestSellers', async (req, res) => {
    try {

        let start_date = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end_date = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;
        let limit = req.query.limit == undefined ? 10 : req.query.limit;
        let data = await detailsHelper.getBestSellers(start_date, end_date, limit);

        res.json({
            status: '1',
            data: data
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getArrears', async (req, res) => {
    let start_date = req.query.start_date == undefined ? '' : req.query.start_date;
    let end_date = req.query.end_date == undefined ? '' : req.query.end_date;
    let incomingClass = require('../helpers/incomingPaymentHelper')
    let incomingHelper = new incomingClass();
    try {
        let objects = await helper.getCreditSales(start_date, end_date);
        // let overall_credit = 0;
        // let overall_paid = 0;
        // let overall_balance = 0;
        for (var i = 0; i < objects.length; i++) {
            let curr = objects[i]
            try {
                let customer = await customerHelper.getItem(`id = ${curr.customer}`, customerHelper.table_name)
                let total_paid = await incomingHelper.getTotalPaid(curr.customer)
                curr.name = customer.name
                curr.phone = customer.phone
                // overall_paid += total_paid
                // overall_credit += curr.total;

                curr.paid = total_paid.toLocaleString()
                curr.balance = (curr.total - total_paid).toLocaleString()
                // overall_balance += curr.total - total_paid
                curr.total = curr.total.toLocaleString()
            } catch (error) {
                curr.name = curr.customer
                curr.phone = 'n/a'
                curr.paid = 'n/a'
                curr.balance = 'n/a'
                // overall_credit += curr.total;

                curr.total = curr.total.toLocaleString()
                // console.log(error)
            }

        }

        let overall_credit = await helper.getTotalCreditSales(start_date, end_date);

        let overall_paid = await incomingHelper.getTotalPaid('', start_date, end_date);
        let overall_balance = overall_credit - overall_paid;


        res.json({
            status: '1', data: objects,
            overall_balance: overall_balance.toLocaleString(),
            overall_credit: overall_credit.toLocaleString(),
            overall_paid: overall_paid.toLocaleString()
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getArrearsCount', async (req, res) => {

    let incomingClass = require('../helpers/incomingPaymentHelper')
    let incomingHelper = new incomingClass();
    try {
        let overall_credit = await helper.getTotalCreditSales();

        let overall_paid = await incomingHelper.getTotalPaid();
        let overall_balance = overall_credit - overall_paid;


        res.json({
            status: '1', overall_credit: overall_credit.toLocaleString(),
            overall_paid: overall_paid.toLocaleString(), overall_balance: overall_balance.toLocaleString()
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


////////////////DAILY RECORDS//////////////////////
router.post('/saveDailyRecord', async (req, res) => {
    try {
        let helperClass = require('../helpers/dailyRecordsHelper')
        let h = new helperClass();

        let data = h.prep_data(req.body);
        data.created_by = req.userid;

        let date = req.body.date;
        let shift = req.body.shift;
        let query = ` date = '${date}'   and shift = '${shift}'`;
        
        //if already submitted, update it
        let exists = await h.getItem(query, h.table_name);
        if(exists == null){
            //insert
            await h.insert(data, h.table_name);
        }
        else{
            await h.update(data, `id = ${exists.id}`, h.table_name)
        }


        // //console.log(data)
        

        res.json({ status: '1', data: null })
    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }





});

router.get('/findDailyRecordsBetweenDates', async (req, res) => {
    try {
        let helperClass = require('../helpers/dailyRecordsHelper')
        let h = new helperClass();

        let start = req.query.start_date == undefined ? h.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? h.getToday() : req.query.end_date;


        let objects = null;
        objects = await h.getMany(` date >= '${start}' and date <= '${end}' `, h.table_name);
        res.json({
            status: '1',
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        // //console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

/**
 * get the daily sale record for a specified day and shift
 */
router.get('/findDailyRecordsByDates', async (req, res) => {
    try {
        let helperClass = require('../helpers/dailyRecordsHelper')
        let h = new helperClass();

        let date = req.query.date;
        let shift = req.query.shift == undefined ? '' : req.query.shift;
        let query = ` date = '${date}'   and shift = '${shift}'`;
        

        let objects = null;
        objects = await h.getItem(query, h.table_name);
        res.json({
            status: '1',
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        // //console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/deleteDailyRecord', async (req, res) => {
    let helperClass = require('../helpers/dailyRecordsHelper')
    let h = new helperClass();
    try {
        let codes = req.body.id.split(",");//comma-separated
        let code_quotes = []
        for (var i = 0; i < codes.length; i++) {
            code_quotes.push(`${codes[i]}`)
        }


        await h.delete(` id in (${code_quotes.join(",")}) `, h.table_name);
        await activitiesHelper.log(req.query.userid, `"deleted daily sales records: ${code_quotes.join(",")}  "`, `'Accounts'`)



        res.json({
            status: '1'
        })
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


//export the whole thingy
module.exports = router;