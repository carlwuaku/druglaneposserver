const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//schema
const Model = require('../models/stockAdjustmentModel');
const Helper = require('../helpers/stockAdjustmentHelper');
const Constants = require("../constants")
router.get('/getList', function (req, res) {
    var obj = Helper.prep_data(req.query)
    var offset = req.query.offset == undefined ? 0 : parseInt(req.query.offset);
    var limit = req.query.limit == undefined ? 10 : parseInt(req.query.limit);
    // if (req.query.status != undefined) {
    //     obj.status = req.query.status
    // }
    // if(req.query.customer != undefined){
    //     obj.customer = req.query.customer
    // }
    Model.find(obj)
        .populate("product")
        .populate("added_by")
        .skip(offset)
        .limit(limit)
        .exec()
        .then(docs => {
            Model.count(obj).then(count => {
                res.status(200).json({ status: 1, data: docs, total: count, limit: limit });
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

router.post('/save', function (req, res) {

    //add/update order
    var obj = Helper.prep_data(req.body);
    //if an id was submitted, update. else add
    var id = req.body._id;
    var query;
    if (id == undefined || id == null) {


        const ad = new Model(obj);
        ad.save()
            .then(result => {

                res.json({ status: '1', data: result });
                //console.log(result)
            })
            .catch(err => {
                console.log(err);
                res.json({ status: '-1', message: err });

            });
    }
    else {


        Model.update({ _id: req.body._id }, obj)
            .then(result => {
                res.json({ status: '1', data: result });
            })
            .catch(err => {
                res.json({ status: '-1', message: err });
            })

    }



});


router.get('/count_by_field', function (req, res) {
    //get the counts by a field and value
    var field = req.query.field;
    var val = req.query.val;
    var obj = {}
    obj[field] = val;
    Model.count(obj)
        .then(result => {
            res.json({ status: "1", data: result });
            //console.log(result)
        })
        .catch(err => {
            res.json({ status: "-1" });

        });


});



// router.post('/add_item', function (req, res) {

//     //add new product to array of items in an order
//     var id = req.body.id;
//     var product = req.body.product;
//     var quantity = req.body.quantity
//     var price = req.body.price;
//     var obj = {
//         _id: mongoose.Types.ObjectId(),
//         product: mongoose.Types.ObjectId(product),
//         price: price,
//         quantity: quantity,
//         createdAt: req.body.createdAt
//     }
//     Model.update({ "_id": id }, { "$push": { "items": obj } })
//         .then(result => {
//             res.json({ status: "1" });
//             //console.log(result)
//         })
//         .catch(err => {
//             res.json({ status: "-1" });

//         });


// });

// router.post('/remove_item', function (req, res) {

//     //remove a subclass
//     var id = req.body.id;
//     var item_id = req.body.item_id;
//     var name = req.body.name;


//     Model.update({ "_id": id },
//         {
//             $pull: { items: { _id: item_id } }
//         })
//         .then(result => {
//             res.json({ status: "1" });
//             //console.log(result)
//         })
//         .catch(err => {
//             res.json({ status: "-1" });

//         });


// });




router.get('/findById', function (req, res) {
    Model.findById(req.query.id)
        .populate("customer")
        .populate("product")
        .exec()
        .then(docs => {

            res.status(200).json({ status: 1, data: docs });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

router.post('/delete', function (req, res) {

    //remove a permission frmo a role
    var id = req.body._id;
    var name = req.body.name;

    Model.remove({ "_id": id })
        .then(result => {
            res.json({ status: "1" });
            //console.log(result)
        })
        .catch(err => {
            res.json({ status: "-1" });

        });


});

router.get('/count', function (req, res) {
    var obj = {}
    if (req.query.status != undefined) {
        obj.status = req.query.status
    }
    Model.count(obj)
        .then(result => {
            res.json({ status: "1", data: result });
            //console.log(result)
        })
        .catch(err => {
            res.json({ status: "-1" });

        });


});





router.get('/search', function (req, res) {
    var param = req.query.param;
    var query = Helper.search(param);
    var offset = req.query.offset == undefined ? 0 : parseInt(req.query.offset);
    var limit = req.query.limit == undefined ? 10 : parseInt(req.query.limit);
    Model.find().or(query)
        .populate("product")
        .populate("added_by")
        .skip(offset)
        .limit(limit)
        .exec()
        .then(docs => {
            Model.count().or(query).then(count => {
                res.status(200).json({ status: 1, data: docs, total: count, limit: limit });
            })
            
           // res.status(200).json({ status: 1, data: docs });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

//find the between some dates
/**
 * fxn to sum a field
 * Income.aggregate([{
    $match : { $and : [ owner: userId, date: { $gte: start, $lt: end } ] },
},{
    $group : {
        _id : null,
        total : {
            $sum : "$amount"
        }
    }
}],callback);
 */
router.get('/find_between_dates', function (req, res) {
    var start_date = req.query.start_date;
    var end_date = req.query.end_date
    var offset = req.query.offset == undefined ? 0 : parseInt(req.query.offset);
    var limit = req.query.limit == undefined ? 10 : parseInt(req.query.limit);
    var obj = {
        date: {
            $gte: new Date(start_date),
            $lte: new Date(end_date)

        }
    }
    
    Model.find(obj)
        .populate("product")
        .populate("added_by")
        .skip(offset)
        .limit(limit)
        .exec()
        .then(docs => {
            Model.count(obj).then(count => {
                res.status(200).json({ status: 1, data: docs, total: count, limit: limit });
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});
//export the whole thingy
module.exports = router;