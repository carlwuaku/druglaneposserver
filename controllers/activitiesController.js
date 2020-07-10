const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//schema
const Model = require('../models/activitiesModel');
const Helper = require('../helpers/activitiesHelper');
const Constants = require("../constants")

router.get('/list', function (req, res) {
    var obj = Helper.prep_data(req.query)
    var offset = req.query.offset == undefined ? 0 : parseInt(req.query.offset);
    var limit = req.query.limit == undefined ? 1000 : parseInt(req.query.limit);
    // if (req.query.status != undefined) {
    //     obj.status = req.query.status
    // }
    // if(req.query.customer != undefined){
    //     obj.customer = req.query.customer
    // }
    Model.find(obj)
        
        .skip(offset)
        .limit(limit)
        .sort("-date")
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

router.post('/saveBulk', function (req, res) {

    //add bulk sales items. things will be sent as an comma separated string
    var products = req.body.products;
    var prices = req.body.prices;
    var quantities = req.body.quantities;
    var names = req.body.product_names;
    //convert them to arrays

    var product_array = products.split(",")
    var prices_array = prices.split(",")
    var quantities_array = quantities.split(",")
    var names_array = names.split(",")
    //save them individually
    let objects = []
    for (var i = 0; i < product_array.length; i++) {
        var obj = {
            product: product_array[i], price: prices_array[i],
            quantity: quantities_array[i],
            product_name: names_array[i],
            code: req.body.code,
            added_by: req.body.added_by,
            date: req.body.date
        }
        objects.push(obj);

    }
    var i = 0;
    var async = require('async');
    async.each(objects, function (obj, next) {

        let ad = new Model(obj);
        ad.save()
            .then(result => {
                next();

            })
            .catch(err => {
                console.log(err);
            });



    }, function (err) {
        res.json({ status: '1', data: {} });


    });

});


router.post('/updateBulkStatus', function (req, res) {

    //add bulk packaging items. things will be sent as an comma separated string
    var ids = req.body.ids;
    var status = req.body.status;

    //convert them to arrays

    var id_array = ids.split(",")
    //if status is package, add the date


    //save them individually
    let objects = []
    for (var i = 0; i < id_array.length; i++) {
        switch (status) {
            case "Packaged":
                var obj = {
                    _id: id_array[i],
                    status: status,
                    packaged_by: req.body.added_by,
                    package_date: req.body.date
                }
                break;

            case "Delivered":
                var obj = {
                    _id: id_array[i],
                    status: status,
                    delivered_by: req.body.added_by,
                    delivery_date: req.body.date
                }
                break;

            default:
                break;
        }
        console.log(obj)

        objects.push(obj);

    }
    var i = 0;
    var async = require('async');
    async.each(objects, function (obj, next) {

        Model.update({ _id: obj._id }, { $set: obj })
            .then(result => {
                next();
            })
            .catch(err => {
                console.log(err);
            })





    }, function (err) {
        res.json({ status: '1', data: {} });


    });

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
    // var obj = {}
    // if (req.query.status != undefined) {
    //     obj.status = req.query.status
    // }
    var obj = Helper.prep_data(req.query)
    Model.count(obj)
        .then(result => {
            res.json({ status: "1", data: result });
            //console.log(result)
        })
        .catch(err => {
            res.json({ status: "-1" });

        });


});


router.get('/getDeliveryPoints', function (req, res) {

    Model.find()
        .distinct("delivery_point")
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
    var limit = req.query.limit == undefined ? 1000 : parseInt(req.query.limit);
    Model.find().or(query)
        .populate("product")
        .populate("customer")
        .skip(offset)
        .limit(limit)
        .sort("-createdAt")
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
    var limit = req.query.limit == undefined ? 1000 : parseInt(req.query.limit);
    var obj = {
        createdAt: {
            $gte: new Date(start_date),
            $lte: new Date(end_date)

        }
    }
    if (req.query.status != undefined) {
        obj.status = req.query.status
    }
    Model.find(obj)
        .populate("product")
        .populate("customer")
        .skip(offset)
        .limit(limit)
        .sort("-createdAt")
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

router.get('/getDeliveryPointsByStatus', function (req, res) {
    var start_date = req.query.start_date;
    var end_date = req.query.end_date
    var status = req.query.status;
    var obj = {
        status: status
    }

    //$date refers to the date field in the db

    Model.aggregate([
        {
            $match: obj
        },
        {
            $group: {
                _id: "$delivery_point",
                count: { $sum: "$quantity" }
            }
        }
    ])
        .exec()
        .then(docs => {
            var items = [];
            docs.map(d => {
                if (d.count > 0) {
                    items.push(d._id);
                    console.log(items)
                }
            })
            //we only want the names where the count is > 0
            res.status(200).json({ status: 1, data: items });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});
//export the whole thingy
module.exports = router;