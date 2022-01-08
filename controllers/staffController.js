const express = require('express');
const router = express.Router();
const constants = require('../constants');

const adminService = require('../services/admin_service')

const ActivitiesHelper = require('../helpers/activitiesHelper');

const AdminHelper = require('../helpers/adminHelper');
// const { default: rebuild } = require('electron-rebuild');
const helper = new AdminHelper();



const log = require('electron-log');


router.post('/login', async (req, res) => {

	try {

		var login = await adminService.login_function(req.body);// helper.login(username, password);
		res.json(login);

	} catch (error) {
		// await helper.closeConnection();
		//console.log(error)
		res.json({ status: -1, user_data: null })
	}



});


router.get('/getBranches', async (req, res) => {
	try {
		let data = await adminService.get_branches_function();  //helper.getAll(helper.branches_table_name);
		res.json(data)
	} catch (error) {
		// await helper.closeConnection();
		//console.log(error);
		res.json({ status: '-1', data: null })
	}
})




router.get('/getLogo', async (req, res) => {

	try {
		let data = await adminService.get_logo_function();
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		console.log(error);
		res.json({ status: '-1', data: null })
	}
})




router.post('/saveBranch', async (req, res) => {
	try {
		let data = await adminService.save_branch_function(req.body);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		//console.log(error);
		res.json({ status: '-1', data: null })
	}
})

router.get('/getInsurers', async (req, res) => {
	try {
		let data = await adminService.get_insurers_function();
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		//console.log(error);
		res.json({ status: '-1', data: null })
	}
});

router.post('/addInsurer', async (req, res) => {
	try {
		let data = await adminService.add_insurer_function(req.body);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		//console.log(error);
		log.error(error);
		res.json({ status: '-1', data: null })
	}
});

router.post('/deleteInsurer', async (req, res) => {
	try {
		let data = await adminService.delete_insurer_function(req.body);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		//console.log(error);
		log.error(error);
		res.json({ status: '-1', data: null });
	}
});

router.get('/getAllActivities', async (req, res) => {




	try {
		let data = await adminService.get_all_activities_function(req.query);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		res.json({ status: '-1', data: null })
	}

});


router.get('/getActivities', async (req, res) => {
	try {
		let data = await adminService.get_activities_function(req.query);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		res.json({ status: '-1', data: null })
	}

});

router.get('/getUserActivities/:id', async (req, res) => {


	try {
		req.query.id = req.params.id
		let data = await adminService.get_user_activities_function(req.query);
		res.json(data);

	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		res.json({ status: '-1', data: null })
	}

});

router.get('/getUsers', async (req, res) => {
	try {

		let data = await adminService.get_users_function();
		res.json(data);

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

		let data = await adminService.save_user_function(req.body);
		res.json(data);

	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		res.json({ status: '-1', data: null })
	}





});



router.post('/deleteUser', async (req, res) => {


	try {

		let data = await adminService.delete_user_function(req.body);
		res.json(data);

	} catch (error) {
		await helper.closeConnection();
		log.error(error);
		res.json({ status: '-1' })
	}

});

router.get('/getUser/:id', async (req, res) => {
	try {

		let data = await adminService.get_user_function(req.params);
		res.json(data);

	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

router.get('/getRoles', async (req, res) => {
	try {
		let data = await adminService.get_roles_function();
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

router.get('/getRolesLimit', async (req, res) => {
	try {
		let data = await adminService.get_roles_limit_function();
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});



router.get('/getRolePermissions/:id', async (req, res) => {
	try {
		let data = await adminService.get_role_permissions_function(req.params);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

router.get('/getRoleExcludedPermissions/:id', async (req, res) => {
	try {
		let data = await adminService.get_role_excluded_permissions_function(req.params);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		res.json({ status: '-1', data: null })
	}

});



router.post('/activateUser', async (req, res) => {

	try {
		let data = await adminService.activate_user_function(req.body);
		res.json(data);
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

	try {
		let data = await adminService.add_role_function(req.body);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		res.json({ status: '-1' })
	}




});


router.post('/deleteRole', async (req, res) => {

	try {
		let data = await adminService.delete_role_function(req.body);
		res.json(data);


	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1' })

	}





});

router.get('/getRole/:id', async (req, res) => {

	try {
		let data = await adminService.get_role_function(req.params);
		res.json(data);

	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1' })
	}

});

router.post('/addRolePermission', async (req, res) => {

	try {
		let data = await adminService.add_role_rermission_function(req.body);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1' })
	}

});

router.post('/deleteRolePermission', async (req, res) => {

	try {
		let data = await adminService.delete_role_permission_function(req.body);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		res.json({ status: '-1' })
	}

});

router.post('/changeStaffPassword', async (req, res) => {

	try {
		let data = await adminService.change_staff_password_function(req.body);
		res.json(data);

	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		res.json({ status: -1, message: 'Server error. Please contact admin' })
	}



});

router.get('/getSetting', async (req, res) => {
	try {
		let data = await adminService.get_setting_function(req.query);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

//////////////////ACCOUNT STUFF///////////////////////

router.post('/saveOutgoingPayment', async (req, res) => {
	try {
		let data = await adminService.save_outgoing_payment_function(req.body);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		log.error(error);
		res.json({ status: '-1', data: null });
	}





});

router.get('/findOutgoingPaymentsBetweenDates', async (req, res) => {
	try {
		let data = await adminService.find_outgoing_payments_between_dates_function(req.query);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		// //console.log(error)
		log.error(error);
		res.json({ status: '-1', data: null })
	}

});

router.post('/deletePayment', async (req, res) => {

	try {
		let data = await adminService.delete_payment_function(req.body);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		log.error(error)
		res.json({ status: '-1', data: null })
	}

});

router.get('/findVendorOutgoingPaymentsBetweenDates', async (req, res) => {
	try {
		let data = await adminService.find_vendor_outgoing_payments_between_dates_function(req.query);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		// //console.log(error)
		log.error(error);
		res.json({ status: '-1', data: null })
	}

});




router.get('/getPaymentRecipients', async (req, res) => {
	try {
		let data = await adminService.get_payment_recipients_function(req.query);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		// //console.log(error)
		log.error(error);
		res.json({ status: '-1', data: null })
	}

});


router.get('/getAccountingReport', async (req, res) => {
	try {
		let data = await adminService.get_accounting_report_function(req.query);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		// //console.log(error)
		log.error(error);
		res.json({ status: '-1', data: null })
	}

});
//////////////////END ACCOUNT STUFF///////////////////

////////////////INCOMING PAYMENTS//////////////////////
router.post('/saveIncomingPayment', async (req, res) => {
	try {
		let data = await adminService.save_incoming_payment_function(req.body);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		//console.log(error)
		log.error(error);
		res.json({ status: '-1', data: null })
	}





});

router.get('/findIncomingPaymentsBetweenDates', async (req, res) => {
	try {
		let data = await adminService.find_incoming_payments_between_dates_function(req.query);
		res.json(data);
	} catch (error) {
		await helper.closeConnection();
		// //console.log(error)
		log.error(error);
		res.json({ status: '-1', data: null })
	}

});

router.post('/deleteIncomingPayment', async (req, res) => {
	let helperClass = require('../helpers/incomingPaymentHelper')
	let h = new helperClass();
	try {
		let data = await adminService.delete_incoming_payment_function(req.body);
		res.json(data);
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


router.get('/resetUserPassword', async (req, res) => {
	let Helper = require('../helpers/token');
	let h = new Helper();
	try {


		//if retry, do not regenerate the token.
		if (req.query.retry == "1") {
			message = req.query.message;

			let data = { error: true, retry: true, message: message }
			//render the page
			res.render("resetPassword", data)
			return false;
		}
		//check the username  or email
		let user = req.query.user;
		let AdminHelper = require("../helpers/adminHelper")
		let adminHelper = new AdminHelper();
		let user_details = await adminHelper.getItem(`lower(email) = lower('${user}') or lower(username) = lower('${user}')`, adminHelper.table_name);
		//if found, generate the token and send the mail
		if (user_details != null) {


			//create a token and send it to the url
			const crypto = require("crypto");

			const token = crypto.randomBytes(5).toString("hex");
			//insert it into the token table
			//clear others
			await h.delete(`name = 'reset_user_password_${user_details.email}'`, h.table_name)
			await h.insert({ name: `'reset_user_password_${user_details.email}'`, token: `'${token}'` }, h.table_name)

			const axios = require('axios');


			let email = user_details.email;

			message = `You have requested to reset your Druglane password. Please use this code as token in the reset page: ${token}.`;
			// console.log(message)
			const FormData = require('form-data');

			const form = new FormData();
			form.append('mails', email);
			form.append('message', message);
			form.append('subject', "Reset Druglane Password");

			axios.post(constants.server_url + `/api_admin/sendBulkMail`, form, { headers: form.getHeaders() })


				.then(function (response) {
					// console.log(response.data);
					let data = {
						error: false, retry: false, message: `Email sent to your email. Please 
            check your inbox to retrieve the token`}
					//render the page
					res.json(data);
				})
				.catch(function (error) {
					let data = {
						error: true, retry: false, message: `Unable to communicate with cloud server. Please 
            check your internet connection and try again`}
					res.json(data);
				});
		}
		else {
			let data = {
				error: true, retry: false, message: `No username or email found. Please check and try 
                again.`}
			res.json(data);
		}

	} catch (error) {
		console.log(error);
		let data = {
			error: true, retry: false, message: `Server error. Please try again`
		}
		res.json(data);
	}

});


router.post('/doResetUserPassword', async (req, res) => {
	try {
		let Helper = require('../helpers/token');
		let h = new Helper();
		const activityHelper = require('../helpers/activitiesHelper')
		const ah = new activityHelper();

		let token = req.body.token;
		let password = req.body.password;
		let email = req.body.username;

		var bcrypt = require('bcryptjs');

		let AdminHelper = require("../helpers/adminHelper")
		let adminHelper = new AdminHelper();
		let user_details = await adminHelper.getItem(`lower(email) = lower('${email}') or lower(username) = lower('${email}')`, adminHelper.table_name);

		if (user_details == null) {
			res.json({ status: "-1", message: "Username or email not found" })
			return false;
		}
		//get the setting admin_password
		var old_token = await h.getField("token", h.table_name, `name = 'reset_user_password_${user_details.email}'`);
		// console.log(old_token.token, token)
		if (token == old_token.token) {
			var hash = bcrypt.hashSync(password, 10);

			//set the new password
			await adminHelper.updateField("password_hash", `'${hash}'`, `id = ${user_details.id}`, adminHelper.table_name)
			res.json({ status: "1", message: "Password reset successfully" })

		} else {
			// Passwords don't match
			res.json({ status: "-1", message: "Wrong token entered. Try again" })

		}

	} catch (error) {
		log.error(error);
		console.log(error);
		res.json({ status: "-1", message: "Server error. Try again" })

	}




});




//export the whole thingy
module.exports = router;