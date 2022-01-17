
let adminClass = require('../helpers/adminHelper');
let adminHelper = new adminClass();

let vendorClass = require('../helpers/vendorHelper');
let helper = new vendorClass();

let paymentClass = require('../helpers/outgoingPaymentHelper')
		let paymentHelper = new paymentClass();

const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();

const DetailsHelper = require('../helpers/purchaseDetailsHelper.js');
const purchaseDetailsHelper = new DetailsHelper();

const log = require('electron-log');

exports._getList= async(_data) => {
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    try {
        let objects = await helper.getAll(helper.table_name, limit, offset,"name");
        let today = helper.getToday()
        for(var i = 0; i < objects.length; i++){
            let curr = objects[i]
            let total_paid = await paymentHelper.getTotalPaidToVendor(curr.id, '', today);
        
        let total_bought = await purchaseDetailsHelper.getTotalAmountFromVendor(curr.id);
        let balance = total_bought - total_paid;
        curr.total_paid = total_paid.toLocaleString()
        curr.total_bought = total_bought.toLocaleString();
        curr.balance = balance.toLocaleString()
        }
        

        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        log.error(error)
        throw new Error(error);
    } 

};

exports._search= async(_data) => {
    let param = _data.param;
    try {
        let objects = await helper.search(param);
        let today = helper.getToday()
        for(var i = 0; i < objects.length; i++){
            let curr = objects[i]
            let total_paid = await paymentHelper.getTotalPaidToVendor(curr.id, '', today);
        
        let total_bought = await purchaseDetailsHelper.getTotalAmountFromVendor(curr.id);
        let balance = total_bought - total_paid;
        curr.total_paid = total_paid.toLocaleString()
        curr.total_bought = total_bought.toLocaleString();
        curr.balance = balance.toLocaleString()
        }
         

        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._save= async(_data) => {
    try {
        let data = helper.prep_data(_data);
        //    data.created_by = _data.userid;
        let id = _data.id == undefined ? null : _data.id;
        if (id == null) {
            id = await helper.insert(data, helper.table_name);
            await activities.log(_data.userid, `"added a new vendor: ${_data.name}"`, "'Vendors'")

        }
        else {
            await helper.update(data, ` id = ${id}`, helper.table_name);
            await activities.log(_data.userid, `"updated vendor: ${_data.name}"`, "'Vendors'")
        }

        return { status: id, data: null }
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        throw new Error(error);
    }

};

exports._delete= async(_data) => {
    try {

        let id = _data.id;
        let name = _data.name;
        await helper.delete(` id = ${id}`, helper.table_name);
        await activities.log(_data.userid, `'deleted vendor: ${name}'`, "'Vendors'")



        return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        throw new Error(error);
    }

};



exports._findById= async(_data) => {
    try {
        let id = _data.id;
        let today = helper.getToday()
        let object = await helper.getItem(`id = ${id} `, helper.table_name);
        let total_paid = await paymentHelper.getTotalPaidToVendor(id, '', today);
        
        let total_bought = await purchaseDetailsHelper.getTotalAmountFromVendor(id);
        let balance = total_bought - total_paid;
        object.total_paid = total_paid.toLocaleString()
        object.total_bought = total_bought.toLocaleString();
        object.balance = balance.toLocaleString()


        return {
            status: '1',
            data: object
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};

