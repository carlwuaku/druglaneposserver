const express = require('express');
const router = express.Router();

let vendorClass = require('../helpers/vendorHelper');
let helper = new vendorClass();
const service = require('../services/vendor_service');

const log = require('electron-log');

router.get('/getList', async (req, res) => {
    
    try {
        let data = await service._getList(req.query);
		res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

router.get('/search', async (req, res) => {
    try {
        let data = await service._search(req.query);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.post('/save', async (req, res) => {
    try {
        let data = await service._save(req.body);
		res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error);
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

//export the whole thingy
module.exports = router;