const express = require('express');
const router = express.Router();

let adminClass = require('../helpers/adminHelper');
let adminHelper = new adminClass();

let vendorClass = require('../helpers/vendorHelper');
let helper = new vendorClass();

let paymentClass = require('../helpers/outgoingPaymentHelper')
		let paymentHelper = new paymentClass();

const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();

const DetailsHelper = require('../helpers/purchaseDetailsHelper.js');
const purchaseDetailsHelper = new DetailsHelper();

const log = require('electron-log');

router.get('/getList', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    try {
        let objects = await helper.getAll(helper.table_name, limit, offset);
        let today = helper.getToday()
        for(var i = 0; i < objects.length; i++){
            let curr = objects[i]
            let total_paid = await paymentHelper.getTotalPaidToVendor(curr.id, '', today);
        
        let total_bought = await purchaseDetailsHelper.getTotalAmountFromVendor(curr.id);
        let balance = total_bought - total_paid;
        curr.total_paid = total_paid.toLocaleString()
        curr.total_bought = total_bought.toLocaleString();
        curr.balance = balance.toLocaleString()
        }
        

        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/search', async (req, res) => {
    let param = req.query.param;
    try {
        let objects = await helper.search(param);
        let today = helper.getToday()
        for(var i = 0; i < objects.length; i++){
            let curr = objects[i]
            let total_paid = await paymentHelper.getTotalPaidToVendor(curr.id, '', today);
        
        let total_bought = await purchaseDetailsHelper.getTotalAmountFromVendor(curr.id);
        let balance = total_bought - total_paid;
        curr.total_paid = total_paid.toLocaleString()
        curr.total_bought = total_bought.toLocaleString();
        curr.balance = balance.toLocaleString()
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
            await activities.log(req.userid, `"added a new vendor: ${req.body.name}"`, "'Vendors'")

        }
        else {
            await helper.update(data, ` id = ${id}`, helper.table_name);
            await activities.log(req.userid, `"updated vendor: ${req.body.name}"`, "'Vendors'")
        }

        res.json({ status: id, data: null })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/delete', async (req, res) => {
    try {

        let id = req.body.id;
        let name = req.body.name;
        await helper.delete(` id = ${id}`, helper.table_name);
        await activities.log(req.userid, `'deleted vendor: ${name}'`, "'Vendors'")



        res.json({ status: '1', data: null })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});



router.get('/findById', async (req, res) => {
    try {
        let id = req.query.id;
        let today = helper.getToday()
        let object = await helper.getItem(`id = ${id} `, helper.table_name);
        let total_paid = await paymentHelper.getTotalPaidToVendor(id, '', today);
        
        let total_bought = await purchaseDetailsHelper.getTotalAmountFromVendor(id);
        let balance = total_bought - total_paid;
        object.total_paid = total_paid.toLocaleString()
        object.total_bought = total_bought.toLocaleString();
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

//export the whole thingy
module.exports = router;