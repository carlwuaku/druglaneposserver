const express = require('express');
const router = express.Router();

const Helper = require('../helpers/saleHelper.js');
const helper = new Helper();

const DetailsHelper = require('../helpers/salesDetailsHelper.js');
const detailsHelper = new DetailsHelper();

const ProductHelper = require('../helpers/productHelper.js');
const productHelper = new ProductHelper();

const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();

let adminClass = require('../helpers/adminHelper');
let adminHelper = new adminClass();

const log = require('electron-log');


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
        if(code == undefined || code == null){
            let last_id = await helper.getField('max(id) as max_id', helper.table_name);
            console.log(last_id)
    
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
            console.log(objects)

            let sales_data = helper.prep_data(req.body);
            sales_data.date = `'${date}'`;
            sales_data.created_on = `'${created_on}'`;
            sales_data.created_by = req.userid;
            sales_data.code = `'${code}'`;
            console.log(sales_data)

            let sql = "BEGIN TRANSACTION; ";
            sql += helper.generateInsertQuery(sales_data, helper.table_name);
            sql += detailsHelper.generateInsertManyQuery(detailsHelper.fields, objects, detailsHelper.table_name);
            sql += "COMMIT;"
            console.log(sql)
            await helper.connection.exec(sql);

            for (var x = 0; x < products.length; x++) {

                let pid = products[x];
                await productHelper.refreshCurrentStock(pid)
            }
            activities.log(req.query.userid, `"added new sales: ${code} : ${payment_method}"`, `'Sales'`)
            // helper.connection.close().then(succ => { }, err => { })


            res.json({ status: '1', code: code})
        
        }
        else{
            res.json({ status: '-1' })
        }

        
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
        for(var i = 0; i < codes.length; i++){
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

            obj.total_amount = obj.total_amount.toFixed(2)
            obj.cash = cash.toFixed(2)
            obj.momo = momo.toFixed(2)
            obj.cheque = cheque.toFixed(2)
            obj.pos = pos.toFixed(2)
            obj.credit = credit.toFixed(2)
            obj.insurance = insurance.toFixed(2)
            obj.other = other.toFixed(2)
            obj.discount = discount.toFixed(2)
            let discounted_total = obj.total_amount - discount;
            obj.discounted_total = discounted_total.toFixed(2)
            obj.display_name = await adminHelper.getUserName(obj.created_by)
        }


        res.json({
            status: '1',
            num_sales: num_sales,
            total: total_sales.toFixed(2),
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

            obj.total_amount = obj.total_amount.toFixed(2)
            obj.cash = cash.toFixed(2)
            obj.momo = momo.toFixed(2)
            obj.cheque = cheque.toFixed(2)
            obj.pos = pos.toFixed(2)
            obj.credit = credit.toFixed(2)
            obj.insurance = insurance.toFixed(2)
            obj.other = other.toFixed(2)
            obj.discount = discount.toFixed(2)
            let discounted_total = obj.total_amount - discount;
            obj.discounted_total = discounted_total.toFixed(2)
        }


        res.json({
            status: '1',
            num_sales: num_sales,
            total: total_sales.toFixed(2),
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
            total: total_sales.toFixed(2),
            momo: momo.toFixed(2),
            cash: cash.toFixed(2),
            pos: pos.toFixed(2),
            cheque: cheque.toFixed(2),
            credit: credit.toFixed(2),
            insurance: insurance.toFixed(2),
            other: other.toFixed(2),
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
            total_sales: total.toFixed(2),
            average_sale: avg.toFixed(2),
            momo: momo.toFixed(2),
            cash: cash.toFixed(2),
            pos: pos.toFixed(2),
            cheque: cheque.toFixed(2),
            credit: credit.toFixed(2),
            insurance: insurance.toFixed(2),
            other: other.toFixed(2),
            discount: discount.toFixed(2),
            discounted_total: discounted_total.toFixed(2),
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
            let avg = await detailsHelper.getAverageSales(start, end);
            let cash = await detailsHelper.getSalesByPaymentMethod('Cash', start, end)
            let momo = await detailsHelper.getSalesByPaymentMethod('Mobile Money', start, end)
            let cheque = await detailsHelper.getSalesByPaymentMethod('Cheque', start, end)
            let pos = await detailsHelper.getSalesByPaymentMethod('POS', start, end)
            let credit = await detailsHelper.getSalesByPaymentMethod('Credit', start, end)
            let insurance = await detailsHelper.getSalesByPaymentMethod('Insurance', start, end)
            let other = await detailsHelper.getSalesByPaymentMethod('Other', start, end)


            obj.date = start;
            obj.total_sales = total == null ? 0.00 : total.toFixed(2)
            obj.average_sale = avg == null ? 0.00 : avg.toFixed(2)
            obj.momo = momo == null ? 0.00 : momo.toFixed(2)
            obj.cash = cash == null ? 0.00 : cash.toFixed(2)
            obj.pos = pos == null ? 0.00 : pos.toFixed(2)
            obj.cheque = cheque == null ? 0.00 : cheque.toFixed(2)
            obj.credit = credit == null ? 0.00 : credit.toFixed(2)
            obj.insurance = insurance == null ? 0.00 : insurance.toFixed(2)
            obj.other = other == null ? 0.00 : other.toFixed(2);
            objects.push(obj)
        }
        let best_sellers = await detailsHelper.getBestSellers(start_date, end_date);
        let worst_sellers = await detailsHelper.getWorstSellers(start_date, end_date);
        let total = await detailsHelper.getTotalSales(start_date, end_date);
        let avg = await detailsHelper.getAverageSales(start_date, end_date)

        res.json({
            status: '1',
            data: objects,
            best_sellers : best_sellers,
            worst_sellers: worst_sellers,
            total : total,
            average : avg
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

//export the whole thingy
module.exports = router;