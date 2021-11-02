const express = require('express');
const constants = require("../constants")
const router = express.Router();


let customerClass = require('../helpers/customerHelper');
let helper = new customerClass();


const log = require('electron-log');

const service = require('../services/customer_service');

router.get('/getList', async (req, res) => {
    req.query.userid = req.userid
    try { 
        let data = await service._getList(req.query);
        res.json(data);
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
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
        //console.l.log(error)
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
        //console.l.log(error)
        log.error(error)
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

router.post('/saveDiagnostics', async (req, res) => {
    try { 

        let data = await service._saveDiagnostics(req.body);
        res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/findDiagnosticsById', async (req, res) => {
    try { 
        let data = await service._findDiagnosticsById(req.query);
        res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/deleteDiagnostics', async (req, res) => {
    try { 
        let data = await service._deleteDiagnostics(req.body);
        res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getCustomerDiagnosticsList', async (req, res) => {
   
    try { 
        let data = await service._getCustomerDiagnosticsList(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getDiagnosticsList', async (req, res) => {
    try { 

        let data = await service._getDiagnosticsList(req.query);
        res.json(data);


    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/findDiagnosticsBetweenDates', async (req, res) => {
    try { 
        let data = await service._findDiagnosticsBetweenDates(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/addRefill', async (req, res) => {
    
    try { 

        let data = await service._addRefill(req.body);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});



router.post('/deleteRefill', async (req, res) => {
    try { 

        let data = await service._deleteRefill(req.body);
        res.json(data);


    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getCustomerRefillList', async (req, res) => {
    
    try { 
        let data = await service._getCustomerRefillList(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getRefillList', async (req, res) => {
   
    try { 
        let data = await service._getRefillList(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/findRefillBetweenDates', async (req, res) => {
    try { 

        let data = await service._findRefillBetweenDates(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/countRefillBetweenDates', async (req, res) => {
    try { 
        let data = await service._countRefillBetweenDates(req.query);
        res.json(data);


    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


//export the whole thingy
module.exports = router;