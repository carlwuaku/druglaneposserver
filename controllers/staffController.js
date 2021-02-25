const express = require('express');
const router = express.Router();



const ActivitiesHelper = require('../helpers/activitiesHelper');

const AdminHelper = require('../helpers/adminHelper');
// const { default: rebuild } = require('electron-rebuild');
const helper = new AdminHelper();
const activitiesHelper = new ActivitiesHelper()

const CustomerHelper = require('../helpers/customerHelper.js');
const customerHelper = new CustomerHelper();


const log = require('electron-log');


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
			login.number_of_shifts = await sh.getSetting(`'number_of_shifts'`);
			login.company = {
				id: 0, name: login.company_name, address: login.company_address,
				phone: login.company_phone, digital_address: login.digital_address
			}
			login.company_id = 0;
			login.parent_company = { id: 0, name: 'default' };


			login.type = "staff";
			await activitiesHelper.log(login.id, "'logged in'")

			res.json({ status: 1, user_data: login })
		}

	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		res.json({ status: -1, user_data: null })
	}



});


router.get('/getBranches', async (req, res) => {
	try {
		let query = await helper.getAll(helper.branches_table_name);
		res.json({ status: '1', data: query })
	} catch (error) {
		await helper.closeConnection();
		//console.log(error);
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
		//console.log(error);
		res.json({ status: '-1', data: null })
	}
})

router.get('/getInsurers', async (req, res) => {
	try {
		let query = await helper.getAll(helper.insurers_table_name);
		res.json({ status: '1', data: query })
	} catch (error) {
		await helper.closeConnection();
		//console.log(error);
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
		//console.log(error);
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
		//console.log(error);
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
		//console.log(objects)
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
		//console.log(error)
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
		//console.log(error)
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
			//console.log(password)
			if (password !== undefined && password !== null && password != "undefined") {
				var bcrypt = require('bcryptjs');
				var hash = bcrypt.hashSync(password, 10);
				data.password_hash = `'${hash}'`;
			}
			else {
				delete data.password;
			}
			//console.log(data)
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
		//console.log(error)
		res.json({ status: '-1', data: null })
	}





});



router.post('/deleteUser', async (req, res) => {

	let id = req.body.id;
	let user = await helper.getUserName(id)
	//console.log(id)
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
		//console.log(permission_ids)
		let objects = [];
		for (var j = 0; j < allpermissions.length; j++) {
			//console.log(allpermissions[j].permission_id)
			if (permission_ids.indexOf(allpermissions[j].permission_id) == -1) {
				objects.push(allpermissions[j])
			}
		}
		res.json({ status: '1', data: objects })
	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		res.json({ status: '-1', data: null })
	}

});



router.post('/activateUser', async (req, res) => {
	let h = helper
	let id = req.body.id;
	let active = req.body.active;

	//console.log(id)
	try {
		let user = await helper.getUserName(id)
		let data = { active: active }
		await h.update(data, `id = ${id}`, h.table_name);

		await activitiesHelper.log(req.userid, `'updated user status ${user} to ${active}'`)
		res.json({ status: '1' })
	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
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
	//console.log(req.body)
	try {
		let data = {};
		data.role_name = `'${req.body.role_name}'`;
		data.description = `'${req.body.description}'`;

		id = await h.insert(data, h.roles_table);

		res.json({ status: `'${id}'` })
		// await h.insertMany(['role_id, permission_id', perms, h.role_permissions_table])
	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
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
		//console.log(error)
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
		//console.log(error)
		res.json({ status: -1, message: 'Server error. Please contact admin' })
	}



});

router.get('/getSetting', async (req, res) => {
	try {
		let setting = req.query.setting;
		let settingsHelper = require('../helpers/settingsHelper');
		let sh = new settingsHelper();
		let result = await sh.getSetting(`'${setting}'`);

		res.json({ status: '1', data: result })
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

//////////////////ACCOUNT STUFF///////////////////////

router.post('/saveOutgoingPayment', async (req, res) => {
	try {
		let helperClass = require('../helpers/outgoingPaymentHelper')
		let h = new helperClass();

		let data = h.prep_data(req.body);
		data.created_by = req.userid;
		// //console.log(data)
		await h.insert(data, h.table_name);

		res.json({ status: '1', data: null })
	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		log.error(error)
		res.json({ status: '-1', data: null })
	}





});

router.get('/findOutgoingPaymentsBetweenDates', async (req, res) => {
	try {
		let helperClass = require('../helpers/outgoingPaymentHelper')
		let h = new helperClass();
		let vendorClass = require('../helpers/vendorHelper');
		let vendorHelper = new vendorClass();

		let start = req.query.start_date == undefined ? h.getToday() : req.query.start_date;
		let end = req.query.end_date == undefined ? h.getToday() : req.query.end_date;
		let code = req.query.code;
		let type = req.query.type

		let objects = null;
		if (code != undefined) {
			objects = await h.search(code)
		}
		else if (type != undefined) {
			objects = await h.getMany(` date >= '${start}' and date <= '${end}' and type ='${type}'`, h.table_name);
		}
		else {
			objects = await h.getMany(` date >= '${start}' and date <= '${end}' `, h.table_name);

		}

		for (var i = 0; i < objects.length; i++) {
			var obj = objects[i];
			//if a purchase credit, get the vendor
			if (obj.type == 'Credit Purchase Payment') {
				try {
					let vendor = await vendorHelper.getItem(` id = ${obj.recipient}`, vendorHelper.table_name);
					obj.recipient = vendor.name;
				} catch (error) {
					log.error(error)
					obj.recipient = 'Unknown Vendor';

				}

			}


		}


		res.json({
			status: '1',
			data: objects
		})
	} catch (error) {
		await helper.closeConnection();
		// //console.log(error)
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

router.post('/deletePayment', async (req, res) => {
	let helperClass = require('../helpers/outgoingPaymentHelper')
	let h = new helperClass();
	try {
		let codes = req.body.code.split(",");//comma-separated
		let code_quotes = []
		for (var i = 0; i < codes.length; i++) {
			code_quotes.push(`${codes[i]}`)
		}


		await h.delete(` id in (${code_quotes.join(",")}) `, h.table_name);
		await activitiesHelper.log(req.query.userid, `"deleted  payment receipt: ${code_quotes.join(",")}  "`, `'Accounts'`)



		res.json({
			status: '1'
		})
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

router.get('/findVendorOutgoingPaymentsBetweenDates', async (req, res) => {
	try {
		let helperClass = require('../helpers/outgoingPaymentHelper')
		let h = new helperClass();
		let vendorClass = require('../helpers/vendorHelper');
		let vendorHelper = new vendorClass();

		let start = req.query.start_date == undefined ? h.getToday() : req.query.start_date;
		let end = req.query.end_date == undefined ? h.getToday() : req.query.end_date;
		let vendor = req.query.vendor;

		let objects = null;
		objects = await h.getMany(` recipient = ${vendor} and date >= '${start}' and date <= '${end}' `, h.table_name);


		for (var i = 0; i < objects.length; i++) {
			var obj = objects[i];
			//if a purchase credit, get the vendor
			if (obj.type == 'Credit Purchase Payment') {
				try {
					let vendor = await vendorHelper.getItem(` id = ${obj.recipient}`, vendorHelper.table_name);
					obj.recipient = vendor.name;
				} catch (error) {
					log.error(error)
					obj.recipient = 'Unknown Vendor';

				}

			}


		}


		res.json({
			status: '1',
			data: objects
		})
	} catch (error) {
		await helper.closeConnection();
		// //console.log(error)
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});




router.get('/getPaymentRecipients', async (req, res) => {
	try {
		let helperClass = require('../helpers/outgoingPaymentHelper')
		let h = new helperClass();
		let vendorClass = require('../helpers/vendorHelper');
		let vendorHelper = new vendorClass();

		let start = req.query.start_date == undefined ? h.getToday() : req.query.start_date;
		let end = req.query.end_date == undefined ? h.getToday() : req.query.end_date;
		let vendor = req.query.vendor;

		let objects = null;
		objects = await h.getMany(` recipient = ${vendor} and date >= '${start}' and date <= '${end}' `, h.table_name);


		for (var i = 0; i < objects.length; i++) {
			var obj = objects[i];
			//if a purchase credit, get the vendor
			if (obj.type == 'Credit Purchase Payment') {
				try {
					let vendor = await vendorHelper.getItem(` id = ${obj.recipient}`, vendorHelper.table_name);
					obj.recipient = vendor.name;
				} catch (error) {
					log.error(error)
					obj.recipient = 'Unknown Vendor';

				}

			}


		}


		res.json({
			status: '1',
			data: objects
		})
	} catch (error) {
		await helper.closeConnection();
		// //console.log(error)
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});


router.get('/getAccountingReport', async (req, res) => {
	try {
	let defs = helper.setDates('this_month')
	let start = req.query.start_date == undefined ? defs.start_date : req.query.start_date;
	let end = req.query.end_date == undefined ? defs.end_date : req.query.end_date;
	

	const SalesDetailsHelper = require('../helpers/salesDetailsHelper.js');
	const salesDetailsHelper = new SalesDetailsHelper();

	const purchaseDetailsHelper = require("../helpers/purchaseDetailsHelper")
	const pDetailsHelper = new purchaseDetailsHelper()

	const tDetailsClass = require('../helpers/transferDetailsHelper.js');
	const tdetailsHelper = new tDetailsClass();

	const rDetailsClass = require('../helpers/receivedTransferDetailsHelper.js');
	const rdetailsHelper = new rDetailsClass();

	let stockValueClass = require('../helpers/stockValueHelper')
	let stockValueHelper = new stockValueClass();

	let paymentClass = require('../helpers/outgoingPaymentHelper')
	let paymentHelper = new paymentClass();


let outgoingHelperClass = require('../helpers/outgoingPaymentHelper')
	let h = new outgoingHelperClass();

	let sales = await salesDetailsHelper.getTotalSales(start, end);
	let purchases = await pDetailsHelper.getTotalPurchase(start, end)
	let transfers_out = await tdetailsHelper.getTotal(start, end)
	let transfers = await rdetailsHelper.getTotal(start, end)
	let starting_stock = await stockValueHelper.getStockValueByDate(start);
	let closing_stock = await stockValueHelper.getStockValueByDate(end);
	let expenses = await h.getAllTotalPaid('', start, end)

	let difference = sales - (purchases + starting_stock - closing_stock) - expenses
		let profit = difference > 0


		res.json({
			status: '1',
			total_purchase: purchases.toLocaleString(),
			total_sale: sales.toLocaleString(),
			starting_stock: starting_stock.toLocaleString(),
			closing_stock: closing_stock.toLocaleString(),
			expenses: expenses.toLocaleString(),
			profit: profit,
			difference: difference.toLocaleString()

		})
	} catch (error) {
		await helper.closeConnection();
		// //console.log(error)
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});
//////////////////END ACCOUNT STUFF///////////////////

////////////////INCOMING PAYMENTS//////////////////////
router.post('/saveIncomingPayment', async (req, res) => {
	try {
		let helperClass = require('../helpers/incomingPaymentHelper')
		let h = new helperClass();

		let data = h.prep_data(req.body);
		data.created_by = req.userid;

		try {
			let customer_phone = req.body.customer_phone;
			//get the customer who matches the name
			let cust_details = await customerHelper.getItem(` phone = "${customer_phone}" `, customerHelper.table_name);
			if (cust_details == null) {
				//save the person
				data.payer =
				 await customerHelper.insert({
					name: `"${req.body.customer_name}"`,
					phone: `"${req.body.customer_phone}"`
				}, customerHelper.table_name)
			}
			// sales_data.customer = `"${req.body.customer_name} - ${req.body.customer_phone}"`;
			 
		} catch (error) {
			console.log(error)
		}


		// //console.log(data)
		await h.insert(data, h.table_name);

		res.json({ status: '1', data: null })
	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		log.error(error)
		res.json({ status: '-1', data: null })
	}





});

router.get('/findIncomingPaymentsBetweenDates', async (req, res) => {
	try {
		let helperClass = require('../helpers/incomingPaymentHelper')
		let h = new helperClass();
		
		let start = req.query.start_date == undefined ? h.getToday() : req.query.start_date;
		let end = req.query.end_date == undefined ? h.getToday() : req.query.end_date;
		let code = req.query.code;
		let type = req.query.type

		let objects = null;
		if (code != undefined) {
			objects = await h.search(code)
		}
		else if (type != undefined) {
			objects = await h.getMany(` date >= '${start}' and date <= '${end}' and type ='${type}'`, h.table_name);
		}
		else {
			objects = await h.getMany(` date >= '${start}' and date <= '${end}' `, h.table_name);

		}

		


		res.json({
			status: '1',
			data: objects
		})
	} catch (error) {
		await helper.closeConnection();
		// //console.log(error)
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

router.post('/deleteIncomingPayment', async (req, res) => {
	let helperClass = require('../helpers/incomingPaymentHelper')
	let h = new helperClass();
	try {
		let codes = req.body.code.split(",");//comma-separated
		let code_quotes = []
		for (var i = 0; i < codes.length; i++) {
			code_quotes.push(`${codes[i]}`)
		}


		await h.delete(` id in (${code_quotes.join(",")}) `, h.table_name);
		await activitiesHelper.log(req.query.userid, `"deleted credit payment receipt: ${code_quotes.join(",")}  "`, `'Accounts'`)



		res.json({
			status: '1'
		})
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});


router.get('/getCustomerPayments', async (req, res) => {
   
	let helperClass = require('../helpers/incomingPaymentHelper')
	let h = new helperClass();
    try {
        let id = req.query.customer;
		let objects = await h.getMany(` payer = ${id}  `, h.table_name);
		

        // objects.map(obj => {
        //     obj.stock = obj.current_stock
        // })
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});
///////////////////END INCOMING PAYMENTS///////////////

//export the whole thingy
module.exports = router;