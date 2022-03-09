const express = require('express');
const router = express.Router();


const Helper = require('../helpers/transfersHelper.js');
const helper = new Helper();
const log = require('electron-log');

let service = require('../services/transfer_service')


router.get('/getList', async (req, res) => {
    
    try {
        let data = await service._getList(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});



router.post('/saveBulk', async (req, res) => {
    try {
        let data = await service._saveBulk(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        //console.l.log(error)
        res.json({ status: '-1' })
    }
});

router.get('/getDetails', async (req, res) => {
    try {
        let data = await service._getDetails(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getReceivedDetails', async (req, res) => {
    try {
        let data = await service._getReceivedDetails(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getDetailsByVendor', async (req, res) => {
    try {
        let data = await service._getDetailsByVendor(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});



router.post('/deleteItem', async (req, res) => {
    try {
        let data = await service._deleteItem(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});



router.post('/deleteReceivedItem', async (req, res) => {
    try {
        let data = await service._deleteReceivedItem(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

router.get('/findById', async (req, res) => {
    try {
        let data = await service._findById(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/findBetweenDates', async (req, res) => {
    try {
        let data = await service._findBetweenDates(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/findReceiptsBetweenDates', async (req, res) => {
    try {
        let data = await service._findReceiptsBetweenDates(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/findSentReceiptsBetweenDates', async (req, res) => {
    try {
        let data = await service._findSentReceiptsBetweenDates(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/findReceiptsByBranch', async (req, res) => {
    try {
        let data = await service._findReceiptsByBranch(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/findReceiptsByReceivingBranch', async (req, res) => {
    try {
        let data = await service._findReceiptsByReceivingBranch(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.post('/saveBulkReceive', async (req, res) => {
    try {
        let data = await service._saveBulkReceive(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();

        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1' })
    }
});

//export the whole thingy
module.exports = router;