const log = require('electron-log');
let constants = require('../constants')



const Helper = require('../helpers/productHelper.js');
const helper = new Helper();
const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();
let stockValueClass = require('../helpers/stockValueHelper')
let stockValueHelper = new stockValueClass();

let productBatchClass = require('../helpers/productBatchesHelper')
let productBatchHelper = new productBatchClass();

const DetailsHelper = require('../helpers/purchaseDetailsHelper.js');
const purchaseDetailsHelper = new DetailsHelper();

const SalesDetailsHelper = require('../helpers/salesDetailsHelper.js');
const salesDetailsHelper = new SalesDetailsHelper();

let vendorClass = require('../helpers/vendorHelper');
let vendorHelper = new vendorClass();

let adminClass = require('../helpers/adminHelper');
let adminHelper = new adminClass();
let last_six_months = helper.addMonthsToDate(-6);
let today = helper.getToday();
exports.get_list_function = async (_data) => {
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    try {



        // let objects = await helper.getAll(helper.table_name, limit, offset);
        // let this_month = helper.setDates("this_month")
        // let last_month = helper.setDates("last_month")

        let today = helper.getToday()
        // console.log(last_six_months)
        // let q1 = helper.setDates("first_quarter")
        // let q2 = helper.setDates("second_quarter")
        // let q3 = helper.setDates("third_quarter")
        // let q4 = helper.setDates("fourth_quarter")
        let conditions = helper.prep_data(_data);
        let objects = null;
        let total = null;
        if (Object.keys(conditions).length === 0 && conditions.constructor === Object) {
            objects = await helper.getAll(helper.table_name, limit, offset);
            total = await helper.count('id', helper.table_name);
        }
        else {
            let where = [];
            for (let key in conditions) {
                where.push(` ${key} = ${conditions[key]} `)

            }
            objects = await helper.getMany(where.join(" and "), helper.table_name, limit, offset);
            total = await helper.countBy(where.join(" and "), helper.table_name);
        }


        for (var i = 0; i < objects.length; i++) {
            let obj = objects[i]
            obj.stock = obj.current_stock;
            obj.stock_value = (obj.current_stock * obj.price).toLocaleString()

            var stock = obj.current_stock;
            var min = obj.min_stock;
            var max = obj.max_stock;

            obj.expired = helper.dateDifference(obj.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.active_ingredients = [];

            //get preferred vendor
            try {
                let vendor = await vendorHelper.getItem(`id = ${obj.preferred_vendor}`, vendorHelper.table_name)
                obj.preferred_vendor_name = vendor.name;
            } catch (error) {
                obj.preferred_vendor_name = "n/a";

            }

            //get the vendor purchaesd from most
            try {
                let top_vendor = await purchaseDetailsHelper.getTopVendor(obj.id)
                obj.highest_vendor_name = top_vendor.name;
            } catch (error) {
                obj.highest_vendor_name = "n/a";

            }


            try {
                let totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id);
                obj.total_amount_sold = totals.amount;
                obj.total_quantity_sold = totals.total;
                let last_six_months_totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id, last_six_months, today);
                obj.six_months_amount_sold = last_six_months_totals.amount;
                obj.six_months_quantity_sold = last_six_months_totals.total;
                //preferred vendor

                // let avg = await salesDetailsHelper.getAverageMonthlyQuantities(obj.id);
                // let avg_sum = 0;
                // let count = 0;
                // if (avg != null) {
                //     avg.map(a => {
                //         avg_sum += a.average;
                //         count++;
                //     });
                //     obj.average_monthly = (avg_sum / count).toLocaleString();

                // }
            } catch (error) {
                log.error(error);
                obj.average_monthly = 0;
            }
            // obj.this_month_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, this_month.start_date, this_month.end_date)
            // obj.last_month_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, last_month.start_date, last_month.end_date)
            // obj.q1_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, q1.start_date, q1.end_date)
            // obj.q2_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, q2.start_date, q2.end_date)
            // obj.q3_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, q3.start_date, q3.end_date)
            // obj.q4_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, q4.start_date, q4.end_date)

        }
        return { status: '1', data: objects, total: total }
    } catch (error) {
        console.log(error)
        await helper.closeConnection();
        throw new Error(error);
    }

};

exports.get_products_with_stock_function = async (_data) => {
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    //get any conditions set in query
    try {
        let conditions = helper.prep_data(_data);
        let objects = null;
        let total = null;
        if (Object.keys(conditions).length === 0 && conditions.constructor === Object) {
            objects = await helper.getAll(helper.table_name, limit, offset);
            total = await helper.count('id', helper.table_name);
        }
        else {
            let where = [];
            for (let key in conditions) {
                where.push(` ${key} = '${conditions[key]}' `)

            }
            objects = await helper.getMany(where.join(" and "), helper.table_name, limit, offset);
            total = await helper.countBy(where.join(" and "), helper.table_name);
        }

        let last_update_time = await helper.getField('max(last_modified) as time', helper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var stock = obj.current_stock;
            var min = obj.min_stock;
            var max = obj.max_stock;

            obj.expired = helper.dateDifference(obj.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.stock = obj.current_stock
        }


        return { status: '1', data: objects, last_update_time: last_update_time.time, total: total }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error);
    }

};

exports.getUpdatedProducts = async (_data) => {
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    let time = _data.time;
    try {
        let objects = await helper.getMany(` last_modified > '${time}' `, helper.table_name, limit, offset);

        let total = await helper.count('id', helper.table_name, ` last_modified > '${time}' `);
        let last_update_time = await helper.getField('max(last_modified) as time', helper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var stock = obj.current_stock;
            var min = obj.min_stock;
            var max = obj.max_stock;

            obj.expired = helper.dateDifference(obj.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.stock = obj.current_stock
        }

        return { status: '1', data: objects, last_update_time: last_update_time.time, total }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error);
    }



};

exports.search_function = async (_data) => {
    const DetailsHelper = require('../helpers/salesDetailsHelper.js');
    const salesDetailsHelper = new DetailsHelper();
    let param = _data.param;
    let advanced = _data.advanced == undefined ? "no" : _data.advanced;
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    try {
        let objects = null;
        if (advanced == "yes") {
            //replace the texts with appropriate symbols
            let fields = _data.fields.split("|||");
            let values = _data.values.split("|||");
            let operators = _data.operators.split("|||");
            let conditions = [];
            for (var x = 0; x < fields.length; x++) {
                switch (operators[x]) {
                    case "Contains":
                        conditions.push(`${fields[x]} like '%${values[x]}%'`);
                        break;
                    case "Starts with":
                        conditions.push(`${fields[x]} like '${values[x]}%'`);
                        break;
                    case "Ends with":
                        conditions.push(`${fields[x]} like '%${values[x]}'`);
                        break;
                    case "Is exactly":
                        conditions.push(`${fields[x]} = '${values[x]}'`);
                        break;
                    case "Less Than":
                        conditions.push(`${fields[x]} < '${values[x]}'`);
                        break;
                    case "Greater Than":
                        conditions.push(`${fields[x]} > '${values[x]}'`);
                        break;
                    case "Less Or Equal":
                        conditions.push(`${fields[x]} <= '${values[x]}'`);
                        break;
                    case "Greater or Equal":
                        conditions.push(`${fields[x]} >= '${values[x]}'`);
                        break;
                    case "Not Equals":
                        conditions.push(`${fields[x]} != '${values[x]}'`);
                        break;
                    case "Equals":
                        conditions.push(`${fields[x]} = '${values[x]}'`);
                        break;
                    case "Does not contain":
                        conditions.push(`${fields[x]} not like '%${values[x]}%'`);
                        break;

                    default:
                        conditions.push(`${fields[x]} like '%${values[x]}%'`);
                        break;
                }
            }
            objects = await helper.getMany(conditions.join(" and "), helper.table_name, limit, offset)
        }
        else {
            objects = await helper.search(param, limit, offset);

        }
        //also search the batches for matching records
        // let other_batches = await productBatchHelper.getDistinct("product", `barcode like "%${param}%"`, offset);

        //check
        // let this_month = helper.setDates("this_month")
        // let last_month = helper.setDates("last_month")
        // let q1 = helper.setDates("first_quarter")
        // let q2 = helper.setDates("second_quarter")
        // let q3 = helper.setDates("third_quarter")
        // let q4 = helper.setDates("fourth_quarter")
        let ids = []//the ids collected so far from products
        objects.map(obj => {
            ids.push(obj.id)
        })
        //gte items from the batches and if already not in the objects, add them
        // other_batches.map(async ob => {
        //     if(ids.indexOf(ob.id) != -1){
        //         let pdt = await helper.getItem(`id = ${ob.id}`);
        //         objects.push(pdt)
        //     }
        // })
        let last_six_months = helper.addMonthsToDate(-6);
        let today = helper.getToday()
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var stock = obj.current_stock;
            var min = obj.min_stock;
            var max = obj.max_stock;

            obj.expired = helper.dateDifference(obj.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.stock = obj.current_stock;
            obj.active_ingredients = [];
            //average per month over last 3 months
            //average per month over last 6 months
            try {
                let vendor = await vendorHelper.getItem(`id = ${obj.preferred_vendor}`, vendorHelper.table_name)
                obj.preferred_vendor_name = vendor.name;
            } catch (error) {
                obj.preferred_vendor_name = "n/a";

            }

            //get the vendor purchaesd from most
            try {
                let top_vendor = await purchaseDetailsHelper.getTopVendor(obj.id)
                obj.highest_vendor_name = top_vendor.name;
            } catch (error) {
                obj.highest_vendor_name = "n/a";

            }
            try {

                let totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id);
                obj.total_amount_sold = totals.amount;
                obj.total_quantity_sold = totals.total;
                let last_six_months_totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id, last_six_months, today);
                obj.six_months_amount_sold = last_six_months_totals.amount;
                obj.six_months_quantity_sold = last_six_months_totals.total;



                // let avg = await salesDetailsHelper.getAverageMonthlyQuantities(obj.id);
                // let avg_sum = 0;
                // let count = 0;
                // if (avg != null) {
                //     avg.map(a => {
                //         avg_sum += a.average;
                //         count++;
                //     });
                //     obj.average_monthly = (avg_sum / count).toLocaleString();

                // }
            } catch (error) {
                log.error(error);
                obj.average_monthly = 0;
            }

            // obj.this_month_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, this_month.start_date, this_month.end_date)
            // obj.last_month_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, last_month.start_date, last_month.end_date)
            // obj.q1_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, q1.start_date, q1.end_date)
            // obj.q2_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, q2.start_date, q2.end_date)
            // obj.q3_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, q3.start_date, q3.end_date)
            // obj.q4_quantity = await salesDetailsHelper.getTotalQuantity(obj.id, q4.start_date, q4.end_date)


        }
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        log.error(error)
        throw new Error(error);
    }

};

/**
 * get the products in the products table that have the same description as the selected product id
 * @param {Object} _data the data being passed. must be a json object
 * @returns {Object} { status: '1', data: selected } 
 */
exports.get_related_products = async (_data) => {
    const DetailsHelper = require('../helpers/salesDetailsHelper.js');
    const salesDetailsHelper = new DetailsHelper();
    let id = _data.id;
    //get the description of the product
    let item = await helper.getItem(`id = ${id}`, helper.table_name);
    if (item.description == null || item.description == undefined || item.description == '') {
        return { status: '1', data: [] };
    }
    let offset = 0;
    let limit = 5;
    let description = item.description.toLowerCase();
    try {
        let objects = await helper.getMany(`lower(description) like '${description}' and current_stock > 0 order by expiry`, helper.table_name, limit, offset);
        let selected = []
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var stock = obj.current_stock;
            var min = obj.min_stock;
            var max = obj.max_stock;

            obj.expired = helper.dateDifference(obj.expiry) == 'before';
            obj.expiring_earlier = helper.dateDifference(obj.expiry, item.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.stock = obj.current_stock;
            obj.active_ingredients = [];
            if (!obj.out_of_stock && obj.expiring_earlier) {
                selected.push(obj)
            }
        }
        return { status: '1', data: selected }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        log.error(error)
        throw new Error(error);
    }



}
/**
 * 
 * @param {Object} _data 
 * @returns {Object} { status: '1', data: batches }
 */
exports.get_product_batches_function = async (_data) => {
    try {
        let id = _data.id
        let batches = await productBatchHelper.getMany(` product = ${id} and quantity - quantity_sold > 0`, productBatchHelper.table_name);
        return { status: '1', data: batches }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        log.error(error)
        throw new Error(error);
    }

};



exports.save_branch_details_function = async (_data) => {
    try {


        let stockClass = require('../helpers/stockAdjustmentHelper');
        let stockHelper = new stockClass();

        //                $parent_company_id = $this->getUserParentCompany($auth);
        //this is to edit the price and stuff for an individual branch
        let id = _data.id;
        //extract all the values for the necessary fields from the input
        let data = helper.prep_data(_data);
        //console.l.log(_data)
        data.last_modified = `'${helper.getToday('timestamp')}'`
        let name = _data.name;
        let change_stock = _data.change_stock;
        let change_unit = _data.change_unit;
        let new_unit = _data.new_unit;
        let barcode = _data.barcode;
        //if no barcode was set, autocreate one
        

        if (id == undefined) {


            let productid = await helper.insert(data, helper.table_name);
            if(helper.isEmpty(barcode)){
                let padded = productid.toString().padStart(7, "0");
                let barcode = `"${padded}-${_data.name}"`;
                await helper.updateField('barcode',barcode,`id = ${productid}`, helper.table_name);
                // console.log(barcode);
            }

            let date = helper.getToday()
            let stock_data = {
                created_by: `'${_data.userid}'`, date: `'${date}'`, product: productid,
                quantity_counted: _data.stock, quantity_expected: 0,
                current_price: _data.price, cost_price: _data.cost_price
            };
            await stockHelper.insert(stock_data, stockHelper.table_name);

            await helper.refreshCurrentStock(productid)
            await stockValueHelper.updateStockValue();

            id = productid
            await activities.log(_data.userid, `"created a product: ${name}"`, `'Products'`)
        }
        else {
            if (change_stock == 'yes') {


                let date = helper.getToday()
                let stock_data = {
                    created_by: `'${_data.userid}'`, date: `'${date}'`, product: id,
                    quantity_counted: _data.stock, quantity_expected: 0,
                    current_price: _data.price, cost_price: _data.cost_price
                };
                await stockHelper.insert(stock_data, stockHelper.table_name);

                await helper.refreshCurrentStock(id)
                await stockValueHelper.updateStockValue();
            }
            if (change_unit == 'yes') {
                data.unit = `'${new_unit}'`
            }
            if(helper.isEmpty(barcode)){
                let padded = id.toString().padStart(7, "0");
                let barcode = `"${padded} - ${_data.name} - ${_data.price}"`;
                data.barcode = barcode;
                // console.log(barcode);
            }

            await helper.update(data, ` id = ${id}`, helper.table_name);
            await activities.log(_data.userid, `"updated a product: ${name}"`, `'Products'`)

        }

        //delete the active ingredietns and re-insert them
        // try {

        //     let ItemAiHelperClass = require("../helpers/ProductIngredientHelper");
        //     let itemAiHelper = new ItemAiHelperClass();
        //     let ais = _data.new_active_ingredients.split("|||");
        //     // //console.l.log(ais)
        //     await itemAiHelper.delete(`product = ${id}`, itemAiHelper.table_name)
        //     for (var x = 0; x < ais.length; x++) {
        //         await itemAiHelper.insert({ ingredient: ais[x], product: id }, itemAiHelper.table_name)
        //     }
        // } catch (error) {
        //     log.error(error)

        // }


        return { status: '1', id: id }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }





};



exports.mass_edit_function = async (_data) => {
    try {



        let id = _data.id;//comma-separated
        let field = _data.field;
        let value = _data.field == 'category' ||
            _data.field == 'description' ||
            _data.field == 'unit' ||
            _data.field == 'expiry_date' ? `'${_data.value}'` : _data.value;



        let where = ` id in (${id}) `
        await helper.updateField(field, value, where, helper.table_name);
        await activities.log(_data.userid, `"massed edited ${field} to ${value} "`, `'Products'`)

        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};


exports.delete_function = async (_data) => {


    try {


        let id = _data.id;//comma-separated

        let where = ` id in (${id}) `
        await helper.delete(where, helper.table_name);
        await activities.log(_data.userid, `"deleted a product edited  "`, `'Products'`)

        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.erase_function = async (_data) => {


    try {


        let id = _data.id;//comma-separated
        //this deletes every record of the product. stock, purchase, sale


        //lazy shortcut taken to avoid creating objects for each table
        await helper.delete(` product in (${id})`, 'sales_details')
        await helper.delete(` product in (${id})`, 'stock_adjustment')
        await helper.delete(` product in (${id})`, 'purchase_details')
        await helper.delete(` product in (${id})`, 'received_transfer_details')
        await helper.delete(` product in (${id})`, 'transfer_details')
        await helper.delete(` product_id in (${id})`, 'refills')
        await helper.delete(` product in (${id})`, 'stock_adjustment_pending')
        let where = ` id in (${id}) `
        await helper.delete(where, helper.table_name);
        await activities.log(_data.userid, `"deleted a product edited  "`, `'Products'`)

        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }

};

exports.soft_delete_function = async (_data) => {


    try {

        let id = _data.id;//comma-separated

        let where = ` id in (${id}) `;
        //set the status to 0
        await helper.updateField('status', 0, where, helper.table_name);
        await activities.log(_data.userid, `"deleted a product  "`, `'Products'`)

        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.restore_function = async (_data) => {


    try {


        let id = _data.id;//comma-separated

        let where = ` id in (${id}) `;
        //set the status to 0
        await helper.updateField('status', 1, where, helper.table_name);
        await activities.log(_data.userid, `"restored a product   "`, `'Products'`)

        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.find_by_id_function = async (_data) => {
    let id = _data.id;
    const DetailsHelper = require('../helpers/salesDetailsHelper.js');
    const salesDetailsHelper = new DetailsHelper();
    try {

        let where = ` id = ${id} `;
        let item = await helper.getItem(where, helper.table_name)
        item.stock = item.current_stock;
        item.out_of_stock = item.stock < 1;
        item.stock_value = (item.stock * item.price).toLocaleString()
        let ItemAiHelperClass = require("../helpers/ProductIngredientHelper");
        let itemAiHelper = new ItemAiHelperClass();

        let aiHelperClass = require("../helpers/activeIngredientHelper");
        let aiHelper = new aiHelperClass()

        let ais = await itemAiHelper.getMany(` product = ${id}`, itemAiHelper.table_name);
        if (ais != null) {
            for (var i = 0; i < ais.length; i++) {
                let det = await aiHelper.getItem(` id = ${ais[i].ingredient}`, aiHelper.table_name);
                ais[i].name = det == null ? "N/A" : det.name;
                ais[i].side_effect = det == null ? "N/A" : det.side_effect;
                ais[i].caution = det == null ? "N/A" : det.caution;
                ais[i].pregnancy = det == null ? "N/A" : det.pregnancy;
                ais[i].indication = det == null ? "N/A" : det.indication;
            }
        }
        let this_month = helper.setDates("this_month")
        let last_month = helper.setDates("last_month")
        // let q1 = helper.setDates("first_quarter")
        // let q2 = helper.setDates("second_quarter")
        // let q3 = helper.setDates("third_quarter")
        // let q4 = helper.setDates("fourth_quarter")

        item.active_ingredients = ais == null ? [] : ais;
        let this_month_quantity = await salesDetailsHelper.getTotalQuantityAndAmount(id, this_month.start_date, this_month.end_date)
        let last_month_quantity = await salesDetailsHelper.getTotalQuantityAndAmount(id, last_month.start_date, last_month.end_date)
        item.this_month_quantity = this_month_quantity.total;
        item.this_month_amount = this_month_quantity.amount;
        item.last_month_quantity = last_month_quantity.total;
        item.last_month_amount = last_month_quantity.amount;
        try {
            let vendor = await vendorHelper.getItem(`id = ${item.preferred_vendor}`, vendorHelper.table_name)
            item.preferred_vendor_name = vendor.name;
        } catch (error) {
            item.preferred_vendor_name = "n/a";
            // console.log(error)

        }

        //get the vendor purchaesd from most
        try {
            let top_vendor = await purchaseDetailsHelper.getTopVendor(item.id)
            item.highest_vendor_name = top_vendor.name;
        } catch (error) {
            item.highest_vendor_name = "n/a";
            // console.log(error)
        }


        //get the different batches available
        item.batches = await productBatchHelper.getMany(` product = ${id}`, productBatchHelper.table_name);

        // item.q1_quantity = await salesDetailsHelper.getTotalQuantity(id, q1.start_date, q1.end_date)
        // item.q2_quantity = await salesDetailsHelper.getTotalQuantity(id, q2.start_date, q2.end_date)
        // item.q3_quantity = await salesDetailsHelper.getTotalQuantity(id, q3.start_date, q3.end_date)
        // item.q4_quantity = await salesDetailsHelper.getTotalQuantity(id, q4.start_date, q4.end_date)


        return { status: '1', data: item }
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        throw new Error(error);
    }
};

exports.get_stock_function = async (_data) => {
    let id = _data.id;
    try {
        let count = await helper.calculateCurrentStock(id);
        // //console.l.log(count)
        return { status: '1', data: count }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }
};

exports.get_active_ingredients_function = async (_data) => {
    let id = _data.id;
    try {
        let ItemAiHelperClass = require("../helpers/ProductIngredientHelper");
        let itemAiHelper = new ItemAiHelperClass();

        let aiHelperClass = require("../helpers/activeIngredientHelper");
        let aiHelper = new aiHelperClass()

        let ais = await itemAiHelper.getMany(` product = ${id}`, itemAiHelper.table_name);
        if (ais != null) {
            for (var i = 0; i < ais.length; i++) {
                let det = await aiHelper.getItem(` id = ${ais[i].ingredient}`, aiHelper.table_name);
                ais[i].name = det == null ? "N/A" : det.name;
                ais[i].indication = det == null ? "N/A" : det.indication;
                ais[i].side_effect = det == null ? "N/A" : det.side_effect;
                ais[i].pregnancy = det == null ? "N/A" : det.pregnancy;
                ais[i].caution = det == null ? "N/A" : det.caution;

            }
        }
        let active_ingredients = ais == null ? [] : ais;


        return { status: '1', data: active_ingredients, id: id }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }
};


exports.get_category_counts_function = async (_data) => {
    try {
        let data = await helper.getCountsByField('category', helper.table_name);

        return { status: '1', data: data }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }
};

exports.create_stock_adjustmentSession_function = async (_data) => {
    try {


        let stockClass = require('../helpers/stockAdjustmentHelper');
        let stockHelper = new stockClass();
        let date = _data.date == undefined ? helper.getToday() : _data.date;
        let created_on = _data.created_on == undefined ? helper.getToday('timestamp') : _data.created_on;
        //set the status of all the others to closed
        await stockHelper.updateField('status', `'closed'`, ` id > 1 `, stockHelper.sessions_table_name)

        let data = { created_by: `'${_data.userid}'`, created_on: `'${created_on}'`, date: `'${date}'` };
        let id = await stockHelper.insert(data, stockHelper.sessions_table_name);
        let code = id.toString().padStart(5, '0');
        await stockHelper.updateField('code', `'${code}'`, ` id = ${id} `, stockHelper.sessions_table_name)
        return { status: '1', data: code }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }
};


///get the code that's still open. if there's none, create one
exports.get_latest_session_function = async (_data) => {
    try {


        let stockClass = require('../helpers/stockAdjustmentHelper');

        let stockHelper = new stockClass();

        await stockHelper.getConnection();
        let where = ` status = 'in_progress' and id = (select max(id) from ${stockHelper.sessions_table_name})`;
        let item = await stockHelper.getItem(where, stockHelper.sessions_table_name)
        if (item != null && item != undefined) {
            return { status: '1', data: item }
        }
        else {
            let date = helper.getToday();
            let created_on = helper.getToday('timestamp');

            let data = { created_by: `'${_data.userid}'`, created_on: `'${created_on}'`, date: `'${date}'` };
            let id = await stockHelper.insert(data, stockHelper.sessions_table_name);
            let code = id.toString().padStart(5, '0');
            await stockHelper.updateField('code', `'${code}'`, ` id = ${id} `, stockHelper.sessions_table_name)
            data.code = code;

            return { status: '1', data: data }
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error)
        throw new Error(error);
    }
};

exports.save_stock_adjustment_function = async (_data) => {
    let stockClass = require('../helpers/stockAdjustmentHelper');
    let stockHelper = new stockClass();

    let stockPendingClass = require('../helpers/stockAdjustmentPendingHelper');
    let stockPendingHelper = new stockPendingClass();
    try {

        let date = _data.date == undefined ? helper.getToday() : _data.date;
        let created_on = _data.created_on == undefined ? helper.getToday('timestamp') : _data.created_on;


        let products = _data.products.split("||");
        let product_names = _data.product_names.split("||");
        let cost_prices = _data.cost_prices.split("||");
        let quantities_expected = _data.quantities_expected.split("||");
        let quantities_counted = _data.quantities_counted.split("||");
        let sizes = _data.sizes.split("||");
        let expiries = _data.expiries.split("||");
        let categories = _data.categories.split("||");
        let prices = _data.prices.split("||");
        let damaged = _data.quantities_damaged == undefined ? [] : _data.quantities_damaged.split("||")
        let expired = _data.quantities_expired == undefined ? [] : _data.quantities_expired.split("||")
        let units = _data.units.split("||")
        let shelves = _data.shelves.split("||")

        let code = _data.code;

        //delete existing with the code and replace with incoming
        // await stockHelper.delete(` code = '${code}' `, stockHelper.table_name);
        let sql = "BEGIN TRANSACTION; ";

        await stockHelper.getConnection();
        // stockHelper.connection.run("BEGIN TRANSACTION");
        let objects = [];
        for (let i = 0; i < products.length; i++) {
            let data = stockHelper.prep_data(_data);
            // //console.l.log(data.code)

            data.created_by = _data.userid
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.product = products[i];
            // //console.l.log('i=' + i + 'product ' + products[i])
            data.cost_price = cost_prices[i] == undefined || cost_prices[i] == null || cost_prices[i] == '' ? `''` : cost_prices[i];
            data.quantity_expected = quantities_expected[i];
            data.quantity_counted = quantities_counted[i];
            data.size = sizes[i] == undefined ? `''` : `'${sizes[i]}'`;
            data.expiry = expiries[i] == undefined ? `''` : `'${expiries[i]}'`;
            data.category = categories[i] == undefined ? `''` : `'${categories[i]}'`;
            data.current_price = prices[i];
            data.quantity_expired = expired[i] == undefined || expired[i] == null || expired[i] == '' ? 0 : expired[i];
            data.quantity_damaged = damaged[i] == undefined || damaged[i] == null || damaged[i] == '' ? 0 : damaged[i];


            //check if the item exists first
            var exists = await helper.getItem(`id = '${products[i]}' `, helper.table_name);
            // //console.l.log(exists)
            if (exists == undefined || exists == null) {
                // //console.l.log(` ${product_names[i]} ${products[i]} new`)
                //not found. create new item
                let new_product = await helper.insert(
                    {
                        name: `"${product_names[i]}"`,
                        price: prices[i],
                        size: data.size,
                        cost_price: cost_prices[i],
                        expiry: `"${expiries[i]}"`,
                        category: `"${categories[i]}"`,
                        current_stock: quantities_counted[i],
                        unit: `"${units[i]}"`,
                        shelf: `"${shelves[i]}"`
                    },
                    helper.table_name
                );
                // //console.l.log(` ${product_names[i]} ${products[i]} new - ${new_product}`)
                data.product = new_product;
            }
            else {
                //update the price and unit and stuff
                let product_update_data = {
                    cost_price: data.cost_price,
                    price: data.current_price,
                    expiry: data.expiry,
                    category: data.category,
                    current_stock: data.quantity_counted,
                    size: data.size,
                    unit: `"${units[i]}"`,
                    shelf: `"${shelves[i]}"`
                }
                sql += stockHelper.generateUpdateQuery(product_update_data, ` id = ${products[i]} `, helper.table_name);

            }


            objects.push(data);
        }
        // //console.l.log(objects)


        sql += `delete from ${stockHelper.table_name} where code = '${code}'; `;
        sql += `delete from ${stockPendingHelper.table_name} where code = '${code}'; `;

        sql += `update ${stockHelper.sessions_table_name} set status = 'closed' where code = '${code}'; `;
        sql += stockHelper.generateInsertManyQuery(stockHelper.fields, objects, stockHelper.table_name);
        sql += "COMMIT;"
        // //console.l.log(sql)
        await stockHelper.connection.exec(sql);

        // for (var x = 0; x < products.length; x++) {

        //     let pid = products[x];
        //     await helper.refreshCurrentStock(pid)
        // }
        await stockValueHelper.updateStockValue();
        activities.log(_data.userid, `'added new stock adjustment'`, `'Products'`)
        // stockHelper.connection.run("COMMIT");
        // stockHelper.connection.close().then(succ => { }, err => { })
        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        //   try {
        //     await stockHelper.connection.run("ROLL BACK;");
        //     stockHelper.connection.close().then(succ => {}, err => {})
        //   } catch (error) { await helper.closeConnection();
        //       log.error(error);
        //   }



        console.log(error)
        throw new Error(error);
    }
};

exports.save_stock_adjustment_to_pending_function = async (_data) => {
    let stockClass = require('../helpers/stockAdjustmentPendingHelper');
    let stockHelper = new stockClass();
    try {


        let date = _data.date == undefined ? helper.getToday() : _data.date;
        let created_on = _data.created_on == undefined ? helper.getToday('timestamp') : _data.created_on;


        let products = _data.products.split("||");
        let product_names = _data.product_names.split("||");
        let cost_prices = _data.cost_prices.split("||");
        let quantities_expected = _data.quantities_expected.split("||");
        let quantities_counted = _data.quantities_counted.split("||");
        let sizes = _data.sizes.split("||");
        let expiries = _data.expiries.split("||");
        let categories = _data.categories.split("||");
        let prices = _data.prices.split("||");
        let code = _data.code;
        let damaged = _data.quantities_damaged.split("||")
        let expired = _data.quantities_expired.split("||")
        let units = _data.units.split("||")
        let shelves = _data.shelves.split("||")
        //delete existing with the code and replace with incoming
        // await stockHelper.delete(` code = '${code}' `, stockHelper.table_name);
        let sql = "BEGIN TRANSACTION; ";

        await stockHelper.getConnection();
        // stockHelper.connection.run("BEGIN TRANSACTION");
        let objects = [];
        for (let i = 0; i < products.length; i++) {
            let data = stockHelper.prep_data(_data);
            // //console.l.log(data.code)

            data.created_by = _data.userid
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.product = products[i];
            // //console.l.log('i=' + i + 'product ' + products[i])
            data.cost_price = cost_prices[i] == undefined || cost_prices[i] == null || cost_prices[i] == '' ? `''` : cost_prices[i];
            data.quantity_expected = quantities_expected[i];
            data.quantity_counted = quantities_counted[i];
            data.size = sizes[i] == undefined ? `''` : `"${sizes[i]}"`;
            data.expiry = expiries[i] == undefined ? `''` : `"${expiries[i]}"`;
            data.category = categories[i] == undefined ? `''` : `"${categories[i]}"`;
            data.current_price = prices[i];
            data.quantity_expired = expired[i] == undefined || expired[i] == null || expired[i] == '' ? 0 : expired[i];
            data.quantity_damaged = damaged[i] == undefined || damaged[i] == null || damaged[i] == '' ? 0 : damaged[i];
            data.unit = units[i] == undefined || units[i] == null ? `''` : `"${units[i]}"`;
            data.shelf = shelves[i] == undefined || shelves[i] == null ? `''` : `"${shelves[i]}"`;

            //check if the item exists first
            var exists = await helper.getItem(`id = ${products[i]}`, helper.table_name);
            // //console.l.log(exists)
            if (exists == undefined || exists == null) {
                // //console.l.log(` ${product_names[i]} ${products[i]} new`)
                //not found. create new item
                let new_product = await helper.insert(
                    {
                        name: `"${product_names[i]}"`,
                        price: prices[i],
                        cost_price: cost_prices[i],
                        expiry: `"${expiries[i]}"`,
                        category: `"${categories[i]}"`,
                        shelf: `"${shelves[i]}"`,
                        unit: `"${units[i]}"`,
                        current_stock: quantities_counted[i]
                    },
                    helper.table_name
                );
                // //console.l.log(` ${product_names[i]} ${products[i]} new - ${new_product}`)
                data.product = new_product;
            }
            else {
                //update the price and unit and stuff
                // let product_update_data = {
                //     cost_price: data.cost_price,
                //     price: data.current_price,
                //     expiry: data.expiry,
                //     category: data.category,
                //     current_stock: data.quantity_counted,
                //     size: data.size
                // }
                // sql += stockHelper.generateUpdateQuery(product_update_data, ` id = ${products[i]} `, helper.table_name);

            }


            objects.push(data);
        }
        // //console.l.log(objects)


        sql += `delete from ${stockHelper.table_name} where code = '${code}'; `;
        sql += stockHelper.generateInsertManyQuery(stockHelper.fields, objects, stockHelper.table_name);
        sql += "COMMIT;"
        // //console.l.log(sql)
        await stockHelper.connection.exec(sql);

        // for (var x = 0; x < products.length; x++) {

        //     let pid = products[x];
        //     await helper.refreshCurrentStock(pid)
        // }
        await stockValueHelper.updateStockValue();
        activities.log(_data.userid, `'added new stock adjustment pending authorization'`, `'Products'`)
        // stockHelper.connection.run("COMMIT");
        // stockHelper.connection.close().then(succ => { }, err => { })
        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        //   try {
        //     await stockHelper.connection.run("ROLL BACK;");
        //     stockHelper.connection.close().then(succ => {}, err => {})
        //   } catch (error) { await helper.closeConnection();
        //       log.error(error);
        //   }



        log.error(error);
        throw new Error(error);
    }
};



exports.save_single_stock_adjustment_function = async (_data) => {
    try {


        let stockClass = require('../helpers/stockAdjustmentHelper');
        let stockHelper = new stockClass();

        let date = _data.date == undefined ? helper.getToday() : _data.date;
        let created_on = _data.created_on == undefined ? helper.getToday('timestamp') : _data.created_on;
        let product_id = _data.product;
        let qtt = _data.quantity_counted;
        let name = _data.product_name;

        let data = stockHelper.prep_data(_data);
        data.created_on = created_on;
        data.date = date;
        await stockHelper.getConnection();
        let sql = "BEGIN TRANSACTION; ";
        sql += stockHelper.generateInsertQuery(data, stockHelper.table_name);
        sql += "COMMIT;"
        await stockHelper.connection.exec(sql);

        await helper.refreshCurrentStock(product_id);
        await stockValueHelper.updateStockValue();
        activities.log(_data.userid, `added new stock adjustment for ${name} pending approval. new quantity: ${qtt}`, 'Products')

        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        // stockHelper.connection.run("ROLL BACK");
        console.log(error)
        throw new Error(error);
    }

};

exports.save_pending_single_stock_adjustment_function = async (_data) => {
    try {

        let stockClass = require('../helpers/stockAdjustmentPendingHelper');
        let stockHelper = new stockClass();

        let date = _data.date == undefined ? helper.getToday() : _data.date;
        let created_on = _data.created_on == undefined ? helper.getToday('timestamp') : _data.created_on;
        let product_id = _data.product;
        let qtt = _data.quantity_counted;
        let name = _data.product_name;
        let code = _data.code;
        let data = stockHelper.prep_data(_data);
        data.created_on = `"${created_on}"`;
        data.date = `"${date}"`;
        await stockHelper.getConnection();
        let sql = "BEGIN TRANSACTION; ";
        sql += `delete from ${stockHelper.table_name} where code = '${code}' and product = ${product_id}; `;

        sql += stockHelper.generateInsertQuery(data, stockHelper.table_name);
        sql += "COMMIT;"
        await stockHelper.connection.exec(sql);

        // await helper.refreshCurrentStock(product_id)
        activities.log(_data.userid, `"added new stock adjustment for ${name} pending approval. new quantity: ${qtt}"`, '"Products"')

        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        // stockHelper.connection.run("ROLL BACK");
        log.error(error);
        throw new Error(error);
    }

};

///get the quantity if any previously entered for an item
exports.get_pending_stock_quantity_function = async (_data) => {
    try {
        let stockClass = require('../helpers/stockAdjustmentPendingHelper');
        let code = _data.code;
        let product = _data.product
        let stockHelper = new stockClass();


        let where = ` product = ${product} and code = '${code}' `;
        let item = await stockHelper.getItem(where, stockHelper.table_name)
        if (item != null && item != undefined) {
            return { status: '1', data: item }
        }
        else {
            return { status: '0', data: null }
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }
};


exports.get_stock_adjustment_sessions_function = async (_data) => {
    let year = _data.year == undefined ? helper.getThisYear() : _data.year;
    let stockClass = require('../helpers/stockAdjustmentHelper');
    let stockHelper = new stockClass();

    let adminClass = require('../helpers/adminHelper');
    let adminHelper = new adminClass();
    try {
        let objects = await stockHelper.getMany(` strftime('%Y', date) = '${year}' `, stockHelper.sessions_table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.created_by = await adminHelper.getUserName(obj.created_by);
            obj.total_difference = await stockHelper.getSessionTotalDifference(obj.code);
            obj.num_items = await stockHelper.getSessionNumItems(obj.code);

        }

        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error);
    }

};

exports.get_pending_stock_adjustment_sessions = async (_data) => {
    let year = _data.year == undefined ? helper.getThisYear() : _data.year;
    let stockClass = require('../helpers/stockAdjustmentHelper');
    let stockHelper = new stockClass();

    let adminClass = require('../helpers/adminHelper');
    let adminHelper = new adminClass();
    try {
        let objects = await stockHelper.getMany(`status = 'in_progress' and strftime('%Y', date) = '${year}' `, stockHelper.sessions_table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            obj.created_by = await adminHelper.getUserName(obj.created_by);
            obj.total_difference = await stockHelper.getSessionTotalDifference(obj.code);
            obj.num_items = await stockHelper.getSessionNumItems(obj.code);

        }

        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error);
    }

};


exports.get_stock_adjustments_between_dates_function = async (_data) => {
    try {


        let start = _data.start_date == undefined ? helper.getToday : _data.start_date;
        let end = _data.end_date == undefined ? helper.getToday : _data.end_date;


        let stockClass = require('../helpers/stockAdjustmentHelper');
        let stockHelper = new stockClass();


        let objects = await stockHelper.getMany(` date >= '${start}' and date <= '${end}' `, stockHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            let difference = obj.quantity_counted - obj.quantity_expected;
            let price = obj.current_price;
            let cost_price = obj.cost_price;
            let product = await helper.getItem(` id = ${obj.product}`, helper.table_name);

            obj.name = product.name;
            obj.difference = difference;
            obj.total_cost = difference * cost_price;
            obj.total = difference * price;

        }
        let num_excess = await stockHelper.getNumberPositiveByDates(start, end);
        let num_loss = await stockHelper.getNumberNegativeByDates(start, end);
        let num_neutral = await stockHelper.getNumberNeutralByDates(start, end);
        let total_excess = await stockHelper.getTotalPositiveByDates(start, end);
        let total_loss = await stockHelper.getTotalNegativeByDates(start, end);
        let total_difference = total_excess + total_loss

        return {
            status: '1',
            number_excess: num_excess,
            number_loss: num_loss,
            number_neutral: num_neutral,
            total_excess: total_excess,
            total_loss: total_loss,
            total_difference: total_difference,
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error);
    }

};

exports.get_stock_adjustments_by_code_function = async (_data) => {
    try {


        let code = _data.code

        let stockClass = require('../helpers/stockAdjustmentHelper');
        let stockHelper = new stockClass();


        let objects = await stockHelper.getMany(` code = '${code}'  `, stockHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            let difference = obj.quantity_counted - obj.quantity_expected;
            let price = obj.current_price;
            let cost_price = obj.cost_price;
            let product = await helper.getItem(` id = ${obj.product} `, helper.table_name);

            obj.name = product.name;
            obj.difference = difference;
            obj.total_cost = difference * cost_price;
            obj.total_damaged = (price * obj.quantity_damaged).toLocaleString()
            obj.total_expired = (price * obj.quantity_expired).toLocaleString()

            obj.total = (difference * price).toLocaleString();

        }
        let num_excess = await stockHelper.getNumberPositive(code);
        let num_loss = await stockHelper.getNumberNegative(code);
        let num_neutral = await stockHelper.getNumberNeutral(code);
        let total_excess = await stockHelper.getTotalPositive(code);
        let total_loss = await stockHelper.getTotalNegative(code);
        let total_expired = await stockHelper.getTotalExpired(code);
        let total_damaged = await stockHelper.getTotalDamage(code);

        let total_difference = total_excess + total_loss

        return {
            status: '1',
            number_excess: num_excess,
            number_loss: num_loss,
            number_neutral: num_neutral,
            total_excess: total_excess == null ? 0.00 : total_excess.toLocaleString(),
            total_loss: total_loss == null ? 0.00 : total_loss.toLocaleString(),
            total_difference: total_difference == null ? 0.00 : total_difference.toLocaleString(),
            total_expired: total_expired == null ? 0.00 : total_expired.toLocaleString(),
            total_damaged: total_damaged == null ? 0.00 : total_damaged.toLocaleString(),
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};


exports.get_pending_stock_adjustments_by_code_function = async (_data) => {
    try {


        let code = _data.code

        let stockClass = require('../helpers/stockAdjustmentPendingHelper');
        let stockHelper = new stockClass();


        let objects = await stockHelper.getMany(` code = '${code}'  `, stockHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            let difference = obj.quantity_counted - obj.quantity_expected;
            let price = obj.current_price;
            let cost_price = obj.cost_price;
            let product = await helper.getItem(` id = ${obj.product} `, helper.table_name);
            obj.total_damaged = (price * obj.quantity_damaged).toLocaleString()
            obj.total_expired = (price * obj.quantity_expired).toLocaleString()
            obj.name = product.name;
            obj.difference = difference;
            obj.total_cost = difference * cost_price;
            obj.total = (difference * price).toLocaleString();

        }
        let num_excess = await stockHelper.getNumberPositive(code);
        let num_loss = await stockHelper.getNumberNegative(code);
        let num_neutral = await stockHelper.getNumberNeutral(code);
        let total_excess = await stockHelper.getTotalPositive(code);
        let total_loss = await stockHelper.getTotalNegative(code);
        let total_expired = await stockHelper.getTotalExpired(code);
        let total_damaged = await stockHelper.getTotalDamage(code);
        let total_difference = total_excess + total_loss

        return {
            status: '1',
            number_excess: num_excess,
            number_loss: num_loss,
            number_neutral: num_neutral,
            total_excess: total_excess == null ? 0.00 : total_excess.toLocaleString(),
            total_loss: total_loss == null ? 0.00 : total_loss.toLocaleString(),
            total_difference: total_difference == null ? 0.00 : total_difference.toLocaleString(),
            total_expired: total_expired == null ? 0.00 : total_expired.toLocaleString(),
            total_damaged: total_damaged == null ? 0.00 : total_damaged.toLocaleString(),
            data: objects
        }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};




exports.get_stock_out_count_function = async (_data) => {
    try {
        let data = await helper.count('id', helper.table_name, ` current_stock < 1 `)

        return { status: '1', data: data }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.has_stock_out_function = async (_data) => {
    try {
        let q = await helper.count('id', helper.table_name, ` current_stock < 1 `)
        let data = q > 0;
        return { status: '1', data: data }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.get_stock_out_list_function = async (_data) => {
    try {
        let objects = await helper.getMany(` current_stock < 1 `, helper.table_name)
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var stock = obj.current_stock;
            var min = obj.min_stock;
            var max = obj.max_stock;

            obj.expired = helper.dateDifference(obj.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.stock = obj.current_stock;
            obj.stock_value = (obj.current_stock * obj.price).toLocaleString()


            //get preferred vendor
            try {
                let vendor = await vendorHelper.getItem(`id = ${obj.preferred_vendor}`, vendorHelper.table_name)
                obj.preferred_vendor_name = vendor.name;
            } catch (error) {
                obj.preferred_vendor_name = "n/a";

            }

            //get the vendor purchaesd from most
            try {
                let top_vendor = await purchaseDetailsHelper.getTopVendor(obj.id)
                obj.highest_vendor_name = top_vendor.name;
            } catch (error) {
                obj.highest_vendor_name = "n/a";

            }

            try {
                let totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id);
                obj.total_amount_sold = totals.amount;
                obj.total_quantity_sold = totals.total;
                let last_six_months_totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id, last_six_months, today);
                obj.six_months_amount_sold = last_six_months_totals.amount;
                obj.six_months_quantity_sold = last_six_months_totals.total;
                //preferred vendor

                // let avg = await salesDetailsHelper.getAverageMonthlyQuantities(obj.id);
                // let avg_sum = 0;
                // let count = 0;
                // if (avg != null) {
                //     avg.map(a => {
                //         avg_sum += a.average;
                //         count++;
                //     });
                //     obj.average_monthly = (avg_sum / count).toLocaleString();

                // }
            } catch (error) {
                log.error(error);
                obj.average_monthly = 0;
            }
        }
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.get_stock_near_min_count_function = async (_data) => {
    try {
        let data = await helper.count('id', helper.table_name, ` current_stock <= min_stock and current_stock > 0`)

        return { status: '1', data: data }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};


exports.has_stock_near_min_function = async (_data) => {
    try {
        let q = await helper.count('id', helper.table_name, ` current_stock  <= min_stock  and current_stock > 0 `)
        let data = q > 0;
        return { status: '1', data: data }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.get_stock_near_min_list_function = async (_data) => {
    try {
        let objects = await helper.getMany(` current_stock  <= min_stock  and current_stock > 0 `, helper.table_name)
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var stock = obj.current_stock;
            var min = obj.min_stock;
            var max = obj.max_stock;

            obj.expired = helper.dateDifference(obj.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.stock = obj.current_stock;
            obj.stock_value = (obj.current_stock * obj.price).toLocaleString()

            //get preferred vendor
            try {
                let vendor = await vendorHelper.getItem(`id = ${obj.preferred_vendor}`, vendorHelper.table_name)
                obj.preferred_vendor_name = vendor.name;
            } catch (error) {
                obj.preferred_vendor_name = "n/a";

            }

            //get the vendor purchaesd from most
            try {
                let top_vendor = await purchaseDetailsHelper.getTopVendor(obj.id)
                obj.highest_vendor_name = top_vendor.name;
            } catch (error) {
                obj.highest_vendor_name = "n/a";

            }

            try {
                let totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id);
                obj.total_amount_sold = totals.amount;
                obj.total_quantity_sold = totals.total;
                let last_six_months_totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id, last_six_months, today);
                obj.six_months_amount_sold = last_six_months_totals.amount;
                obj.six_months_quantity_sold = last_six_months_totals.total;
                //preferred vendor

                // let avg = await salesDetailsHelper.getAverageMonthlyQuantities(obj.id);
                // let avg_sum = 0;
                // let count = 0;
                // if (avg != null) {
                //     avg.map(a => {
                //         avg_sum += a.average;
                //         count++;
                //     });
                //     obj.average_monthly = (avg_sum / count).toLocaleString();

                // }
            } catch (error) {
                log.error(error);
                obj.average_monthly = 0;
            }
        }
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.get_stock_near_max_count_function = async (_data) => {
    try {
        let data = await helper.count('id', helper.table_name, ` current_stock >= max_stock `)

        return { status: '1', data: data }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};


exports.has_stock_near_max_function = async (_data) => {
    try {
        let q = await helper.count('id', helper.table_name, ` current_stock  >= max_stock  `)
        let data = q > 0;
        return { status: '1', data: data }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.get_stock_near_max_list_function = async (_data) => {
    try {
        let objects = await helper.getMany(` current_stock  >= max_stock `, helper.table_name)
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var stock = obj.current_stock;
            var min = obj.min_stock;
            var max = obj.max_stock;

            obj.expired = helper.dateDifference(obj.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.stock = obj.current_stock;
            obj.stock_value = (obj.current_stock * obj.price).toLocaleString()

            //get preferred vendor
            try {
                let vendor = await vendorHelper.getItem(`id = ${obj.preferred_vendor}`, vendorHelper.table_name)
                obj.preferred_vendor_name = vendor.name;
            } catch (error) {
                obj.preferred_vendor_name = "n/a";

            }

            //get the vendor purchaesd from most
            try {
                let top_vendor = await purchaseDetailsHelper.getTopVendor(obj.id)
                obj.highest_vendor_name = top_vendor.name;
            } catch (error) {
                obj.highest_vendor_name = "n/a";

            }

            try {
                let totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id);
                obj.total_amount_sold = totals.amount;
                obj.total_quantity_sold = totals.total;
                let last_six_months_totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id, last_six_months, today);
                obj.six_months_amount_sold = last_six_months_totals.amount;
                obj.six_months_quantity_sold = last_six_months_totals.total;
                //preferred vendor

                // let avg = await salesDetailsHelper.getAverageMonthlyQuantities(obj.id);
                // let avg_sum = 0;
                // let count = 0;
                // if (avg != null) {
                //     avg.map(a => {
                //         avg_sum += a.average;
                //         count++;
                //     });
                //     obj.average_monthly = (avg_sum / count).toLocaleString();

                // }
            } catch (error) {
                log.error(error);
                obj.average_monthly = 0;
            }
        }
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};


exports.get_stock_changes_function = async (_data) => {
    try {
        const salesClass = require('../helpers/salesDetailsHelper');
        let salesHelper = new salesClass();

        const mainSalesClass = require('../helpers/saleHelper');
        let mainSaleHelper = new mainSalesClass();

        const purchaseClass = require('../helpers/purchaseDetailsHelper');
        let purchaseHelper = new purchaseClass();
        const mainPurchaseClass = require('../helpers/purchaseHelper');
        let mainPurchaseHelper = new mainPurchaseClass();

        const rtClass = require('../helpers/receivedTransferDetailsHelper');
        let rtHelper = new rtClass();

        const transferClass = require('../helpers/transferDetailsHelper');
        let trHelper = new transferClass();

        let stockClass = require('../helpers/stockAdjustmentHelper');
        let stockHelper = new stockClass();
        let adminClass = require('../helpers/adminHelper');
        let adminHelper = new adminClass();


        let id = _data.product;
        let sales = await salesHelper.getMany(` product = ${id} `, salesHelper.table_name);
        let purchases = await purchaseHelper.getMany(` product = ${id} `, purchaseHelper.table_name);
        let received = await rtHelper.getMany(` product = ${id} `, rtHelper.table_name);
        let transfers = await trHelper.getMany(` product = ${id} `, trHelper.table_name);
        let adjustments = await stockHelper.getMany(` product = ${id} `, stockHelper.table_name);

        results = [];
        for (i = 0; i < adjustments.length; i++) {
            var obj = {};
            var a = adjustments[i];
            obj.date = a.created_on;
            obj.timestamp = Date.parse(a.created_on);
            obj.quantity = a.quantity_counted;
            obj.type = "stock_adjustment";
            obj.previous_stock = "";
            obj.new_stock = "";
            obj.invoice = a.code;
            obj.display_name = await adminHelper.getUserName(a.created_by);

            results.push(obj)
        }

        for (j = 0; j < transfers.length; j++) {
            var obj = {};
            var t = transfers[j];
            obj.date = t.created_on;
            obj.timestamp = Date.parse(t.created_on);
            obj.quantity = t.quantity;
            obj.type = "transfer_out";
            obj.previous_stock = "";
            obj.new_stock = "";
            obj.invoice = t.code;
            obj.display_name = await adminHelper.getUserName(t.created_by);

            results.push(obj)
        }

        for (k = 0; k < received.length; k++) {
            var obj = {};
            var r = received[k];
            obj.date = r.created_on;
            obj.timestamp = Date.parse(r.created_on);
            obj.quantity = r.quantity;
            obj.type = "transfer";
            obj.previous_stock = "";
            obj.new_stock = "";
            obj.invoice = r.code;
            obj.display_name = await adminHelper.getUserName(r.created_by);

            results.push(obj)
        }


        for (l = 0; l < sales.length; l++) {
            var obj = {};
            var s = sales[l];
            var sale = await mainSaleHelper.getItem(` code = '${s.code}'`, mainSaleHelper.table_name)

            obj.date = s.created_on;
            obj.timestamp = Date.parse(s.created_on);
            obj.quantity = s.quantity;
            obj.type = "sale";
            obj.previous_stock = "";
            obj.new_stock = "";
            obj.invoice = s.code;
            obj.display_name = await adminHelper.getUserName(sale.created_by);

            results.push(obj)
        }

        for (m = 0; m < purchases.length; m++) {
            var obj = {};
            var p = purchases[m];

            var purchase = await mainPurchaseHelper.getItem(` code = '${p.code}'`, mainPurchaseHelper.table_name)
            obj.date = p.created_on;
            obj.timestamp = Date.parse(p.created_on);
            obj.quantity = p.quantity;
            obj.type = "purchase";
            obj.previous_stock = "";
            obj.new_stock = "";
            obj.invoice = p.code;
            obj.display_name = await adminHelper.getUserName(purchase.created_by);

            results.push(obj)
        }

        helper.sortObjects(results, 'timestamp', 1)
        return { status: '1', data: results }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};




exports.get_expiry_count_function = async (_data) => {
    try {
        let defs = helper.setDates('this_month')
        let start = _data.start_date == undefined ? defs.start_date : _data.start_date;
        let end = _data.end_date == undefined ? defs.end_date : _data.end_date;


        let data = await helper.count('id', helper.table_name, ` expiry >= '${start}' and expiry <= '${end}' and current_stock > 0`)

        return { status: '1', data: data }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};


exports.has_expiry_function = async (_data) => {
    try {
        let defs = helper.setDates('this_month')
        let start = _data.start_date == undefined ? defs.start_date : _data.start_date;
        let end = _data.end_date == undefined ? defs.end_date : _data.end_date;


        let q = await helper.count('id', helper.table_name, ` expiry >= '${start}' and expiry <= '${end}'  and current_stock > 0 `)
        let data = q > 0;
        return { status: '1', data: data, count: q }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.get_expiry_list_function = async (_data) => {
    try {
        let defs = helper.setDates('this_month')
        let start = _data.start_date == undefined ? defs.start_date : _data.start_date;

        let end = _data.end_date == undefined ? defs.end_date : _data.end_date;
        let objects = null;
        if (start == 'all') {
            objects = await helper.getMany(`   expiry <= '${end}'  and current_stock > 0  `, helper.table_name)
        }
        else {
            objects = await helper.getMany(`  expiry >= '${start}' and expiry <= '${end}'  and current_stock > 0  `, helper.table_name)
        }
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var stock = obj.current_stock;
            var min = obj.min_stock;
            var max = obj.max_stock;

            obj.expired = helper.dateDifference(obj.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.stock = obj.current_stock;
            obj.stock_value = (obj.current_stock * obj.price).toLocaleString()

            //get preferred vendor
            try {
                let vendor = await vendorHelper.getItem(`id = ${obj.preferred_vendor}`, vendorHelper.table_name)
                obj.preferred_vendor_name = vendor.name;
            } catch (error) {
                obj.preferred_vendor_name = "n/a";

            }

            //get the vendor purchaesd from most
            try {
                let top_vendor = await purchaseDetailsHelper.getTopVendor(obj.id)
                obj.highest_vendor_name = top_vendor.name;
            } catch (error) {
                obj.highest_vendor_name = "n/a";

            }

            try {
                let totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id);
                obj.total_amount_sold = totals.amount;
                obj.total_quantity_sold = totals.total;

                let last_six_months_totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id, last_six_months, today);
                obj.six_months_amount_sold = last_six_months_totals.amount;
                obj.six_months_quantity_sold = last_six_months_totals.total;
                //preferred vendor

                // let avg = await salesDetailsHelper.getAverageMonthlyQuantities(obj.id);
                // let avg_sum = 0;
                // let count = 0;
                // if (avg != null) {
                //     avg.map(a => {
                //         avg_sum += a.average;
                //         count++;
                //     });
                //     obj.average_monthly = (avg_sum / count).toLocaleString();

                // }
            } catch (error) {
                log.error(error);
                obj.average_monthly = 0;
            }
        }
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.get_stock_value_list_function = async (_data) => {
    try {


        let defs = helper.setDates('this_month')
        let start = _data.start_date == undefined ? defs.start_date : _data.start_date;
        let end = _data.end_date == undefined ? defs.end_date : _data.end_date;
        let report_field = _data.report_field == undefined ? "cost_value" : _data.report_field;
        let range = helper.getDatesBetween(start, end);
        let last_value = 0;
        let objects = []

        const SalesDetailsHelper = require('../helpers/salesDetailsHelper.js');
        const salesDetailsHelper = new SalesDetailsHelper();

        const purchaseDetailsHelper = require("../helpers/purchaseDetailsHelper")
        const pDetailsHelper = new purchaseDetailsHelper()

        const tDetailsClass = require('../helpers/transferDetailsHelper.js');
        const tdetailsHelper = new tDetailsClass();
        const rDetailsClass = require('../helpers/receivedTransferDetailsHelper.js');
        const rdetailsHelper = new rDetailsClass();


        for (var i = 0; i < range.length; i++) {
            var curr = {}
            var date = range[i];
            curr.date = date;
            var closing_stock =
                report_field == "selling_value" ? await stockValueHelper.getStockValueByDate(date) : await stockValueHelper.getStockCostValueByDate(date);
            curr.closing_stock = closing_stock.toLocaleString();
            var opening_stock = 0;

            if (i == 0) {
                let yestee = helper.getYesterday(date)
                let yesterday_value =
                    report_field == "selling_value" ? await stockValueHelper.getStockValueByDate(yestee) : await stockValueHelper.getStockCostValueByDate(yestee);

                opening_stock = yesterday_value;
            }
            else {
                opening_stock = last_value;
            }
            last_value = closing_stock;
            curr.opening_stock = opening_stock.toLocaleString()
            curr.difference = (opening_stock - closing_stock).toLocaleString()
            let sales = report_field == "selling_value" ? await salesDetailsHelper.getTotalSales(date, date) : await salesDetailsHelper.getTotalSalesCost(date, date);
            let purchases = report_field == "selling_value" ? await pDetailsHelper.getTotalPurchaseSelling(date, date)
                : await pDetailsHelper.getTotalPurchase(date, date);
            let transfers_out = report_field == "selling_value" ? await tdetailsHelper.getTotal(date, date)
                : await tdetailsHelper.getTotalCost(date, date);
            let transfers = report_field == "selling_value" ? await rdetailsHelper.getTotal(date, date)
                : await rdetailsHelper.getTotalCost(date, date);

            curr.sales = sales.toLocaleString()
            curr.purchases = purchases.toLocaleString()
            curr.transfers_out = transfers_out.toLocaleString()
            curr.transfers = transfers.toLocaleString()


            objects.push(curr)
        }
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        // console.log(error)
        throw new Error(error);
    }

};


exports.get_expired_count_function = async (_data) => {
    try {
        let start = helper.getToday();

        let data = await helper.count('id', helper.table_name, ` expiry <= '${start}'  and current_stock > 0`)

        return { status: '1', data: data }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};


exports.has_expired_function = async (_data) => {
    try {
        let start = helper.getToday();

        let q = await helper.count('id', helper.table_name, ` expiry <= '${start}'   and current_stock > 0 `)
        let data = q > 0;
        return { status: '1', data: data, count: q }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.get_expired_list_function = async (_data) => {
    try {
        let start = helper.getToday();


        let objects = await helper.getMany(`  expiry <= '${start}'   and current_stock > 0  `, helper.table_name)
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var stock = obj.current_stock;
            var min = obj.min_stock;
            var max = obj.max_stock;

            obj.expired = helper.dateDifference(obj.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.stock = obj.current_stock
            obj.stock_value = (obj.current_stock * obj.price).toLocaleString()

            //get preferred vendor
            try {
                let vendor = await vendorHelper.getItem(`id = ${obj.preferred_vendor}`, vendorHelper.table_name)
                obj.preferred_vendor_name = vendor.name;
            } catch (error) {
                obj.preferred_vendor_name = "n/a";

            }

            //get the vendor purchaesd from most
            try {
                let top_vendor = await purchaseDetailsHelper.getTopVendor(obj.id)
                obj.highest_vendor_name = top_vendor.name;
            } catch (error) {
                obj.highest_vendor_name = "n/a";

            }

            try {
                let totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id);
                obj.total_amount_sold = totals.amount;
                obj.total_quantity_sold = totals.total;
                let last_six_months_totals = await salesDetailsHelper.getTotalQuantityAndAmount(obj.id, last_six_months, today);
                obj.six_months_amount_sold = last_six_months_totals.amount;
                obj.six_months_quantity_sold = last_six_months_totals.total;
                //preferred vendor

                // let avg = await salesDetailsHelper.getAverageMonthlyQuantities(obj.id);
                // let avg_sum = 0;
                // let count = 0;
                // if (avg != null) {
                //     avg.map(a => {
                //         avg_sum += a.average;
                //         count++;
                //     });
                //     obj.average_monthly = (avg_sum / count).toLocaleString();

                // }
            } catch (error) {
                log.error(error);
                obj.average_monthly = 0;
            }
        }
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};


exports.get_categories_function = async (_data) => {

    try {
        let objects = await helper.getDistinct('category', helper.table_name);
        let arr = [];
        objects.map(item => {
            arr.push(item.category)
        })
        return { status: '1', data: arr }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error);
    }


};

exports.get_functional_groups_function = async (_data) => {
    try {
        let objects = await helper.getDistinct('description', helper.table_name);
        let arr = [];
        objects.map(item => {
            arr.push(item.description)
        })
        //give some default values
        for (var x = 0; x < constants.default_functional_groups.length; x++) {
            if (arr.indexOf(constants.default_functional_groups[x]) == -1) {
                arr.push(constants.default_functional_groups[x])
            }
        }

        return { status: '1', data: arr }
    } catch (error) {
        log.error(error);
        await helper.closeConnection();
        throw new Error(error);
    }


};

exports.get_stock_values_function = async (_data) => {

    try {
        let cost_value = await stockValueHelper.getCostValue();
        let selling_value = await stockValueHelper.getSellingValue();

        return { status: '1', data: { cost_value: cost_value.toLocaleString(), selling_value: selling_value.toLocaleString() } }
    } catch (error) {
        await helper.closeConnection();
        throw new Error(error);
    }


};





/**
 * merge multiple items into 1, combining all their records in sales, 
 * purchases, stock adjustment, transfers
 */
exports.merge_function = async (_data) => {
    try {



        let master = _data.master; //the id of item to maintain
        let ids = _data.id.split(",");//comma-separated items to be 
        //absorbed
        let item = await helper.getItem(`id = ${master}`, helper.table_name);
        let queries = []
        for (var i = 0; i < ids.length; i++) {

            queries.push(helper.generateUpdateFieldQuery("product", `${master}`, ` product in (${ids[i]})`, 'sales_details'));

            queries.push(helper.generateUpdateFieldQuery("product", `${master}`, ` product in (${ids[i]})`, 'stock_adjustment'))
            queries.push(helper.generateUpdateFieldQuery("product", `${master}`, ` product  in ( ${ids[i]})`, 'purchase_details'))
            queries.push(helper.generateUpdateFieldQuery("product", `${master}`, ` product  in ( ${ids[i]})`, 'received_transfer_details'))
            queries.push(helper.generateUpdateFieldQuery("product", `${master}`, ` product  in ( ${ids[i]})`, 'transfer_details'))
            queries.push(helper.generateUpdateFieldQuery("product", `${master}`, ` product  in ( ${ids[i]})`, 'refills'))
            queries.push(helper.generateUpdateFieldQuery("product", `${master}`, ` product  in ( ${ids[i]})`, 'stock_adjustment_pending'));
            let where = ` id = ${ids[i]} `
            queries.push(helper.generateDeleteQuery(where, helper.table_name));
            await helper.runTransaction(queries)




        }


        await helper.refreshCurrentStock(master)
        await stockValueHelper.updateStockValue();
        await activities.log(_data.userid, `"merged items into  ${item.name} "`, `'Products'`);


        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        throw new Error(error);
    }
};




// exports.upload_function = async (_data) => {
//     try {
//         var file = _data.files.uploadfile
//         var xlsx = require('xlsx');
//         var workbook = xlsx.read(file.data);
//         var sheet_name_list = workbook.SheetNames;
//         // var csv = xlsx.utils.sheet_to_csv(workbook.Sheets[sheet_name_list[0]]);
//         var arr = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
//         var mother_array = []; //this will contain the sets of 100 arrays
//         for (var i = 0; i < arr.length; i++) {
//             var insert_array = []
//             //convert each line to an array of items, by the commas
//             var obj_array = arr[i];
//             ////console.l.log(obj_array);
//             var id = obj_array.id;
//             var name = obj_array.name;
//             var price = obj_array.price;
//             var cost_price = obj_array.cost_price == undefined ? 0 : obj_array.cost_price;
//             var category = obj_array.category == undefined ? "Miscellaneous" : obj_array.category;

//             var expiry = "";
//             if (obj_array.expiry == undefined) {
//                 expiry = "1970-01-01";
//             } else {
//                 let unix = Date.parse(obj_array.expiry);
//                 let mill = unix * 1000;
//                 const dateObject = new Date(unix)

//                 expiry = helper.formatDate(dateObject)
//             }
//             var expected = obj_array.expected == undefined ? 0 : obj_array.expected;
//             var counted = obj_array.counted == undefined ? 0 : obj_array.counted;
//             var shelf = obj_array.shelf == undefined ? "" : obj_array.shelf;
//             var unit = obj_array.unit == undefined ? "" : obj_array.unit;
//             if (name != undefined && name != null && name != "") {
//                 mother_array.push({
//                     id: id,
//                     name: name,
//                     price: price,
//                     cost_price: cost_price,
//                     category: category,
//                     expiry: expiry,
//                     quantity: counted,
//                     stock: expected,
//                     difference: counted - expected,
//                     shelf: shelf,
//                     unit: unit
//                 })
//             }



//         }//end for


//         return { status: '1', data: mother_array })
//     } catch (error) {
//         console.log(error)
//         throw new Error(error); 
//     }



// });

//add/remove an active ingredient
//get all active ingredients
exports.search_active_ingredients_function = async (_data) => {
    let aiHelperClass = require("../helpers/activeIngredientHelper");
    let aiHelper = new aiHelperClass();
    let param = _data.param;
    let offset = _data.offset == undefined ? 0 : _data.offset;
    let limit = _data.limit == undefined ? null : _data.limit;
    try {
        let objects = await aiHelper.search(param, limit, offset);

        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        log.error(error)
        throw new Error(error);
    }

};
exports.add_item_active_ingredient_function = async (_data) => {
    let ItemAiHelperClass = require("../helpers/ProductIngredientHelper");
    let itemAiHelper = new ItemAiHelperClass();
    let ai_name = _data.ai_name;
    let product_name = _data.name;

    let data = itemAiHelper.prep_data(_data)
    try {
        await helper.itemAiHelper(data, helper.table_name);



        await activities.log(_data.userid, `"added an active ingredient ${ai_name} to a product: ${product_name}"`, `'Products'`)


        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        log.error(error)
        throw new Error(error);
    }

};

exports.get_changed_stock_function = async (_data) => {
    try {
        let stockPendingClass = require('../helpers/stockAdjustmentPendingHelper');
        let stockPendingHelper = new stockPendingClass();

        let offset = _data.offset == undefined ? 0 : _data.offset;
        let limit = _data.limit == undefined ? null : _data.limit;

        //get all items in pending..., then check if they have been sold, purchased, transferred in or out
        const SalesDetailsHelper = require('../helpers/salesDetailsHelper.js');
        const salesDetailsHelper = new SalesDetailsHelper();

        const PurchaseDetailsHelper = require('../helpers/purchaseDetailsHelper.js');
        const purchaseDetailsHelper = new PurchaseDetailsHelper();

        const TransferDetailsHelper = require('../helpers/transferDetailsHelper.js');
        const transferDetailsHelper = new TransferDetailsHelper();

        const ReceivedTransferDetailsHelper = require('../helpers/receivedTransferDetailsHelper.js');
        const receivedTransferDetailsHelper = new ReceivedTransferDetailsHelper();



        let pending = await stockPendingHelper.getAll(stockPendingHelper.table_name, limit, offset)
        let total = await stockPendingHelper.count('id', stockPendingHelper.table_name);
        // //console.l.log(total)
        let objects = []
        for (var i = 0; i < pending.length; i++) {
            var product_id = pending[i].product
            let product = await helper.getItem(`id = ${product_id}`, helper.table_name)
            var date = pending[i].created_on
            pending[i].message = "";
            pending[i].name = product.name
            var overall_change = 0;
            //get the quantity sold since the stock was saved
            try {
                let quantity_sold = await salesDetailsHelper.getTotalQuantity(product_id, date);
                pending[i].sold = quantity_sold;
                overall_change -= quantity_sold
            } catch (error) {
                pending[i].sold = 0
                pending[i].message += "Error in sales quantity: " + error + "\n"
            }

            //get the quantity transferred out since the stock was saved
            try {
                let quantity_out = await transferDetailsHelper.getTotalQuantity(product_id, date);
                pending[i].out = quantity_out;
                overall_change -= quantity_out
            } catch (error) {
                pending[i].out = 0
                pending[i].message += "Error in transfer out quantity: " + error + "\n"
            }

            //get the quantity purchased since the stock was saved
            try {
                let quantity_purchased = await purchaseDetailsHelper.getTotalQuantity(product_id, date);
                pending[i].purchased = quantity_purchased
                overall_change += quantity_purchased

            } catch (error) {
                pending[i].purchased = 0
                pending[i].message += "Error in purchases quantity: " + error + "\n"
            }

            //get the quantity transfered in since the stock was saved
            try {
                let quantity_in = await receivedTransferDetailsHelper.getTotalQuantity(product_id, date);
                pending[i].in = quantity_in;
                overall_change += quantity_in

            } catch (error) {
                pending[i].in = 0
                pending[i].message += "Error in transfer in quantity: " + error + "\n"
            }

            pending[i].overall_change = overall_change
            if (overall_change != 0) {
                objects.push(pending[i])
            }
        }



        return { status: '1', data: objects, total: total }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        log.error(error)
        throw new Error(error);
    }

};


exports.save_stock_adjustment_updated_quantities_function = async (_data) => {
    let stockClass = require('../helpers/stockAdjustmentPendingHelper');
    let stockHelper = new stockClass();
    try {

        let date = _data.date == undefined ? helper.getToday() : _data.date;
        let created_on = _data.created_on == undefined ? helper.getToday('timestamp') : _data.created_on;


        let products = _data.products.split("||");
        let product_names = _data.product_names.split("||");
        let cost_prices = _data.cost_prices.split("||");
        let quantities_expected = _data.quantities_expected.split("||");
        let quantities_counted = _data.quantities_counted.split("||");
        let sizes = _data.sizes.split("||");
        let expiries = _data.expiries.split("||");
        let categories = _data.categories.split("||");
        let prices = _data.prices.split("||");
        let code = _data.code;
        let damaged = _data.quantities_damaged.split("||")
        let expired = _data.quantities_expired.split("||")
        let units = _data.units.split("||")
        let shelves = _data.shelves.split("||")
        //delete existing with the code and replace with incoming
        // await stockHelper.delete(` code = '${code}' `, stockHelper.table_name);
        let sql = "BEGIN TRANSACTION; ";

        await stockHelper.getConnection();
        // stockHelper.connection.run("BEGIN TRANSACTION");
        let objects = [];
        for (let i = 0; i < products.length; i++) {
            let data = stockHelper.prep_data(_data);
            // //console.l.log(data.code)

            data.created_by = _data.userid
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.product = products[i];
            // //console.l.log('i=' + i + 'product ' + products[i])
            data.cost_price = cost_prices[i] == undefined || cost_prices[i] == null || cost_prices[i] == '' ? `''` : cost_prices[i];
            data.quantity_expected = quantities_expected[i];
            data.quantity_counted = quantities_counted[i];
            data.size = sizes[i] == undefined ? `''` : `"${sizes[i]}"`;
            data.expiry = expiries[i] == undefined ? `''` : `"${expiries[i]}"`;
            data.category = categories[i] == undefined ? `''` : `"${categories[i]}"`;
            data.current_price = prices[i];
            data.quantity_expired = expired[i] == undefined || expired[i] == null || expired[i] == '' ? 0 : expired[i];
            data.quantity_damaged = damaged[i] == undefined || damaged[i] == null || damaged[i] == '' ? 0 : damaged[i];
            data.unit = units[i] == undefined || units[i] == null ? `''` : `"${units[i]}"`;
            data.shelf = shelves[i] == undefined || shelves[i] == null ? `''` : `"${shelves[i]}"`;
            objects.push(data);

        }
        // //console.l.log(objects)


        sql += `delete from ${stockHelper.table_name} where code = '${code}' and product in (${products.join(",")}); `;
        sql += stockHelper.generateInsertManyQuery(stockHelper.fields, objects, stockHelper.table_name);
        sql += "COMMIT;"
        //console.l.log(sql)
        await stockHelper.connection.exec(sql);

        // for (var x = 0; x < products.length; x++) {

        //     let pid = products[x];
        //     await helper.refreshCurrentStock(pid)
        // }
        await stockValueHelper.updateStockValue();
        activities.log(_data.userid, `'added new stock adjustment pending authorization'`, `'Products'`)
        // stockHelper.connection.run("COMMIT");
        // stockHelper.connection.close().then(succ => { }, err => { })
        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        //   try {
        //     await stockHelper.connection.run("ROLL BACK;");
        //     stockHelper.connection.close().then(succ => {}, err => {})
        //   } catch (error) { await helper.closeConnection();
        //       log.error(error);
        //   }



        log.error(error);
        throw new Error(error);
    }
};


exports.get_product_consumption_function = async (_data) => {

    const SalesDetailsHelper = require('../helpers/salesDetailsHelper.js');
    const salesDetailsHelper = new SalesDetailsHelper();

    const PurchaseDetailsHelper = require('../helpers/purchaseDetailsHelper.js');
    const purchaseDetailsHelper = new PurchaseDetailsHelper();

    const TransferDetailsHelper = require('../helpers/transferDetailsHelper.js');
    const transferDetailsHelper = new TransferDetailsHelper();

    const ReceivedTransferDetailsHelper = require('../helpers/receivedTransferDetailsHelper.js');
    const receivedTransferDetailsHelper = new ReceivedTransferDetailsHelper();

    let id = _data.product;
    let start_month = _data.start_month;
    let end_month = _data.end_month;
    let start_year = _data.start_year;
    let end_year = _data.end_year;
    console.log(end_month)
    let start_date = start_year + "-" + salesDetailsHelper.padZero(start_month) + "-01";
    let end_day = salesDetailsHelper.getLastDayOfMonth(end_month)
    let end_date = end_year + "-" + salesDetailsHelper.padZero(end_month) + "-" + end_day;




    try {
        //get the months between the start and ends

        let sales = await salesDetailsHelper.getProductMonthlyQuantity(id, start_date, end_date)
        let purchases = await purchaseDetailsHelper.getProductMonthlyQuantity(id, start_date, end_date)
        let in_transfers = await receivedTransferDetailsHelper.getProductMonthlyQuantity(id, start_date, end_date)
        let out_transfers = await transferDetailsHelper.getProductMonthlyQuantity(id, start_date, end_date)
        let data = []
        // console.log(sales)
        //foreach year, get the months
        for (var i = start_year; i <= end_year; i++) {
            //if first month, start from the start_month.
            let start = 1;
            let end = 12;
            if (i == start_year) {
                start = start_month;
            }
            if (i == end_year) {
                end = end_month
            }
            for (var x = start; x <= end; x++) {
                let month_name = salesDetailsHelper.getMonthName(x) + " " + i
                let month_year = salesDetailsHelper.padZero(x) + "-" + i;
                let sold = 0;
                let purchased = 0;
                let in_transferred = 0;
                let out_transferred = 0;
                for (let y = 0; y < sales.length; y++) {
                    if (sales[y].month_year == month_year) {
                        sold = sales[y].total;
                        break;
                    }

                }

                for (let y = 0; y < purchases.length; y++) {
                    if (purchases[y].month_year == month_year) {
                        purchased = purchases[y].total;
                        break;
                    }

                }

                for (let y = 0; y < in_transfers.length; y++) {
                    if (in_transfers[y].month_year == month_year) {
                        in_transferred = in_transfers[y].total;
                        break;
                    }

                }

                for (let y = 0; y < out_transfers.length; y++) {
                    if (out_transfers[y].month_year == month_year) {
                        out_transferred = out_transfers[y].total;
                        break;
                    }

                }
                data.push(
                    {
                        "period": month_name, "sold": sold, "purchased": purchased, "out_transferred": out_transferred,
                        "in_transferred": in_transferred
                    }
                )
            }
        }
        return { status: '1', data: data }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        log.error(error)
        throw new Error(error);
    }

};




exports.get_duplicate_count_function = async (_data) => {
    try {


        let q = await helper.getDuplicates()
        let count = q.length;
        return { status: '1', count: count }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.get_duplicate_list_function = async (_data) => {
    try {

        let objects = await helper.getDuplicates();
        return { status: '1', data: objects }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};

exports.merge_duplicates_function = async (_data) => {
    try {

        let ids = _data.ids.split("|||");//comma-separated

        for (var i = 0; i < ids.length; i++) {
            try {
                //get the name of the item and get those with the same name
                let item = await helper.getItem(`id = ${ids[i]}`, helper.table_name);
                //get the items that match the name
                let dupes = await helper.getMany(`name = "${item.name}" and id != ${item.id}`, helper.table_name);
                for (var j = 0; j < dupes.length; j++) {
                    //update each relevant table where the dupe appears to the parent id;
                    await helper.updateField("product", `${ids[i]}`, ` product = ${dupes[j].id}`, 'sales_details')
                    await helper.updateField("product", `${ids[i]}`, ` product = ${dupes[j].id}`, 'stock_adjustment')
                    await helper.updateField("product", `${ids[i]}`, ` product = ${dupes[j].id}`, 'purchase_details')
                    await helper.updateField("product", `${ids[i]}`, ` product = ${dupes[j].id}`, 'received_transfer_details')
                    await helper.updateField("product", `${ids[i]}`, ` product = ${dupes[j].id}`, 'transfer_details')
                    await helper.updateField("product", `${ids[i]}`, ` product = ${dupes[j].id}`, 'refills')
                    await helper.updateField("product", `${ids[i]}`, ` product = ${dupes[j].id}`, 'stock_adjustment_pending')
                    let where = ` id = ${dupes[j].id} `
                    await helper.delete(where, helper.table_name);
                    await activities.log(_data.userid, `"deleted a duplicate for  ${item.name} "`, `'Products'`);

                }

                //update the stock
                await helper.refreshCurrentStock(ids[i])
                await stockValueHelper.updateStockValue();
            } catch (error) {
                console.log(error)
            }

        }

        return { status: '1' }
    } catch (error) {
        await helper.closeConnection();
        log.error(error);
        throw new Error(error);
    }

};