const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//schema
const Customer = require('../models/customerModel');
const CustomerHelper = require('../helpers/customerHelper');
const Helper = require('../helpers/customerHelper');
const Constants = require("../constants")
const Orders = require('../models/orderModel');
const ActivitiesHelper = require('../helpers/activitiesHelper');
// router.get('/list', function (req, res) {
//     Customer.find()
//         .exec()
//         .then(docs => {
//             docs.map(d => {
//                 if(d.picture != null){
//                     d.picture = Constants.base_url+Constants.customer_image_url+d.picture
//                     d.thumbnail = Constants.base_url+Constants.customer_image_thumbnail_url+d.thumbnail

//                 }
//             })
//             res.status(200).json({ status: 1, data: docs });
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err
//             })
//         })
// });

router.get('/getList', function (req, res) {
    var obj = CustomerHelper.prep_data(req.query)
    var offset = req.query.offset == undefined ? 0 : parseInt(req.query.offset);
    var limit = req.query.limit == undefined ? 1000 : parseInt(req.query.limit);
    // if (req.query.status != undefined) {
    //     obj.status = req.query.status
    // }
    // if(req.query.customer != undefined){
    //     obj.customer = req.query.customer
    // }
    Customer.find(obj)
        .skip(offset)
        .limit(limit)
        .sort("-first_name")
        .exec()
        .then(docs => {
            docs.map(d => {
                d['id'] = d._id;
                if (d.picture != null) {
                    d.picture = Constants.base_url + Constants.customer_image_url + d.picture
                    d.thumbnail = Constants.base_url + Constants.customer_image_thumbnail_url + d.thumbnail

                }
            })
            Customer.count(obj).then(count => {
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

    //add/update Customer
    var obj = CustomerHelper.prep_data(req.body);
    //if an id was submitted, update. else add
    var id = req.body._id;
    var query;
    if (id == undefined || id == null) {
        const ad = new Customer(obj);
        ad.save()
            .then(result => {
                ActivitiesHelper.save(req.body.display_name + " added new customer " + req.body.first_name + " " + req.body.last_name);

                res.json({ status: '1', data: result });
                //console.log(result)
            })
            .catch(err => {
                console.log(err);
                res.json({ status: '-1', message: err });

            });
    }
    else {


        Customer.update({ _id: req.body._id }, obj)
            .then(result => {
                result['id'] = result._id;
                ActivitiesHelper.save(req.body.display_name + " edited customer " + req.body.first_name + " " + req.body.last_name);
                res.json({ status: '1', data: result });
            })
            .catch(err => {
                res.json({ status: '-1', message: err });
            })

    }



});




router.post('/login', function (req, res) {
    var bcrypt = require('bcrypt');
    var username = req.body.username;
    var password = req.body.password;
    var token = "";
    const now = new Date();
    var hash = bcrypt.hashSync(username + now, 10);

    Customer.find().populate("role").exec(function (err, users) {
        if (err) {
            res.json({ status: '-1' });
        }
        var real = false;
        var user = null;
        for (var i = 0; i < users.length; i++) {
            var item = users[i];
            if (item.username == username) {
                //check the password
                //  if(bcrypt.compareSync(password, item.password)) {
                // 	// Passwords match
                // 	// Passwords match 
                // 	real = true;
                // 	user = item;
                // 	break;//break out of the loop
                //  } else {
                //  	// Passwords don't match
                //  }
                real = true;
                user = item;
                user.password = "";
                break;//break out of the loop


            }
        }

        if (real) {

            //generate the token using username and current timestamp
            user.token = bcrypt.hashSync(username + now, 10);
            //update the user with the new token. if successful, log the user in
            // Customer.update({id: user.id})
            // .set({token: user.token});
            Customer.update(
                { _id: user._id },
                {
                    token: user.token
                }
            ).exec(function (err, d) {
                if (err) {
                    res.json({ status: '0' })
                }
                console.log(user)
                res.json({ status: '1', user_data: user });

            });
            // user.save(function(err){
            // 	if(err){res.json({status: '0'});}
            // 	else{

            // 	}
            // })

        }
        else { res.json({ status: '-2' }); }

    });
});


router.get('/findById', function (req, res) {
    Customer.findById(req.query.id)
        .exec()
        .then(docs => {
            docs['id'] = docs._id
            if (docs.picture != null) {
                docs.picture = Constants.base_url + Constants.customer_image_url + docs.picture
                docs.thumbnail = Constants.base_url + Constants.customer_image_thumbnail_url + docs.thumbnail

            }
            res.status(200).json({ status: 1, data: docs });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

router.post('/delete', function (req, res) {

    var id = req.body._id;
    var name = req.body.name;
    //we may want to delete all orders associated with user
    var cas = req.body.cascade;
    Customer.remove({ "_id": id })
        .then(result => {
            ActivitiesHelper.save(req.body.display_name + " deleted customer " + req.body.name);
            //if cascade, delete all orders with userid
            if (cas == "yes") {
                Orders.remove({ "customer": id })
                    .then(result => {
                        res.json({ status: "1" });
                    })
            }
            else {
                res.json({ status: "1" });
            }
            //console.log(result)
        })
        .catch(err => {
            res.json({ status: "-1" });

        });


});

router.get('/getCustomerCount', function (req, res) {
    var obj = Helper.prep_data(req.query)
    Customer.count(obj)
        .then(result => {
            res.json({ status: "1", data: result });
            //console.log(result)
        })
        .catch(err => {
            res.json({ status: "-1" });

        });


});

router.get('/count', function (req, res) {
    var obj = Helper.prep_data(req.query)
    Customer.count(obj)
        .then(result => {
            res.json({ status: "1", data: result });
            //console.log(result)
        })
        .catch(err => {
            res.json({ status: "-1" });

        });


});

router.get('/count_by_field', function (req, res) {
    //get the counts by a field and value
    var field = req.query.field;
    var val = req.query.val;
    var obj = {}
    obj[field] = val;
    Customer.count(obj)
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
    var query = CustomerHelper.search(param);
    Customer.find().or(query)
        .exec()
        .then(docs => {
            docs.map(d => {
                d['id'] = d._id;
                if (d.picture != null) {
                    //get the thumbnail
                    d.picture = Constants.base_url + Constants.customer_image_url + d.picture
                    d.thumbnail = Constants.base_url + Constants.customer_image_thumbnail_url + d.thumbnail

                }
            })
            res.status(200).json({ status: 1, data: docs });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

router.post('/upload', function (req, res) {
    if (!req.files)
        return res.status(500).send('No files were uploaded.');

    // The name of the input field (i.e. "uploadFile") is used to retrieve the uploaded file
    let file = req.files.uploadFile;
    let name_of_file = file.name;
    //break down the name to get the extension
    let split_name = name_of_file.split(".");
    let extension = split_name.pop();
    let new_name = Date.now() + "." + extension;
    let location = "public/assets/customer_images/" + new_name;
    let thumb_location = "public/assets/customer_images/thumbnails/";
    // Use the mv() method to place the file somewhere on your server
    let base_location = Constants.base_url + Constants.customer_image_url + new_name;
    file.mv(location, function (err) {
        if (err)
            return res.status(500).send(err);
        //create a thumbnail customer_image_thumbnail_url
        var thumb = require('node-thumbnail').thumb;
        thumb({
            source: location,
            destination: thumb_location
        }).then(function (file) {
            /** the file object is an array of objects
             * [{ srcPath: 'public\\assets\\customer_images\\1526546458704.jpg',
    width: 800,
    basename: undefined,
    dstPath: 'public\\assets\\customer_images\\thumbnails\\1526546458704_thumb.jpg' }]
    to get the filename of the thumbnail, split the dstpath prop and pop that array
             */
            var thumbarray = file[0].dstPath.split("\\");
            var thumbnail_name = thumbarray.pop()
            res.json({ status: "1", data: { filename: new_name, location: base_location, thumbnail: thumbnail_name } });
        }).catch(function (e) {
            console.log('Error', e.toString());
        });

    });
});



//export the whole thingy
module.exports = router;