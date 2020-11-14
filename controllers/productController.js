const express = require('express');
const router = express.Router();
const log = require('electron-log');



const Helper = require('../helpers/productHelper.js');
const helper = new Helper();
const ActivitiesHelper = require('../helpers/activitiesHelper');
const activities = new ActivitiesHelper();
let stockValueClass = require('../helpers/stockValueHelper')
let stockValueHelper = new stockValueClass();

router.get('/getList', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    try {
        // let objects = await helper.getAll(helper.table_name, limit, offset);

        let conditions = helper.prep_data(req.query);
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


        objects.map(obj => {
            obj.stock = obj.current_stock
        })
        res.json({ status: '1', data: objects, total: total })
    } catch (error) {
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }

});

router.get('/getProductsWithStock', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    //get any conditions set in query
    try {
        let conditions = helper.prep_data(req.query);
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


        res.json({ status: '1', data: objects, last_update_time: last_update_time.time, total: total })
    } catch (error) {
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }

});

router.get('/getUpdatedProducts', async (req, res) => {
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    let time = req.query.time;
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

        res.json({ status: '1', data: objects, last_update_time: last_update_time.time, total })
    } catch (error) {
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }



});

router.get('/search', async (req, res) => {
    let param = req.query.param;
    let offset = req.query.offset == undefined ? 0 : req.query.offset;
    let limit = req.query.limit == undefined ? null : req.query.limit;
    try {
        let objects = await helper.search(param, limit, offset);
        // console.log(objects)
        // var t = param.toLowerCase().trim();
        // objects.sort(function(a, b) {
        //     let nameA = a.name.toLowerCase(); // ignore upper and lowercase
        //     let nameB = b.name.toLowerCase(); // ignore upper and lowercase
        //     if (nameA.indexOf(t) < nameB.indexOf(t)) {
        //       return -1;
        //     }
        //     if (nameA > nameB) {
        //       return 1;
        //     }

        //     // names must be equal
        //     return 0;
        //   });
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
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }

});



router.post('/saveBranchDetails', async (req, res) => {
    let stockClass = require('../helpers/stockAdjustmentHelper');
    let stockHelper = new stockClass();

    //                $parent_company_id = $this->getUserParentCompany($auth);
    //this is to edit the price and stuff for an individual branch
    let id = req.body.id;
    //extract all the values for the necessary fields from the input
    let data = helper.prep_data(req.body);
    data.last_modified = `'${helper.getToday('timestamp')}'`
    let name = req.body.name;
    let change_stock = req.body.change_stock;
    try {
        if (id == undefined) {
           

            let productid = await helper.insert(data, helper.table_name);
            let date = helper.getToday()
            let stock_data = {
                created_by: `'${req.query.userid}'`, date: `'${date}'`, product: productid,
                quantity_counted: req.body.stock, quantity_expected: 0,
                current_price: req.body.price, cost_price: req.body.cost_price
            };
            await stockHelper.insert(stock_data, stockHelper.table_name);

            await helper.refreshCurrentStock(productid)
            await stockValueHelper.updateStockValue();


            await activities.log(req.query.userid, `"created a product: ${name}"`, `'Products'`)
        }
        else {
            if(change_stock == 'yes'){

           
            let date = helper.getToday()
            let stock_data = {
                created_by: `'${req.query.userid}'`, date: `'${date}'`, product: id,
                quantity_counted: req.body.stock, quantity_expected: 0,
                current_price: req.body.price, cost_price: req.body.cost_price
            };
            await stockHelper.insert(stock_data, stockHelper.table_name);

            await helper.refreshCurrentStock(id)
            await stockValueHelper.updateStockValue();
        }

            await helper.update(data, ` id = ${id}`, helper.table_name);
            await activities.log(req.query.userid, `"updated a product: ${name}"`, `'Products'`)

        }
        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }





});



router.post('/massEdit', async (req, res) => {
    let id = req.body.id;//comma-separated
    let field = req.body.field;
    let value = req.body.field == 'category' || req.body.field == 'expiry_date' ? `'${req.body.value}'` : req.body.value;


    try {
        let where = ` id in (${id}) `
        await helper.updateField(field, value, where, helper.table_name);
        await activities.log(req.query.userid, `"massed edited ${field} to ${value} "`, `'Products'`)

        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }

});


router.post('/delete', async (req, res) => {
    let id = req.body.id;//comma-separated


    try {
        let where = ` id in (${id}) `
        await helper.delete(where, helper.table_name);
        await activities.log(req.query.userid, `"deleted a product edited  "`, `'Products'`)

        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }

});

router.post('/erase', async (req, res) => {
    let id = req.body.id;//comma-separated
    //this deletes every record of the product. stock, purchase, sale


    try {
        
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
        await activities.log(req.query.userid, `"deleted a product edited  "`, `'Products'`)

        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
    log.error(error)
        res.json({ status: '-1' })
    }

});

router.post('/softDelete', async (req, res) => {
    let id = req.body.id;//comma-separated


    try {
        let where = ` id in (${id}) `;
        //set the status to 0
        await helper.updateField('status', 0, where, helper.table_name);
        await activities.log(req.query.userid, `"deleted a product  "`, `'Products'`)

        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }

});

router.post('/restore', async (req, res) => {
    let id = req.body.id;//comma-separated


    try {
        let where = ` id in (${id}) `;
        //set the status to 0
        await helper.updateField('status', 1, where, helper.table_name);
        await activities.log(req.query.userid, `"restored a product   "`, `'Products'`)

        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }

});

router.get('/findById', async (req, res) => {
    let id = req.query.id;
    try {

        let where = ` id = ${id} `;
        let item = await helper.getItem(where, helper.table_name)
        item.stock = item.current_stock;
        item.out_of_stock = item.stock < 1;
        res.json({ status: '1', data: item })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }
});

router.get('/getStock', async (req, res) => {
    let id = req.query.id;
    try {
        let count = await helper.calculateCurrentStock(id);
        console.log(count)
        res.json({ status: '1', data: count })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }
});


router.get('/getCategoryCounts', async (req, res) => {
    try {
        let data = await helper.getCountsByField('category', helper.table_name);

        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }
});

router.get('/createStockAdjustmentSession', async (req, res) => {
    try {
        let stockClass = require('../helpers/stockAdjustmentHelper');
        let stockHelper = new stockClass();
        let date = req.query.date == undefined ? helper.getToday() : req.query.date;
        let created_on = req.query.created_on == undefined ? helper.getToday('timestamp') : req.query.created_on;
        //set the status of all the others to closed
        await stockHelper.updateField('status', `'closed'`, ` id > 1 `, stockHelper.sessions_table_name)

        let data = { created_by: `'${req.query.userid}'`, created_on: `'${created_on}'`, date: `'${date}'` };
        let id = await stockHelper.insert(data, stockHelper.sessions_table_name);
        let code = id.toString().padStart(5, '0');
        await stockHelper.updateField('code', `'${code}'`, ` id = ${id} `, stockHelper.sessions_table_name)
        res.json({ status: '1', data: code })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }
});


///get the code that's still open. if there's none, create one
router.get('/getLatestSession', async (req, res) => {
    try {
        
        let stockClass = require('../helpers/stockAdjustmentHelper');

        let stockHelper = new stockClass();

        await stockHelper.getConnection();
        let where = ` status = 'in_progress' and id = (select max(id) from ${stockHelper.sessions_table_name})`;
        let item = await stockHelper.getItem(where, stockHelper.sessions_table_name)
        if (item != null && item != undefined) {
            res.json({ status: '1', data: item })
        }
        else {
            let date = helper.getToday();
            let created_on = helper.getToday('timestamp');
          
            let data = { created_by: `'${req.query.userid}'`, created_on: `'${created_on}'`, date: `'${date}'` };
            let id = await stockHelper.insert(data, stockHelper.sessions_table_name);
            let code = id.toString().padStart(5, '0');
            await stockHelper.updateField('code', `'${code}'`, ` id = ${id} `, stockHelper.sessions_table_name)
            data.code = code;
            
            res.json({ status: '1', data: data })
        }
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }
});

router.post('/saveStockAdjustment', async (req, res) => {
    let stockClass = require('../helpers/stockAdjustmentHelper');
    let stockHelper = new stockClass();

    let stockPendingClass = require('../helpers/stockAdjustmentPendingHelper');
    let stockPendingHelper = new stockPendingClass();
    try {

        let date = req.body.date == undefined ? helper.getToday() : req.body.date;
        let created_on = req.body.created_on == undefined ? helper.getToday('timestamp') : req.body.created_on;


        let products = req.body.products.split("||");
        let product_names = req.body.product_names.split("||");
        let cost_prices = req.body.cost_prices.split("||");
        let quantities_expected = req.body.quantities_expected.split("||");
        let quantities_counted = req.body.quantities_counted.split("||");
        let sizes = req.body.sizes.split("||");
        let expiries = req.body.expiries.split("||");
        let categories = req.body.categories.split("||");
        let prices = req.body.prices.split("||");
        let damaged = req.body.quantities_damaged == undefined ? [] : req.body.quantities_damaged.split("||")
        let expired = req.body.quantities_expired == undefined ? [] : req.body.quantities_expired.split("||")
        let units = req.body.units.split("||")
        let shelves = req.body.shelves.split("||")

        let code = req.body.code;
        
        //delete existing with the code and replace with incoming
        // await stockHelper.delete(` code = '${code}' `, stockHelper.table_name);
        let sql = "BEGIN TRANSACTION; ";

        await stockHelper.getConnection();
        // stockHelper.connection.run("BEGIN TRANSACTION");
        let objects = [];
        for (let i = 0; i < products.length; i++) {
            let data = stockHelper.prep_data(req.body);
            // console.log(data.code)

            data.created_by = req.userid
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.product = products[i];
            // console.log('i=' + i + 'product ' + products[i])
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
            // console.log(exists)
            if (exists == undefined || exists == null) {
                // console.log(` ${product_names[i]} ${products[i]} new`)
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
                // console.log(` ${product_names[i]} ${products[i]} new - ${new_product}`)
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
        // console.log(objects)


        sql += `delete from ${stockHelper.table_name} where code = '${code}'; `;
        sql += `delete from ${stockPendingHelper.table_name} where code = '${code}'; `;

        sql += `update ${stockHelper.sessions_table_name} set status = 'closed' where code = '${code}'; `;
        sql += stockHelper.generateInsertManyQuery(stockHelper.fields, objects, stockHelper.table_name);
        sql += "COMMIT;"
        // console.log(sql)
        await stockHelper.connection.exec(sql);

        // for (var x = 0; x < products.length; x++) {

        //     let pid = products[x];
        //     await helper.refreshCurrentStock(pid)
        // }
        await stockValueHelper.updateStockValue();
        activities.log(req.query.userid, `'added new stock adjustment'`, `'Products'`)
        // stockHelper.connection.run("COMMIT");
        // stockHelper.connection.close().then(succ => { }, err => { })
        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
        //   try {
        //     await stockHelper.connection.run("ROLL BACK;");
        //     stockHelper.connection.close().then(succ => {}, err => {})
        //   } catch (error) { await helper.closeConnection();
        //       console.log(error)
        //   }



        console.log(error)
        res.json({ status: '-1' })
    }
});

router.post('/saveStockAdjustmentToPending', async (req, res) => {
    let stockClass = require('../helpers/stockAdjustmentPendingHelper');
    let stockHelper = new stockClass();
    try {

        let date = req.body.date == undefined ? helper.getToday() : req.body.date;
        let created_on = req.body.created_on == undefined ? helper.getToday('timestamp') : req.body.created_on;


        let products = req.body.products.split("||");
        let product_names = req.body.product_names.split("||");
        let cost_prices = req.body.cost_prices.split("||");
        let quantities_expected = req.body.quantities_expected.split("||");
        let quantities_counted = req.body.quantities_counted.split("||");
        let sizes = req.body.sizes.split("||");
        let expiries = req.body.expiries.split("||");
        let categories = req.body.categories.split("||");
        let prices = req.body.prices.split("||");
        let code = req.body.code;
        let damaged = req.body.quantities_damaged.split("||")
        let expired = req.body.quantities_expired.split("||")
        let units = req.body.units.split("||")
        let shelves = req.body.shelves.split("||")
        //delete existing with the code and replace with incoming
        // await stockHelper.delete(` code = '${code}' `, stockHelper.table_name);
        let sql = "BEGIN TRANSACTION; ";

        await stockHelper.getConnection();
        // stockHelper.connection.run("BEGIN TRANSACTION");
        let objects = [];
        for (let i = 0; i < products.length; i++) {
            let data = stockHelper.prep_data(req.body);
            // console.log(data.code)

            data.created_by = req.userid
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.product = products[i];
            // console.log('i=' + i + 'product ' + products[i])
            data.cost_price = cost_prices[i] == undefined || cost_prices[i] == null || cost_prices[i] == '' ? `''` : cost_prices[i];
            data.quantity_expected = quantities_expected[i];
            data.quantity_counted = quantities_counted[i];
            data.size = sizes[i] == undefined ? `''` : `"${sizes[i]}"`;
            data.expiry = expiries[i] == undefined ? `''` : `"${expiries[i]}"`;
            data.category = categories[i] == undefined ? `''` : `"${categories[i]}"`;
            data.current_price = prices[i];
            data.quantity_expired = expired[i] == undefined || expired[i] == null || expired[i] == '' ? 0 : expired[i];
            data.quantity_damaged = damaged[i] == undefined || damaged[i] == null || damaged[i] == '' ? 0 : damaged[i];
            data.unit = units[i] == undefined || units[i] == null  ? `''` : `"${units[i]}"`;
            data.shelf = shelves[i] == undefined || shelves[i] == null  ? `''` : `"${shelves[i]}"`;

            //check if the item exists first
            var exists = await helper.getItem(`id = ${products[i]}`, helper.table_name);
            // console.log(exists)
            if (exists == undefined || exists == null) {
                // console.log(` ${product_names[i]} ${products[i]} new`)
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
                // console.log(` ${product_names[i]} ${products[i]} new - ${new_product}`)
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
        // console.log(objects)


        sql += `delete from ${stockHelper.table_name} where code = '${code}'; `;
        sql += stockHelper.generateInsertManyQuery(stockHelper.fields, objects, stockHelper.table_name);
        sql += "COMMIT;"
        // console.log(sql)
        await stockHelper.connection.exec(sql);

        // for (var x = 0; x < products.length; x++) {

        //     let pid = products[x];
        //     await helper.refreshCurrentStock(pid)
        // }
        await stockValueHelper.updateStockValue();
        activities.log(req.query.userid, `'added new stock adjustment pending authorization'`, `'Products'`)
        // stockHelper.connection.run("COMMIT");
        // stockHelper.connection.close().then(succ => { }, err => { })
        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
        //   try {
        //     await stockHelper.connection.run("ROLL BACK;");
        //     stockHelper.connection.close().then(succ => {}, err => {})
        //   } catch (error) { await helper.closeConnection();
        //       console.log(error)
        //   }



        console.log(error)
        res.json({ status: '-1' })
    }
});



router.post('/saveSingleStockAdjustment', async (req, res) => {
    try {
        let stockClass = require('../helpers/stockAdjustmentHelper');
        let stockHelper = new stockClass();

        let date = req.body.date == undefined ? helper.getToday() : req.body.date;
        let created_on = req.body.created_on == undefined ? helper.getToday('timestamp') : req.body.created_on;
        let product_id = req.body.product;
        let qtt = req.body.quantity_counted;
        let name = req.body.product_name;

        let data = stockHelper.prep_data(req.body);
        data.created_on = created_on;
        data.date = date;
        await stockHelper.getConnection();
        let sql = "BEGIN TRANSACTION; ";
        sql += stockHelper.generateInsertQuery(data, stockHelper.table_name);
        sql += "COMMIT;"
        await stockHelper.connection.exec(sql);

        await helper.refreshCurrentStock(product_id);
        await stockValueHelper.updateStockValue();
        activities.log(req.query.userid, `added new stock adjustment for ${name} pending approval. new quantity: ${qtt}`, 'Products')

        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
        // stockHelper.connection.run("ROLL BACK");
        console.log(error)
        res.json({ status: '-1' })
    }

});

router.post('/savePendingSingleStockAdjustment', async (req, res) => {
    try {
        let stockClass = require('../helpers/stockAdjustmentPendingHelper');
        let stockHelper = new stockClass();

        let date = req.body.date == undefined ? helper.getToday() : req.body.date;
        let created_on = req.body.created_on == undefined ? helper.getToday('timestamp') : req.body.created_on;
        let product_id = req.body.product;
        let qtt = req.body.quantity_counted;
        let name = req.body.product_name;
        let code = req.body.code;
        let data = stockHelper.prep_data(req.body);
        data.created_on = `"${created_on}"`;
        data.date = `"${date}"`;
        await stockHelper.getConnection();
        let sql = "BEGIN TRANSACTION; ";
        sql += `delete from ${stockHelper.table_name} where code = '${code}' and product = ${product_id}; `;

        sql += stockHelper.generateInsertQuery(data, stockHelper.table_name);
        sql += "COMMIT;"
        await stockHelper.connection.exec(sql);

        // await helper.refreshCurrentStock(product_id)
        activities.log(req.query.userid, `"added new stock adjustment for ${name} pending approval. new quantity: ${qtt}"`, '"Products"')

        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
        // stockHelper.connection.run("ROLL BACK");
        console.log(error)
        res.json({ status: '-1' })
    }

});

///get the quantity if any previously entered for an item
router.get('/getPendingStockQuantity', async (req, res) => {
    try {
        let stockClass = require('../helpers/stockAdjustmentPendingHelper');
        let code = req.query.code;
        let product = req.query.product
        let stockHelper = new stockClass();


        let where = ` product = ${product} and code = '${code}' `;
        let item = await stockHelper.getItem(where, stockHelper.table_name)
        if (item != null && item != undefined) {
            res.json({ status: '1', data: item })
        }
        else {
            res.json({ status: '0', data: null })
        }
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1' })
    }
});


router.get('/getStockAdjustmentSessions', async (req, res) => {
    let year = req.query.year == undefined ? helper.getThisYear() : req.query.year;
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

        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }

});

router.get('/getPendingStockAdjustmentSessions', async (req, res) => {
    let year = req.query.year == undefined ? helper.getThisYear() : req.query.year;
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

        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }

});


router.get('/getStockAdjustmentsBetweenDates', async (req, res) => {
    try {
        let start = req.query.start_date == undefined ? helper.getToday : req.query.start_date;
        let end = req.query.end_date == undefined ? helper.getToday : req.query.end_date;


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

        res.json({
            status: '1',
            number_excess: num_excess,
            number_loss: num_loss,
            number_neutral: num_neutral,
            total_excess: total_excess,
            total_loss: total_loss,
            total_difference: total_difference,
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockAdjustmentsByCode', async (req, res) => {
    try {
        let code = req.query.code

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
            obj.total_damaged = (price * obj.quantity_damaged).toFixed(2)
            obj.total_expired = (price * obj.quantity_expired).toFixed(2)

            obj.total = (difference * price).toFixed(2);

        }
        let num_excess = await stockHelper.getNumberPositive(code);
        let num_loss = await stockHelper.getNumberNegative(code);
        let num_neutral = await stockHelper.getNumberNeutral(code);
        let total_excess = await stockHelper.getTotalPositive(code);
        let total_loss = await stockHelper.getTotalNegative(code);
        let total_expired = await stockHelper.getTotalExpired(code);
        let total_damaged = await stockHelper.getTotalDamage(code);

        let total_difference = total_excess + total_loss

        res.json({
            status: '1',
            number_excess: num_excess,
            number_loss: num_loss,
            number_neutral: num_neutral,
            total_excess: total_excess == null ? 0.00 : total_excess.toFixed(2),
            total_loss: total_loss == null ? 0.00 : total_loss.toFixed(2),
            total_difference: total_difference == null ? 0.00 : total_difference.toFixed(2),
            total_expired: total_expired == null ? 0.00 : total_expired.toFixed(2),
            total_damaged: total_damaged == null ? 0.00 : total_damaged.toFixed(2),
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getPendingStockAdjustmentsByCode', async (req, res) => {
    try {
        let code = req.query.code

        let stockClass = require('../helpers/stockAdjustmentPendingHelper');
        let stockHelper = new stockClass();


        let objects = await stockHelper.getMany(` code = '${code}'  `, stockHelper.table_name);
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            let difference = obj.quantity_counted - obj.quantity_expected;
            let price = obj.current_price;
            let cost_price = obj.cost_price;
            let product = await helper.getItem(` id = ${obj.product} `, helper.table_name);
            obj.total_damaged = (price * obj.quantity_damaged).toFixed(2)
            obj.total_expired = (price * obj.quantity_expired).toFixed(2)
            obj.name = product.name;
            obj.difference = difference;
            obj.total_cost = difference * cost_price;
            obj.total = (difference * price).toFixed(2);

        }
        let num_excess = await stockHelper.getNumberPositive(code);
        let num_loss = await stockHelper.getNumberNegative(code);
        let num_neutral = await stockHelper.getNumberNeutral(code);
        let total_excess = await stockHelper.getTotalPositive(code);
        let total_loss = await stockHelper.getTotalNegative(code);
        let total_expired = await stockHelper.getTotalExpired(code);
        let total_damaged = await stockHelper.getTotalDamage(code);
        let total_difference = total_excess + total_loss

        res.json({
            status: '1',
            number_excess: num_excess,
            number_loss: num_loss,
            number_neutral: num_neutral,
            total_excess: total_excess == null ? 0.00 : total_excess.toFixed(2),
            total_loss: total_loss == null ? 0.00 : total_loss.toFixed(2),
            total_difference: total_difference == null ? 0.00 : total_difference.toFixed(2),
            total_expired: total_expired == null ? 0.00 : total_expired.toFixed(2),
            total_damaged: total_damaged == null ? 0.00 : total_damaged.toFixed(2),
            data: objects
        })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});




router.get('/getStockOutCount', async (req, res) => {
    try {
        let data = await helper.count('id', helper.table_name, ` current_stock < 1 `)

        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/hasStockOut', async (req, res) => {
    try {
        let q = await helper.count('id', helper.table_name, ` current_stock < 1 `)
        let data = q > 0;
        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockOutList', async (req, res) => {
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
            obj.stock = obj.current_stock
        }
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockNearMinCount', async (req, res) => {
    try {
        let data = await helper.count('id', helper.table_name, ` current_stock <= min_stock `)

        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/hasStockNearMin', async (req, res) => {
    try {
        let q = await helper.count('id', helper.table_name, ` current_stock  <= min_stock  `)
        let data = q > 0;
        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockNearMinList', async (req, res) => {
    try {
        let objects = await helper.getMany(` current_stock  <= min_stock `, helper.table_name)
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
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockNearMaxCount', async (req, res) => {
    try {
        let data = await helper.count('id', helper.table_name, ` current_stock >= max_stock `)

        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/hasStockNearMax', async (req, res) => {
    try {
        let q = await helper.count('id', helper.table_name, ` current_stock  >= max_stock  `)
        let data = q > 0;
        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockNearMaxList', async (req, res) => {
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
            obj.stock = obj.current_stock
        }
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getStockChanges', async (req, res) => {
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


        let id = req.query.product;
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
            console.log(p)
            var purchase = await mainPurchaseHelper.getItem(` code = '${p.code}'`, mainPurchaseHelper.table_name)
            console.log('purchaess: ' + purchase)
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
        res.json({ status: '1', data: results })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});




router.get('/getExpiryCount', async (req, res) => {
    try {
        let defs = helper.setDates('this_month')
        let start = req.query.start_date == undefined ? defs.start_date : req.query.start_date;
        let end = req.query.end_date == undefined ? defs.end_date : req.query.end_date;


        let data = await helper.count('id', helper.table_name, ` expiry >= '${start}' and expiry <= '${end}' and current_stock > 0`)

        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/hasExpiry', async (req, res) => {
    try {
        let defs = helper.setDates('this_month')
        let start = req.query.start_date == undefined ? defs.start_date : req.query.start_date;
        let end = req.query.end_date == undefined ? defs.end_date : req.query.end_date;


        let q = await helper.count('id', helper.table_name, ` expiry >= '${start}' and expiry <= '${end}'  and current_stock > 0 `)
        let data = q > 0;
        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getExpiryList', async (req, res) => {
    try {
        let defs = helper.setDates('this_month')
        let start = req.query.start_date == undefined ? defs.start_date : req.query.start_date;
        let end = req.query.end_date == undefined ? defs.end_date : req.query.end_date;


        let objects = await helper.getMany(`  expiry >= '${start}' and expiry <= '${end}'  and current_stock > 0  `, helper.table_name)
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
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getStockValueList', async (req, res) => {
    try {
        let defs = helper.setDates('this_month')
        let start = req.query.start_date == undefined ? defs.start_date : req.query.start_date;
        let end = req.query.end_date == undefined ? defs.end_date : req.query.end_date;


        let objects = await stockValueHelper.getMany(`  date >= '${start}' and date <= '${end}' `, stockValueHelper.table_name)
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var sv = obj.selling_value;
            var cv = obj.cost_value;
            //loss, profit, ...

            obj.selling_value = helper.dateDifference(obj.expiry) == 'before';
            obj.out_of_stock = stock < 1;
            obj.near_min = stock > 0 && stock <= min;
            obj.near_max = stock >= max;
            obj.stock = obj.current_stock
        }
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getExpiredCount', async (req, res) => {
    try {
        let start = helper.getToday();

        let data = await helper.count('id', helper.table_name, ` expiry <= '${start}'  and current_stock > 0`)

        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/hasExpired', async (req, res) => {
    try {
        let start = helper.getToday();

        let q = await helper.count('id', helper.table_name, ` expiry <= '${start}'   and current_stock > 0 `)
        let data = q > 0;
        res.json({ status: '1', data: data })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});

router.get('/getExpiredList', async (req, res) => {
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
        }
        res.json({ status: '1', data: objects })
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        res.json({ status: '-1', data: null })
    }

});


router.get('/getCategories', async (req, res) => {

    try {
        let objects = await helper.getDistinct('category', helper.table_name);
        let arr = [];
        objects.map(item => {
            arr.push(item.category)
        })
        res.json({ status: '1', data: arr })
    } catch (error) {
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }


});

router.get('/getStockValues', async (req, res) => {

    try {
        let cost_value = await stockValueHelper.getCostValue();
        let selling_value = await stockValueHelper.getSellingValue();
        
        res.json({ status: '1', data: {cost_value: cost_value.toFixed(2), selling_value: selling_value.toFixed(2)} })
    } catch (error) {
        await helper.closeConnection();
        res.json({ status: '-1', data: null })
    }


});

router.get('/refreshAllProducts', async (req, res) => {
    var msg = "";
    try {
        let objects = await helper.getAll(helper.table_name);
        for (var i = 0; i < objects.length; i++) {
            let stock = await helper.calculateCurrentStock(objects[i].id);
            await helper.updateField('current_stock', stock, ` id = ${objects[i].id}`, helper.table_name);
            msg += `<p>${objects[i].name} updated to ${stock}</p>`
        }
        // res.json({ status: '1', data: arr })
        // res.redirect('/?message=Products Refreshed Successfully')
        res.send(msg)
    } catch (error) {
        await helper.closeConnection();
        console.log(error)
        log.error(error)
        res.json({ status: '-1', data: null })
    }


});




router.post('/merge', async (req, res) => {
    try {
        //merge a number of items into the first one. it has to convert sales, purchases, stockadjustments of all to the first one
        let stockClass = require('../helpers/stockAdjustmentHelper');
        let stockHelper = new stockClass();

        let date = req.body.date == undefined ? helper.getToday() : req.body.date;
        let created_on = req.body.created_on == undefined ? helper.getToday('timestamp') : req.body.created_on;
        let product_id = req.body.product;
        let qtt = req.body.quantity_counted;
        let name = req.body.product_name;

        let data = stockHelper.prep_data(req.body);
        data.created_on = created_on;
        data.date = date;
        await stockHelper.getConnection();
        let sql = "BEGIN TRANSACTION; ";
        sql += stockHelper.generateInsertQuery(data, stockHelper.table_name);
        sql += "COMMIT;"
        await stockHelper.connection.exec(sql);

        await helper.refreshCurrentStock(product_id)
        await stockValueHelper.updateStockValue();
        activities.log(req.query.userid, `added new stock adjustment for ${name}. new quantity: ${qtt}`, 'Products')

        res.json({ status: '1' })
    } catch (error) {
        await helper.closeConnection();
        // stockHelper.connection.run("ROLL BACK");
        console.log(error)
        res.json({ status: '-1' })
    }

});
 



router.post('/upload', (req, res, next) => {
    try {
        var file = req.files.uploadfile
        var xlsx = require('xlsx');
        var workbook = xlsx.read(file.data);
        var sheet_name_list = workbook.SheetNames;
        // var csv = xlsx.utils.sheet_to_csv(workbook.Sheets[sheet_name_list[0]]);
        var arr = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
        var mother_array = []; //this will contain the sets of 100 arrays
        for (var i = 0; i < arr.length; i++) {
            var insert_array = []
            //convert each line to an array of items, by the commas
            var obj_array = arr[i];
            //console.log(obj_array);
            var id = obj_array.id;
            var name = obj_array.name;
            var price = obj_array.price;
            var cost_price = obj_array.cost_price == undefined ? 0 : obj_array.cost_price;
            var category = obj_array.category == undefined ? "Miscellaneous" : obj_array.category;
            var expiry = obj_array.expiry == undefined ? "1970-01-01" : obj_array.expiry;
            var expected = obj_array.expected == undefined ? 0 : obj_array.expected;
            var counted = obj_array.counted == undefined ? 0 : obj_array.counted;
            var shelf = obj_array.shelf == undefined ? "" : obj_array.shelf;
            var unit = obj_array.unit == undefined ? "" : obj_array.unit;
            if (name != undefined && name != null && name != "") {
                mother_array.push({
                    id: id,
                    name: name,
                    price: price,
                    cost_price: cost_price,
                    category: category,
                    expiry: expiry,
                    quantity: counted,
                    stock: expected,
                    difference: counted - expected,
                    shelf: shelf,
                    unit: unit
                })
            }



        }//end for


        res.json({ status: '1', data: mother_array })
    } catch (error) {
        console.log(error)
        res.json({ status: '-1' })
    }



});
//export the whole thingy
module.exports = router;