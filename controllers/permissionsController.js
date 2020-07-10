const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//schema
const Permissions = require('../models/permissionsModel');

router.get('/getList', function (req, res) {
    Permissions.find()
    .exec()
    .then(docs => {
        res.status(200).json({status: "1", data:docs});
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
});

router.post('/add', function (req, res) {
    
    //add new permission
    const ad = new Permissions({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description
    });


    ad.save()
    .then(result => {
        res.json(result);
        //console.log(result)
    })
    .catch(err => {
        console.log(err);
    });

   
});

//export the whole thingy
module.exports = router;