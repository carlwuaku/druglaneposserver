const express = require('express');
const router = express.Router();


//schema
const AdminHelper = require('../helpers/adminHelper');
const helper = new AdminHelper();
router.get('/list', function (req, res) {
	
})

router.post('/add', async (req, res) => {
	//hash password
	var bcrypt = require('bcryptjs');
	var password = req.body.password;
	var hash = bcrypt.hashSync(password, 10);
	try {
		var data = helper.prep_data(req.body);
		data.password_hash = `'${hash}'`
	await helper.insert(data, helper.table_name);
	res.json({message: 'successful'})
	} catch (error) {
		console.log(error)
		res.json({message: 'failed'})
	}
	
	
	
	//add new admin
	// const ad = new Admin({
	// 	_id: mongoose.Types.ObjectId(),
	// 	username: req.body.username,
	// 	display_name: req.body.display_name,
	// 	password: hash
	// });


	// ad.save()
	// 	.then(result => {
	// 		res.json(result);
	// 		console.log(result)
	// 	})
	// 	.catch(err => {
	// 		console.log(err);
	// 	});


});



router.post('/login', async (req, res) => {
	var bcrypt = require('bcryptjs');
	var username = req.body.username;
	var password = req.body.password;
	var token = "";
	const now = new Date();
	var hash =  bcrypt.hashSync(username + now, 10);
	var login = await helper.login(username, password);
	res.json({status: login})
	// Admin.find().exec(function (err, users) {
	// 	if (err) {
	// 		res.json({ status: '-1' });
	// 	}
	// 	var real = false;
	// 	var user = null;
	// 	for (var i = 0; i < users.length; i++) {
	// 		var item = users[i];
	// 		if (item.username == username) {
	// 			//check the password
	// 			if (bcrypt.compareSync(password, item.password)) {
	// 				// Passwords match
	// 				// Passwords match 
	// 				real = true;
	// 				user = item;
	// 				break;//break out of the loop
	// 			} else {
	// 				// Passwords don't match
	// 			}


	// 		}
	// 	}

	// 	if (real) {

	// 		//generate the token using username and current timestamp
	// 		user.token = bcrypt.hashSync(username + now, 10);
	// 		//update the user with the new token. if successful, log the user in
	// 		// Admin.update({id: user.id})
	// 		// .set({token: user.token});
	// 		Admin.update(
	// 			{ id: user.id },
	// 			{
	// 				token: user.token
	// 			}
	// 		).exec(function (err, d) {
	// 			if (err) {
	// 				res.json({ status: '0' })
	// 			}
	// 			console.log(user)
	// 			res.json({ status: '1', user_data: user });

	// 		});
	// 		// user.save(function(err){
	// 		// 	if(err){res.json({status: '0'});}
	// 		// 	else{

	// 		// 	}
	// 		// })

	// 	}
	// 	else { res.json({ status: '-2' }); }

	// });
});

//export the whole thingy
module.exports = router;