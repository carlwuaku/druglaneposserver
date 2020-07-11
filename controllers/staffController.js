const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//schema
const Staff = require('../models/staffModel');
const RolesModel = require('../models/RolesModel');
const ActivitiesHelper = require('../helpers/activitiesHelper');

const AdminHelper = require('../helpers/adminHelper');
const helper = new AdminHelper();

router.get('/getList', function (req, res) {
	Staff.find().populate("role")
		.exec()
		.then(docs => {
			res.status(200).json({ status: 1, data: docs });
		})
		.catch(err => {
			res.status(500).json({
				error: err
			})
		})
})

router.post('/add', async (req, res) => {
	var username = req.body.username;

	var password = req.body.password;
	var hash = bcrypt.hashSync(password, 10);
	//add new Staff
	const ad = new Staff({
		_id: mongoose.Types.ObjectId(),
		username: req.body.username,
		display_name: req.body.display_name,
		password: hash,
		contact: req.body.contact,
		email: req.body.email,
		role: req.body.role
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

router.post('/login', async (req, res) => {

	var bcrypt = require('bcryptjs');
	var username = req.body.username;
	var password = req.body.password;
	try {
		var login = await helper.login(username, password);
		if (!login) {
			//wrong combination
			res.json({ status: 0, user_data: login })

		}
		else {
			//create a session
			const now = new Date();
			var hash = bcrypt.hashSync(username + now, 10);
			expires = now.getDate() + 3;
			var session_obj = { user_id: login.id, token: `'${hash}'`, expires: `'${expires}'` }
			await helper.insert(session_obj, helper.sessions_table);
			login.token = hash;
			login.role = login.role_id;
			login.permissions = await helper.getRolePermissions(login.role_id, 'strings');

			let settingsHelper = require('../helpers/settingsHelper');
			let sh = new settingsHelper();
			login.company_name = await sh.getSetting(`'company_name'`);
			login.company_phone = await sh.getSetting(`'phone'`);
			login.company_address = await sh.getSetting(`'address'`);
			login.digital_address = await sh.getSetting(`'digital_address'`);
			login.company = {
				id: 0, name: login.company_name, address: login.company_address,
				phone: login.company_phone, digital_address: login.digital_address
			}
			login.company_id = 0;
			login.parent_company = { id: 0, name: 'default' };


			login.type = "staff";


			res.json({ status: 1, user_data: login })
		}

	} catch (error) {
		console.log(error)
		res.json({ status: -1, user_data: null })
	}



});


router.get('/getBranches', async (req, res) => {
	try {
		let query = await helper.getAll(helper.branches_table_name);
		res.json({ status: '1', data: query })
	} catch (error) {
		console.log(error);
		res.json({ status: '-1', data: null })
	}
})


router.post('/saveBranch', async (req, res) => {
	try {
		let data = {
			name: `'${req.body.name}'`,
			phone: `'${req.body.phone}'`
		}
		let id = await helper.insert(data, helper.branches_table_name)
		res.json({ status: id })
	} catch (error) {
		console.log(error);
		res.json({ status: '-1', data: null })
	}
})

router.get('/getInsurers', async (req, res) => {
	try {
		let query = await helper.getAll(helper.insurers_table_name);
		res.json({ status: '1', data: query })
	} catch (error) {
		console.log(error);
		res.json({ status: '-1', data: null })
	}
})

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


// router.get('/getBySchool', function (req, res) {
// 	Staff.find({school_id: req.query.id})
// 	.populate("role")
// 		.exec()

//         .then(docs => {
//             res.status(200).json({status: 1, data:docs});
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err
//             })
//         })
// })
router.post('/addRole', function (req, res) {

	//add new role
	const ad = new RolesModel;
	ad.role_name = req.body.role_name;
	ad.description = req.body.description;
	//ad.permissions.push(req.body.permission)

	ad.save()
		.then(result => {
			ActivitiesHelper.save(req.body.display_name + " added new role  " + req.body.role_name);

			res.json({ status: "1", data: result });
			//console.log(result)
		})
		.catch(err => {
			console.error(err)
			res.json({ status: "-1" });

		});


});

router.get('/findById', function (req, res) {
	Staff.findById(req.query.id).populate("role")
		.exec()
		.then(docs => {
			docs['id'] = docs._id;

			res.status(200).json({ status: 1, data: docs });
		})
		.catch(err => {
			res.status(500).json({
				error: err
			})
		})
});
//export the whole thingy
module.exports = router;