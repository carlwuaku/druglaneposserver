const express = require('express');
const router = express.Router();
const log = require('electron-log');

const Helper = require('../helpers/purchaseHelper.js');
const helper = new Helper();



let service = require('../services/purchase_service')

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
        // console.log(error)
        res.json({ status: '-1' })
    }
});


router.post('/edit', async (req, res) => {
    try {
        let data = await service._edit(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        res.json({ status: '-1' })
    }
});

router.get('/getDetails', async (req, res) => {
    try {
        let data = await service._getDetails(req.query);
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


router.post('/delete', async (req, res) => {
    try {
        let data = await service._delete(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error);
        res.json({ status: '-1', data: null });
    }

});

router.post('/deleteItem', async (req, res) => {
    try {
        let data = await service._deleteItem(req.body);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
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
        // console.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/findReceiptsByVendor', async (req, res) => {
    try {
        let data = await service._findReceiptsByVendor(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getPurchaseTotals', async (req, res) => {

    try {
        let data = await service._getPurchaseTotals(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getProductPurchases', async (req, res) => {


    try {
        let data = await service._getProductPurchases(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


//export the whole thingy
module.exports = router;