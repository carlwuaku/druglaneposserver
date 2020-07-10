const express = require('express');
const router = express.Router();

let adminClass = require('../helpers/adminHelper');
let adminHelper = new adminClass();

let vendorClass = require('../helpers/vendorHelper');
let helper = new vendorClass();
const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();


router.get('/getList', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    try {
        let objects = await helper.getAll(helper.table_name, limit, offset);
        

        res.json({ status: '1', data: objects })
    } catch (error) {
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/save', async (req, res) => {
   try {
       let data = helper.prep_data(req.body);
    //    data.created_by = req.userid;
        let id = req.body.id  == undefined ? null : req.body.id;
        if(id == null){
            id = await helper.insert(data, helper.table_name);
            await activities.log(req.userid,`"added a new vendor: ${data.name}"`,"'Vendors'")

        }
        else{
            await helper.update(data, ` id = ${id}`, helper.table_name);
            await activities.log(req.userid,`"updated vendor: ${data.name}"`,"'Vendors'")
        }

        res.json({ status: id, data: null })
    } catch (error) {
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.post('/delete', async (req, res) => {
    try {
        
         let id = req.body.id ;
         let name = req.body.name;
         await helper.delete(` id = ${id}`, helper.table_name);
         await activities.log(req.userid,`'deleted vendor: ${name}'`,"'Vendors'")

         
 
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

//export the whole thingy
module.exports = router;