const express = require('express');
const router = express.Router();



const ActivitiesHelper = require('../helpers/activitiesHelper');

const AdminHelper = require('../helpers/adminHelper');
const activitiesModel = require("../models/activities")
const models = require("../models/index")
const sessionModel = require("../models/user_sessions")
// const { default: rebuild } = require('electron-rebuild');
const helper = new AdminHelper();
const activitiesHelper = new ActivitiesHelper()

const log = require('electron-log');


router.post('/login', async (req, res) => {

	var bcrypt = require('bcryptjs');
	var username = req.body.username;
	var password = req.body.password;
	try {

		let person = await models.users.findOne({
			where: { username: username }
		});
		// 	//wrong combination
		if (person == null) {
			res.json({ status: 0, user_data: null })
		}
		else {


			//check password
			let found = bcrypt.compareSync(password, person.password_hash);// true/false
			if (!found) {
				res.json({ status: 0, user_data: null })
			}
			else{

			let moment = require("moment");
			
			const now = new Date();
			var hash = bcrypt.hashSync(username + now, 10);
			var expires = moment().add(3, 'days');;
			var session_obj = { user_id: person.id, token: `${hash}`, expires: `${expires}` }
			await models.user_sessions.create(session_obj)
			let login = person;


			// var login = await helper.login(username, password);
			// if (!login) {

			// 	res.json({ status: 0, user_data: login })

			// }
			// else {
			// 	//create a session
			// 	const now = new Date();
			// 	var hash = bcrypt.hashSync(username + now, 10);
			// 	expires = now.getDate() + 3;
			// 	var session_obj = { user_id: login.id, token: `'${hash}'`, expires: `'${expires}'` }
			// 	await helper.insert(session_obj, helper.sessions_table);
				login.token = hash;
				login.role = login.role_id;
				var permissions = await models.permissions.findAll({
					where: {
					  role_id: login.role_id
					}
				  });
				  var perm_array = []
				  permissions.map(x => {
					  perm_array.push(x.permission_name)
				  })
				  //get the permissions for the role
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
			// 	await activitiesHelper.log(login.id, "'logged in'")

			res.json({ status: 1, user_data: login })
		}
		}
		// }

	} catch (error) {
		await helper.closeConnection();
		console.log(error)
		res.json({ status: -1, user_data: null })
	}



});


router.get('/getBranches', async (req, res) => {
	try {
		let query = await helper.getAll(helper.branches_table_name);
		res.json({ status: '1', data: query })
	} catch (error) {
		await helper.closeConnection();
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
		await helper.closeConnection();
		console.log(error);
		res.json({ status: '-1', data: null })
	}
})

router.get('/getInsurers', async (req, res) => {
	try {
		let query = await helper.getAll(helper.insurers_table_name);
		res.json({ status: '1', data: query })
	} catch (error) {
		await helper.closeConnection();
		console.log(error);
		res.json({ status: '-1', data: null })
	}
});

router.post('/addInsurer', async (req, res) => {
	try {
		let data = { name: `'${req.body.name}'` }
		await helper.insert(data, helper.insurers_table_name);
		res.json({ status: '1' })
	} catch (error) {
		await helper.closeConnection();
		console.log(error);
		log.error(error)
		res.json({ status: '-1', data: null })
	}
});

router.post('/deleteInsurer', async (req, res) => {
	try {
		await helper.delete(` name = '${req.body.name}'`, helper.insurers_table_name);
		res.json({ status: '1' })
	} catch (error) {
		await helper.closeConnection();
		console.log(error);
		log.error(error)
		res.json({ status: '-1', data: null })
	}
});

router.get('/getAllActivities', async (req, res) => {
	let offset = req.query.offset == undefined ? 0 : req.query.offset;
	let limit = req.query.limit == undefined ? null : req.query.limit;
	let start = req.query.start_date == undefined ? null : req.query.start_date;
	let end = req.query.end_date == undefined ? null : req.query.end_date;

	try {
		let objects;
		if (start == null) {
			objects = await activitiesHelper.getAll(activitiesHelper.table_name, limit, offset);
		}
		else {
			objects = await activitiesHelper.getMany(`  created_on >= '${start} 00:00:00' and created_on <= '${end} 23:59:59'`, activitiesHelper.table_name, limit, offset);

		}

		for (var i = 0; i < objects.length; i++) {
			var obj = objects[i];
			obj.user = await helper.getItem(` id = ${obj.user_id} `, helper.table_name)

		}
		console.log(objects)
		res.json({ status: '1', data: objects })
	} catch (error) {
		await helper.closeConnection();
		res.json({ status: '-1', data: null })
	}

});


router.get('/getActivities', async (req, res) => {
	let reg = req.query.r;
	let offset = req.query.offset == undefined ? 0 : req.query.offset;
	let limit = req.query.limit == undefined ? null : req.query.limit;
	try {
		let objects = await activitiesHelper.getMany(` activity like '%${reg}%'`, activitiesHelper.table_name, limit, offset);
		for (var i = 0; i < objects.length; i++) {
			var obj = objects[i];
			obj.user = await helper.getItem(` id = ${obj.user_id} `, helper.table_name)

		}

		res.json({ status: '1', data: objects })
	} catch (error) {
		await helper.closeConnection();
		res.json({ status: '-1', data: null })
	}

});

router.get('/getUserActivities/:id', async (req, res) => {
	let reg = req.params.id;
	let offset = req.query.offset == undefined ? 0 : req.query.offset;
	let limit = req.query.limit == undefined ? null : req.query.limit;
	let user = await helper.getItem(` id  = ${reg} `, helper.table_name);
	let start = req.query.start_date == undefined ? null : req.query.start_date;
	let end = req.query.end_date == undefined ? null : req.query.end_date;

	try {
		let where = start == null ? `user_id = ${reg}` : ` user_id = ${reg} and created_on >= '${start} 00:00:00' and created_on <= '${end} 23:59:59'`;
		let objects = await activitiesHelper.getMany(where, activitiesHelper.table_name, limit, offset);
		let total = await activitiesHelper.countBy(where, activitiesHelper.table_name)
		for (var i = 0; i < objects.length; i++) {
			var obj = objects[i];
			obj.user = await helper.getItem(` id = ${obj.user_id} `, helper.table_name)

		}

		res.json({ status: '1', data: objects, total: total, limit: limit, user: user })
	} catch (error) {
		await helper.closeConnection();
		console.log(error)
		res.json({ status: '-1', data: null })
	}

});

router.get('/getUsers', async (req, res) => {
	try {


		let objects = await helper.getAll(helper.table_name);
		for (var i = 0; i < objects.length; i++) {
			var obj = objects[i];
			obj.role = await helper.getItem(` role_id = ${obj.role_id} `, helper.roles_table)

		}
		res.json({ status: '1', data: objects })
	} catch (error) {
		await helper.closeConnection();
		console.log(error)
		res.json({ status: '-1', data: null })
	}
});

router.get('/userForm', async (req, res) => {
	let Helper = require('./helpers/adminHelper');
	let h = new Helper();
	let data = {};
	if (req.query.m != undefined) {
		data.message = req.query.m;
	}
	else {
		data.message = "";
	}
	if (req.query.user != undefined) {
		var user = await h.getUser(req.query.user);
		data.username = user.username,
			data.phone = user.phone,
			data.email = user.email,
			data.display_name = user.display_name,
			data.active = user.active,
			data.id = user.id
		data.role_id = user.role_id
	}
	else {
		data.username = undefined
		data.phone = undefined
		data.email = undefined
		data.display_name = undefined
		data.active = undefined
		data.id = undefined
		data.role_id = ''
	}

	data.roles = await h.getRoles();

	res.render('userForm', data);
	// res.sendFile(__dirname + '/app/index.html');
});


router.post('/saveUser', async (req, res) => {
	try {
		let h = helper;
		let id = req.body.id;

		if (id !== undefined) {
			let data = h.prep_data(req.body);
			//update. else insert
			var password = req.body.password;
			console.log(password)
			if (password !== undefined && password !== null && password != "undefined") {
				var bcrypt = require('bcryptjs');
				var hash = bcrypt.hashSync(password, 10);
				data.password_hash = `'${hash}'`;
			}
			else {
				delete data.password;
			}
			console.log(data)
			let where = ` id = ${id} `;
			await h.update(data, where, h.table_name);
		}
		else {
			var bcrypt = require('bcryptjs');
			var password = req.body.password;
			var hash = bcrypt.hashSync(password, 10);
			var data = h.prep_data(req.body);
			data.password_hash = `'${hash}'`
			await h.insert(data, h.table_name);

		}
		res.json({ status: '1', data: null })
	} catch (error) {
		await helper.closeConnection();
		console.log(error)
		res.json({ status: '-1', data: null })
	}





});



router.post('/deleteUser', async (req, res) => {

	let id = req.body.id;
	let user = await helper.getUserName(id)
	console.log(id)
	try {

		await h.delete(id, h.table_name);
		await activitiesHelper.log(req.userid, `'deleted user ${user}'`)
		res.json({ status: '1' })
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1' })
	}

});

router.get('/getUser/:id', async (req, res) => {
	try {
		let user = req.params.id;

		let object = await helper.getItem(`id = ${user}`, helper.table_name);
		object.role = await helper.getItem(`role_id = ${object.role_id}`, helper.roles_table)
		res.json({ status: '1', data: object })
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

router.get('/getRoles', async (req, res) => {
	try {
		let objects = await helper.getRoles();
		res.json({ status: '1', data: objects })
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

router.get('/getRolesLimit', async (req, res) => {
	try {
		let objects = await helper.getRoles();
		res.json({ status: '1', data: objects })
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});



router.get('/getRolePermissions/:id', async (req, res) => {
	try {
		let h = helper;
		let id = req.params.id;
		var rp = await h.getRolePermissions(id);

		res.json({ status: '1', data: rp })
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

router.get('/getRoleExcludedPermissions/:id', async (req, res) => {
	try {
		let h = helper;
		let id = req.params.id;
		var rp = await h.getRolePermissions(id);
		var allpermissions = await h.getPermissions();

		var permission_ids = [];
		for (var i = 0; i < rp.length; i++) {
			permission_ids.push(rp[i].permission_id);
		}
		console.log(permission_ids)
		let objects = [];
		for (var j = 0; j < allpermissions.length; j++) {
			console.log(allpermissions[j].permission_id)
			if (permission_ids.indexOf(allpermissions[j].permission_id) == -1) {
				objects.push(allpermissions[j])
			}
		}
		res.json({ status: '1', data: objects })
	} catch (error) {
		await helper.closeConnection();
		console.log(error)
		res.json({ status: '-1', data: null })
	}

});



router.post('/activateUser', async (req, res) => {
	let h = helper
	let id = req.body.id;
	let active = req.body.active;

	console.log(id)
	try {
		let user = await helper.getUserName(id)
		let data = { active: active }
		await h.update(data, `id = ${id}`, h.table_name);

		await activitiesHelper.log(req.userid, `'updated user status ${user} to ${active}'`)
		res.json({ status: '1' })
	} catch (error) {
		await helper.closeConnection();
		console.log(error)
		res.json({ status: '-1' })
	}

});

router.get('/userRole', async (req, res) => {
	let Helper = require('./helpers/adminHelper');
	let h = new Helper();
	let data = {};
	if (req.query.m != undefined) {
		data.message = req.query.m;
	}
	else {
		data.message = "";
	}


	var rp_ids = [];

	var allpermissions = await h.getPermissions();


	if (req.query.role != undefined) {

		//get the permissions for the role
		var rp = await h.getRolePermissions(req.query.role);
		for (var i = 0; i < rp.length; i++) {
			rp_ids.push(rp[i].permission_id)
		}


		var role = await h.getRole(req.query.role);
		data.role_id = req.query.role
		data.role_name = role.role_name
		data.description = role.description
		data.role_permissions = rp
		data.all_permissions = allpermissions;
		data.users = await h.getUsers(`${h.table_name}.role_id = ${req.query.role}`)
	}
	else {
		data.role_name = undefined
		data.description = undefined
		data.role_permissions = []
		data.all_permissions = allpermissions;
		data.role_id = undefined
		data.users = []
	}
	data.rp_ids = rp_ids

	res.render('userRole', data);
	// res.sendFile(__dirname + '/app/index.html');
});


router.post('/addRole', async (req, res) => {
	let h = helper;
	let id = req.body.id;
	let permissions = req.body.role_permissions
	console.log(req.body)
	try {
		let data = {};
		data.role_name = `'${req.body.role_name}'`;
		data.description = `'${req.body.description}'`;

		id = await h.insert(data, h.roles_table);

		res.json({ status: `'${id}'` })
		// await h.insertMany(['role_id, permission_id', perms, h.role_permissions_table])
	} catch (error) {
		await helper.closeConnection();
		console.log(error)
		res.json({ status: '-1' })
	}




});


router.post('/deleteRole', async (req, res) => {
	let h = helper;
	const ah = activitiesHelper;

	let id = req.body.id;
	let name = req.body.name;
	try {
		//delete the role permissions, users
		await h.delete(`role_id = ${id}`, h.role_permissions_table);
		await h.delete(`role_id = ${id}`, h.table_name);
		await h.delete(`role_id = ${id}`, h.roles_table);
		await ah.log(req.userid, `'deleted a role ${name}'`);

		res.json({ status: '1' })
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1' })

	}





});

router.get('/getRole/:id', async (req, res) => {
	let h = helper
	let id = req.params.id;

	try {
		let object = await helper.getItem(`role_id = ${id}`, helper.roles_table)
		res.json({ status: '1', data: object })
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1' })
	}

});

router.post('/addRolePermission', async (req, res) => {
	let role_id = req.body.role_id;
	let permission_id = req.body.permission_id;
	let data = {
		role_id: role_id,
		permission_id: permission_id
	}
	try {
		await helper.insert(data, helper.role_permissions_table)
		await activitiesHelper.log(req.userid, `' added a permission to role: ${role_id}'`)
		res.json({ status: '1' })
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1' })
	}

});

router.post('/deleteRolePermission', async (req, res) => {
	let role_id = req.body.role_id;
	let permission_id = req.body.permission_id;

	try {
		await helper.delete(`role_id = ${role_id} and permission_id = ${permission_id} `, helper.role_permissions_table)
		await activitiesHelper.log(req.userid, `' deleted a permission from role: ${role_id}'`)
		res.json({ status: '1' })
	} catch (error) {
		await helper.closeConnection();
		console.log(error)
		res.json({ status: '-1' })
	}

});

router.post('/changeStaffPassword', async (req, res) => {

	var bcrypt = require('bcryptjs');
	var username = req.body.username;
	var password = req.body.password;
	var id = req.body.id;
	var old = req.body.old_password
	try {
		var login = await helper.login(username, old);
		if (!login) {
			//wrong combination
			res.json({ status: "-1", message: "The old password is wrong. Try again" })

		}
		else {
			//update with the new one
			var hash = bcrypt.hashSync(password, 10);
			var data = {
				password_hash: `'${hash}'`
			}
			await helper.update(data, ` id = ${id} `, helper.table_name)

			await activitiesHelper.log(login.id, "'updated own password'")

			res.json({ status: "1" })
		}

	} catch (error) {
		await helper.closeConnection();
		console.log(error)
		res.json({ status: -1, message: 'Server error. Please contact admin' })
	}



});

//export the whole thingy
module.exports = router;