

let adminClass = require('../helpers/adminHelper');
let adminHelper = new adminClass();

let customerClass = require('../helpers/customerHelper');
let helper = new customerClass();

const SaleClass = require('../helpers/saleHelper.js');
const saleHelper = new SaleClass();

const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();
const log = require('electron-log');

exports._getList= async (_data) => {
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    try {
        let objects = await helper.getAll(helper.table_name, limit, offset);
        const IncomingPaymentClass = require('../helpers/incomingPaymentHelper');
        const incomingHelper = new IncomingPaymentClass();
        for(var i = 0; i < objects.length; i++){
            let object = objects[i];
            let total_credit = await saleHelper.getTotalCreditSales('','', object.id);
            object.total_credit = total_credit.toLocaleString()
           
            let paid = await incomingHelper.getTotalPaid(object.id);
            object.total_paid = paid.toLocaleString();

            let  balance = total_credit - paid;
            object.balance = balance.toLocaleString()
        }
        
       return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};

exports._search= async (_data) => {
    let param = _data.param;
    try {
        let objects = await helper.search(param);
        const IncomingPaymentClass = require('../helpers/incomingPaymentHelper');
        const incomingHelper = new IncomingPaymentClass();
        for(var i = 0; i < objects.length; i++){
            let object = objects[i];
            let total_credit = await saleHelper.getTotalCreditSales('','', object.id);
            object.total_credit = total_credit.toLocaleString()
           
            let paid = await incomingHelper.getTotalPaid(object.id);
            object.total_paid = paid.toLocaleString();

            let  balance = total_credit - paid;
            object.balance = balance.toLocaleString()
        }

       return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};

exports._save= async (_data) => {
    
    try {
        
        let data = helper.prep_data(_data);
        //    data.created_by = _data.userid;
        let id = _data.id == undefined ? null : _data.id;
        if (id == null) {
            id = await helper.insert(data, helper.table_name);
            await activities.log(_data.userid, `"added a new customer: ${_data.name}"`, "'Customers'")

        }
        else {
            await helper.update(data, ` id = ${id}`, helper.table_name);
            await activities.log(_data.userid, `"updated customer: ${_data.name}"`, "'Customers'")
        }

       return { status: id, data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};

exports._delete= async (_data) => {
    try {
        
        let id = _data.id;
        let name = _data.name;
        await helper.delete(` id = ${id}`, helper.table_name);
        await activities.log(_data.userid, `'deleted customer: ${name}'`, "'Customers'")



       return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};



exports._findById= async (_data) => {
    try {
        let id = _data.id;

        let object = await helper.getItem(`id = '${id}' `, helper.table_name);
        //get the total sales on credit
        //get the total paid
        let total_credit = await saleHelper.getTotalCreditSales('', '', id);
        object.total_credit = total_credit.toLocaleString()
        const IncomingPaymentClass = require('../helpers/incomingPaymentHelper');
        const incomingHelper = new IncomingPaymentClass();
        let paid = await incomingHelper.getTotalPaid(id);
        object.total_paid = paid.toLocaleString();
        let balance = total_credit - paid;
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

exports._saveDiagnostics= async (_data) => {
    try {
        let data = {
            customer: _data.customer,
            test: `"${_data.test}"`,
            data: `"${_data.data}"`,
            created_on: `"${_data.created_on}"`,
            comments: `"${_data.comments}"`
        };
        let customer_type = _data.customer_type
        //if its a new customer, the customer field will be undefined
        if (customer_type == 'new') {
            let c_data = helper.prep_data(_data);
            let customer_id = await helper.insert(c_data, helper.table_name);
            data.customer = customer_id;
        }

        //check if the test existed. if not, add it as a new one
        let test = _data.test.toUpperCase();
        let test_exists = await helper.getItem(` upper(test_name) = '${test}' `, helper.diagnostics_master_table_name);
        if (test_exists == null || test_exists == undefined) {
            await helper.insert({ test_name: `'${test}'`, parameters: "'value'", comments: "'not available'" }, helper.diagnostics_master_table_name)
        }
        //    data.created_by = _data.userid;
        let id = _data.id == undefined ? null : _data.id;
        if (id == null) {
            id = await helper.insert(data, helper.diagnostics_table_name);
            await activities.log(_data.userid, `"added a new customer diagnostics test result: ${_data.test}"`, "'Customers'")

        }
        else {
            await helper.update(data, ` id = ${id}`, helper.diagnostics_table_name);
            await activities.log(_data.userid, `"updated customer diagnostics test result: ${_data.test}"`, "'Customers'")
        }

       return { status: id, data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};

exports._findDiagnosticsById= async (_data) => {
    try {
        let id = _data.id;

        let object = await helper.getItem(`id = '${id}' `, helper.diagnostics_table_name);



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

exports._deleteDiagnostics= async (_data) => {
    try {

        let id = _data.id;
        await helper.delete(` id in (${id})`, helper.diagnostics_table_name);
        await activities.log(_data.userid, `'deleted customer diagnostic result'`, "'Customers'")



       return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};

exports._getCustomerDiagnosticsList= async (_data) => {
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    let customer = _data.customer;
    try {
        let objects = await helper.getMany(` customer = ${customer} `, helper.diagnostics_table_name, limit, offset);


       return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};

exports._getDiagnosticsList= async (_data) => {
    try {
        let objects = await helper.getAll(helper.diagnostics_master_table_name);


       return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._findDiagnosticsBetweenDates= async (_data) => {
    try {

        let start = _data.start_date == undefined ? helper.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? helper.getToday() : _data.end_date;
        let customer = _data.customer;
        let objects = null;
        let where = [` created_on >= '${start} 00:00:01' and created_on <= '${end} 23:59:59' `]
        if (customer != undefined) {
            objects = where.push(` customer = ${customer} `)
        }
        // if (customer != undefined) {
        //     objects = where.push(` test = '${test}' `)
        // }

        objects = await helper.getMany(where.join(" and "), helper.diagnostics_table_name);
        for (var i = 0; i < objects.length; i++) {
            let customer = await helper.getItem(`id = '${objects[i].customer}'`, helper.table_name);
            objects[i].customer_name = customer.name;
            objects[i].phone = customer.phone
        }


       return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};

exports._addRefill= async (_data) => {
    let refillClass = require('../helpers/refillsHelper');
    let refill_helper = new refillClass();
    try {
        let data = refill_helper.prep_data(_data);
        let customer_phone = _data.customer_phone;
        //get the customer who matches the name
        let cust_details = await helper.getItem(` phone = "${customer_phone}" `, helper.table_name);
        if (cust_details == null) {
            //save the person
            data.customer_id = await helper.insert({
                name: `"${_data.customer_name}"`,
                phone: `"${_data.customer_phone}"`
            }, helper.table_name)
        }
        else {
            data.customer_id = cust_details.id;
        }

        await helper.insert(data, refill_helper.table_name);
        await activities.log(_data.userid, `"added a new customer refill: ${_data.customer_name}"`, "'Customers'")


       return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};



exports._deleteRefill= async (_data) => {
    try {
        let refillClass = require('../helpers/refillsHelper');
        let refill_helper = new refillClass();
        let id = _data.id;
        await helper.delete(` id in (${id})`, refill_helper.table_name);
        await activities.log(_data.userid, `'deleted customer refill'`, "'Customers'")



       return { status: '1', data: null }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};

exports._getCustomerRefillList= async (_data) => {
    let refillClass = require('../helpers/refillsHelper');
    let refill_helper = new refillClass();
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    let customer = _data.customer;
    try {
        let objects = await refill_helper.getMany(` customer_id = ${customer} `,
            refill_helper.table_name, limit, offset);
        for (var i = 0; i < objects.length; i++) {
            let customer = await helper.getItem(`id = '${objects[i].customer_id}'`, helper.table_name);
            objects[i].customer_name = customer.name;
            objects[i].phone = customer.phone
        }


       return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};

exports._getRefillList= async (_data) => {
    let refillClass = require('../helpers/refillsHelper');
    let today = helper.getToday()
    let refill_helper = new refillClass();
    try {
        let only_active = _data.only_active == undefined ? null : _data.only_active;
        let objects = await helper.getAll(refill_helper.table_name);

        if (only_active == "yes") {
            objects = await helper.getMany(` end_date >= '${today}' `, refill_helper.table_name);
        }
        for (var i = 0; i < objects.length; i++) {
            let customer = await helper.getItem(`id = '${objects[i].customer_id}'`, helper.table_name);
            objects[i].customer_name = customer.name;
            objects[i].phone = customer.phone
        }


       return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        //console.l.log(error)
        log.error(error)
        throw new Error(error);
    }

};


exports._findRefillBetweenDates= async (_data) => {
    try {
        let refillClass = require('../helpers/refillsHelper');
        let refill_helper = new refillClass();
        let start = _data.start_date == undefined ? helper.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? helper.getToday() : _data.end_date;
        let customer = _data.customer;
        let objects = null;
        let where = [` end_date >= '${start} ' and end_date <= '${end} ' `]
        if (customer != undefined) {
            where.push(` customer_id = ${customer} `)
        }
        // if (customer != undefined) {
        //     objects = where.push(` test = '${test}' `)
        // }

        objects = await refill_helper.getMany(where.join(" and "), refill_helper.table_name);
        for (var i = 0; i < objects.length; i++) {
            let customer = await helper.getItem(`id = '${objects[i].customer_id}'`, helper.table_name);
            objects[i].customer_name = customer.name;
            objects[i].phone = customer.phone
        }


       return {
            status: '1',
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};


exports._countRefillBetweenDates= async (_data) => {
    try {
        let refillClass = require('../helpers/refillsHelper');
        let refill_helper = new refillClass();
        let start = _data.start_date == undefined ? helper.getToday() : _data.start_date;
        let end = _data.end_date == undefined ? helper.getToday() : _data.end_date;
        let customer = _data.customer;
        let objects = null;
        let where = [` end_date >= '${start} ' and end_date <= '${end} ' `]
        if (customer != undefined) {
            where.push(` customer_id = ${customer} `)
        }
        // if (customer != undefined) {
        //     objects = where.push(` test = '${test}' `)
        // }

        objects = await refill_helper.getMany(where.join(" and "), refill_helper.table_name);
        // for (var i = 0; i < objects.length; i++) {
        //     let customer = await helper.getItem(`id = ${objects[i].customer_id}`, helper.table_name);
        //     objects[i].customer_name = customer.name;
        //     objects[i].phone = customer.phone
        // }


       return {
            status: '1',
            data: objects.length
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};


