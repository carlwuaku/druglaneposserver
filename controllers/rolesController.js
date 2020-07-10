const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//schema
const RolesModel = require('../models/RolesModel');
const ActivitiesHelper = require('../helpers/activitiesHelper');


router.get('/getList', function (req, res) {
    RolesModel.find()
        .exec()
        .then(docs => {
            res.status(200).json({status: 1, data:docs});
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

router.post('/addRole', function (req, res) {
    
    //add new role
    const ad = new RolesModel;
    ad.role_name = req.body.role_name;
    ad.description = req.body.description;
    //ad.permissions.push(req.body.permission)

    ad.save()
        .then(result => {
            ActivitiesHelper.save(req.body.display_name +" added new role  "+req.body.role_name);

            res.json({status: "1", data: result});
            //console.log(result)
        })
        .catch(err => {
            res.json({status: "-1"});

        });


});

router.post('/add_permission', function (req, res) {
    
    //add new permission to array
    var id = req.body.role_id;
    var perm = req.body.permission;

    RolesModel.update({"_id": id}, { "$push": { "permissions": perm } })
        .then(result => {
            ActivitiesHelper.save(req.body.display_name +" added permission  "+ perm +" to "+req.body.role_name);

            res.json({status: "1"});
            //console.log(result)
        })
        .catch(err => {
            res.json({status: "-1"});

        });


});

router.post('/remove_permission', function (req, res) {
    
    //remove a permission frmo a role
    var id = req.body.role_id;
    var perm = req.body.permission;

    RolesModel.update({"_id": id}, { 
        $pull: { permissions: { $in: [ perm]} }
    })
        .then(result => {
            ActivitiesHelper.save(req.body.display_name +" removed permission  "+ perm +" from "+req.body.role_name);

            res.json({status: "1"});
            //console.log(result)
        })
        .catch(err => {
            res.json({status: "-1"});

        });


});




router.get('/findById', function (req, res) {
    RolesModel.findById(req.query.id)
        .exec()
        .then(docs => {
            res.status(200).json({status: 1, data:docs});
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

router.post('/delete', function (req, res) {
    
    //remove a role frmo a role
    var id = req.body.id;
    var name = req.body.name;

    RolesModel.remove({"_id": id})
        .then(result => {
            ActivitiesHelper.save(req.body.display_name +" deleted a role "+req.body.role_name);

            res.json({status: "1"});
            //console.log(result)
        })
        .catch(err => {
            res.json({status: "-1"});

        });


});


//export the whole thingy
module.exports = router;