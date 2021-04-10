const express = require('express');
const router = express.Router();

let adminClass = require('../helpers/adminHelper');
let adminHelper = new adminClass();

let customerClass = require('../helpers/customerHelper');
let helper = new customerClass();

const SaleClass = require('../helpers/saleHelper.js');
const saleHelper = new SaleClass();

const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();
const log = require('electron-log');

router.get('/getList', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    try {
        let objects = await helper.getAll(helper.table_name, limit, offset);
        const IncomingPaymentClass = require('../helpers/incomingPaymentHelper');
        const incomingHelper = new IncomingPaymentClass();
        for(var i = 0; i < objects.length; i++){
            let object = objects[i];
            let total_credit = await saleHelper.getTotalCreditSales('','', object.id);
            object.total_credit = total_credit.toLocaleString()
           
            let paid = await incomingHelper.getTotalPaid(object.id);
            object.total_paid = paid.toLocaleString();

            let  balance = total_credit - paid;
            object.balance = balance.toLocaleString()
        }
        
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/search', async (req, res) => {
    let param = req.query.param;
    try {
        let objects = await helper.search(param);
        const IncomingPaymentClass = require('../helpers/incomingPaymentHelper');
        const incomingHelper = new IncomingPaymentClass();
        for(var i = 0; i < objects.length; i++){
            let object = objects[i];
            let total_credit = await saleHelper.getTotalCreditSales('','', object.id);
            object.total_credit = total_credit.toLocaleString()
           
            let paid = await incomingHelper.getTotalPaid(object.id);
            object.total_paid = paid.toLocaleString();

            let  balance = total_credit - paid;
            object.balance = balance.toLocaleString()
        }

        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/save', async (req, res) => {
    try {
        let data = helper.prep_data(req.body);
        //    data.created_by = req.userid;
        let id = req.body.id == undefined ? null : req.body.id;
        if (id == null) {
            id = await helper.insert(data, helper.table_name);
            await activities.log(req.userid, `"added a new customer: ${req.body.name}"`, "'Customers'")

        }
        else {
            await helper.update(data, ` id = ${id}`, helper.table_name);
            await activities.log(req.userid, `"updated customer: ${req.body.name}"`, "'Customers'")
        }

        res.json({ status: id, data: null })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/delete', async (req, res) => {
    try {

        let id = req.body.id;
        let name = req.body.name;
        await helper.delete(` id = ${id}`, helper.table_name);
        await activities.log(req.userid, `'deleted customer: ${name}'`, "'Customers'")



        res.json({ status: '1', data: null })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});



router.get('/findById', async (req, res) => {
    try {
        let id = req.query.id;

        let object = await helper.getItem(`id = ${id} `, helper.table_name);
        //get the total sales on credit
        //get the total paid
        let total_credit = await saleHelper.getTotalCreditSales('', '', id);
        object.total_credit = total_credit.toLocaleString()
        const IncomingPaymentClass = require('../helpers/incomingPaymentHelper');
        const incomingHelper = new IncomingPaymentClass();
        let paid = await incomingHelper.getTotalPaid(id);
        object.total_paid = paid.toLocaleString();
        let balance = total_credit - paid;
        object.balance = balance.toLocaleString()
        res.json({
            status: '1',
            data: object
        })
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/saveDiagnostics', async (req, res) => {
    try {
        let data = {
            customer: req.body.customer,
            test: `"${req.body.test}"`,
            data: `"${req.body.data}"`,
            created_on: `"${req.body.created_on}"`,
            comments: `"${req.body.comments}"`
        };
        let customer_type = req.body.customer_type
        //if its a new customer, the customer field will be undefined
        if (customer_type == 'new') {
            let c_data = helper.prep_data(req.body);
            let customer_id = await helper.insert(c_data, helper.table_name);
            data.customer = customer_id;
        }

        //check if the test existed. if not, add it as a new one
        let test = req.body.test.toUpperCase();
        let test_exists = await helper.getItem(` upper(test_name) = '${test}' `, helper.diagnostics_master_table_name);
        if (test_exists == null || test_exists == undefined) {
            await helper.insert({ test_name: `'${test}'`, parameters: "'value'", comments: "'not available'" }, helper.diagnostics_master_table_name)
        }
        //    data.created_by = req.userid;
        let id = req.body.id == undefined ? null : req.body.id;
        if (id == null) {
            id = await helper.insert(data, helper.diagnostics_table_name);
            await activities.log(req.userid, `"added a new customer diagnostics test result: ${req.body.test}"`, "'Customers'")

        }
        else {
            await helper.update(data, ` id = ${id}`, helper.diagnostics_table_name);
            await activities.log(req.userid, `"updated customer diagnostics test result: ${req.body.test}"`, "'Customers'")
        }

        res.json({ status: id, data: null })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/findDiagnosticsById', async (req, res) => {
    try {
        let id = req.query.id;

        let object = await helper.getItem(`id = ${id} `, helper.diagnostics_table_name);



        res.json({
            status: '1',
            data: object
        })
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/deleteDiagnostics', async (req, res) => {
    try {

        let id = req.body.id;
        await helper.delete(` id in (${id})`, helper.diagnostics_table_name);
        await activities.log(req.userid, `'deleted customer diagnostic result'`, "'Customers'")



        res.json({ status: '1', data: null })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getCustomerDiagnosticsList', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    let customer = req.query.customer;
    try {
        let objects = await helper.getMany(` customer = ${customer} `, helper.diagnostics_table_name, limit, offset);


        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getDiagnosticsList', async (req, res) => {
    try {
        let objects = await helper.getAll(helper.diagnostics_master_table_name);


        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/findDiagnosticsBetweenDates', async (req, res) => {
    try {

        let start = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;
        let customer = req.query.customer;
        let objects = null;
        let where = [` created_on >= '${start} 00:00:01' and created_on <= '${end} 23:59:59' `]
        if (customer != undefined) {
            objects = where.push(` customer = ${customer} `)
        }
        // if (customer != undefined) {
        //     objects = where.push(` test = '${test}' `)
        // }

        objects = await helper.getMany(where.join(" and "), helper.diagnostics_table_name);
        for (var i = 0; i < objects.length; i++) {
            let customer = await helper.getItem(`id = ${objects[i].customer}`, helper.table_name);
            objects[i].customer_name = customer.name;
            objects[i].phone = customer.phone
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

router.post('/addRefill', async (req, res) => {
    let refillClass = require('../helpers/refillsHelper');
    let refill_helper = new refillClass();
    try {
        let data = refill_helper.prep_data(req.body);
        let customer_phone = req.body.customer_phone;
        //get the customer who matches the name
        let cust_details = await helper.getItem(` phone = "${customer_phone}" `, helper.table_name);
        if (cust_details == null) {
            //save the person
            data.customer_id = await helper.insert({
                name: `"${req.body.customer_name}"`,
                phone: `"${req.body.customer_phone}"`
            }, helper.table_name)
        }
        else {
            data.customer_id = cust_details.id;
        }

        await helper.insert(data, refill_helper.table_name);
        await activities.log(req.userid, `"added a new customer refill: ${req.body.customer_name}"`, "'Customers'")


        res.json({ status: '1', data: null })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});



router.post('/deleteRefill', async (req, res) => {
    try {
        let refillClass = require('../helpers/refillsHelper');
        let refill_helper = new refillClass();
        let id = req.body.id;
        await helper.delete(` id in (${id})`, refill_helper.table_name);
        await activities.log(req.userid, `'deleted customer refill'`, "'Customers'")



        res.json({ status: '1', data: null })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getCustomerRefillList', async (req, res) => {
    let refillClass = require('../helpers/refillsHelper');
    let refill_helper = new refillClass();
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    let customer = req.query.customer;
    try {
        let objects = await refill_helper.getMany(` customer_id = ${customer} `,
            refill_helper.table_name, limit, offset);
        for (var i = 0; i < objects.length; i++) {
            let customer = await helper.getItem(`id = ${objects[i].customer_id}`, helper.table_name);
            objects[i].customer_name = customer.name;
            objects[i].phone = customer.phone
        }


        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getRefillList', async (req, res) => {
    let refillClass = require('../helpers/refillsHelper');
    let today = helper.getToday()
    let refill_helper = new refillClass();
    try {
        let only_active = req.query.only_active == undefined ? null : req.query.only_active;
        let objects = await helper.getAll(refill_helper.table_name);

        if (only_active == "yes") {
            objects = await helper.getMany(` end_date >= '${today}' `, refill_helper.table_name);
        }
        for (var i = 0; i < objects.length; i++) {
            let customer = await helper.getItem(`id = ${objects[i].customer_id}`, helper.table_name);
            objects[i].customer_name = customer.name;
            objects[i].phone = customer.phone
        }


        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/findRefillBetweenDates', async (req, res) => {
    try {
        let refillClass = require('../helpers/refillsHelper');
        let refill_helper = new refillClass();
        let start = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;
        let customer = req.query.customer;
        let objects = null;
        let where = [` end_date >= '${start} ' and end_date <= '${end} ' `]
        if (customer != undefined) {
            where.push(` customer_id = ${customer} `)
        }
        // if (customer != undefined) {
        //     objects = where.push(` test = '${test}' `)
        // }

        objects = await refill_helper.getMany(where.join(" and "), refill_helper.table_name);
        for (var i = 0; i < objects.length; i++) {
            let customer = await helper.getItem(`id = ${objects[i].customer_id}`, helper.table_name);
            objects[i].customer_name = customer.name;
            objects[i].phone = customer.phone
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


router.get('/countRefillBetweenDates', async (req, res) => {
    try {
        let refillClass = require('../helpers/refillsHelper');
        let refill_helper = new refillClass();
        let start = req.query.start_date == undefined ? helper.getToday() : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday() : req.query.end_date;
        let customer = req.query.customer;
        let objects = null;
        let where = [` end_date >= '${start} ' and end_date <= '${end} ' `]
        if (customer != undefined) {
            where.push(` customer_id = ${customer} `)
        }
        // if (customer != undefined) {
        //     objects = where.push(` test = '${test}' `)
        // }

        objects = await refill_helper.getMany(where.join(" and "), refill_helper.table_name);
        // for (var i = 0; i < objects.length; i++) {
        //     let customer = await helper.getItem(`id = ${objects[i].customer_id}`, helper.table_name);
        //     objects[i].customer_name = customer.name;
        //     objects[i].phone = customer.phone
        // }


        res.json({
            status: '1',
            data: objects.length
        })
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


//export the whole thingy
module.exports = router;