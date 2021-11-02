const express = require('express');
const router = express.Router();

const Helper = require('../helpers/saleHelper.js');
const helper = new Helper();


const service = require('../services/sales_service');


router.get('/getList', async (req, res) => {
    
    try {

        let data = await service._getList(req.query);
        res.json(data);

        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getProductSales', async (req, res) => {
    try {
        let data = await service._getProductSales(req.query);
        res.json(data);

       
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getCustomerSales', async (req, res) => {
    try {
        let data = await service._getCustomerSales(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
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
        console.log(error);
        res.json({ status: '-1' })
    }
});


router.post('/editSale', async (req, res) => {
    try {
        let data = await service._editSale(req.body);
        res.json(data);
        

    } catch (error) {
        await helper.closeConnection();

        log.error(error);
        // console.log(error);
        res.json({ status: '-1' })
    }
});


router.get('/getSaleDetails', async (req, res) => {
    try {

        let data = await service._getSaleDetails(req.query);
        res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/deleteByCode', async (req, res) => {
    try {
        let data = await service._deleteByCode(req.body);
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
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

router.get('/findReceiptsByProduct', async (req, res) => {
    try {
        let data = await service._findReceiptsByProduct(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/findUserSummaryBetweenDates', async (req, res) => {
    try {
        let data = await service._findUserSummaryBetweenDates(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

//get the shift summary
router.get('/findShiftSummaryBetweenDates', async (req, res) => {
    try {
        let data = await service._findShiftSummaryBetweenDates(req.query);
        res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/findPaymentMethodSummaryBetweenDates', async (req, res) => {
    try {
        let data = await service._findPaymentMethodSummaryBetweenDates(req.query);
        res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

router.get('/getDailySales', async (req, res) => {
    try {
        let data = await service._getDailySales(req.query);
        res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getBranchDailySalesSummary', async (req, res) => {
    try {
        let data = await service._getBranchDailySalesSummary(req.query);
        res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getBranchDailyRecords', async (req, res) => {
    try {
        let data = await service._getBranchDailyRecords(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

router.get('/getCategorySales', async (req, res) => {
    try {
        let data = await service._getCategorySales(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getBestSellers', async (req, res) => {
    try {
        let data = await service._getBestSellers(req.query);
        res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getArrears', async (req, res) => {
   

   try {
        let data = await service._getArrears(req.query);
        res.json(data);
        
    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


router.get('/getArrearsCount', async (req, res) => {
try {
        let data = await service._getArrearsCount(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // console.log(error);
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});


////////////////DAILY RECORDS//////////////////////
router.post('/saveDailyRecord', async (req, res) => {
    try {
        let data = await service._saveDailyRecord(req.body);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        //console.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }





});

router.get('/findDailyRecordsBetweenDates', async (req, res) => {
    try {
        let data = await service._findDailyRecordsBetweenDates(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // //console.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

/**
 * get the daily sale record for a specified day and shift
 */
router.get('/findDailyRecordsByDates', async (req, res) => {
    try {
        let data = await service._findDailyRecordsByDates(req.query);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        // //console.log(error)
        log.error(error);
        res.json({ status: '-1', data: null })
    }

});

router.post('/deleteDailyRecord', async (req, res) => {
   try {
        let data = await service._deleteDailyRecord(req.body);
        res.json(data);

    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});


//export the whole thingy
module.exports = router;