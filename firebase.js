
var admin = require('firebase-admin');
// thedruglane-c15d8-firebase-adminsdk-gy2lo-d6f0f69bed.json
var serviceAccount = require('./helpers/druglanepms-firebase-adminsdk-jo95n-fc675546e8.json');
// https://thedruglane-c15d8.firebaseio.com/
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestoredb = admin.firestore();

// const query = firestoredb.collection('remote_purchases').where("status", '==', 'Pending');

// const observer = query.onSnapshot(querySnapshot => {
//     console.log(querySnapshot.docs);
//     //insert into the database
//     if (Array.isArray(querySnapshot)) {
//         saveNewPurchasesArray(querySnapshot)
//     }
// }, err => {
//     console.log(`Encountered error: ${err}`);
// });

const log = require('electron-log');

const PurchaseHelper = require('./helpers/purchaseHelper.js');
const purchaseHelper = new PurchaseHelper();

const PurchaseDetailsHelper = require('./helpers/purchaseDetailsHelper.js');
const purchasedetailsHelper = new PurchaseDetailsHelper();

const ProductHelper = require('./helpers/productHelper.js');
const productHelper = new ProductHelper();

const ActivitiesHelper = require('./helpers/activitiesHelper');
const activities = new ActivitiesHelper();

let adminClass = require('./helpers/adminHelper');
let adminHelper = new adminClass();

let vendorClass = require('./helpers/vendorHelper');
let vendorHelper = new vendorClass();

let stockValueClass = require('./helpers/stockValueHelper')
let stockValueHelper = new stockValueClass();

let productBatchClass = require('./helpers/productBatchesHelper')
let productBatchHelper = new productBatchClass();

async function getPendingPurchases(){
    

    const snapshot = await firestoredb.collection('remote_purchases').where("status", '==', 'Pending');
    snapshot.onSnapshot((doc) =>{
        
        // saveNewPurchasesArray(doc.docs)

    })
// snapshot.forEach((doc) => {
//   console.log(doc.id, '=>', doc.data());
// });
}
getPendingPurchases();


async function saveNewPurchasesArray(items) {
    for (var i = 0; i < items.length; i++) {
        try {
            
        
        let curr = items[i].data();
        let date = curr.date == undefined ? purchaseHelper.getToday() : curr.date;
        let created_on = curr.created_on == undefined ? purchaseHelper.getToday('timestamp') : curr.created_on;



        let payment_method = curr.payment_method;
        let products = curr.products.split("||");
        let prices = curr.prices.split("||");
        let quantities = curr.quantities.split("||");
        let selling_prices = curr.selling_prices.split("||");
        let expiries = curr.expiries.split("||");
        let units = curr.units.split("||");
        let markups = curr.markups.split("||");


        await purchaseHelper.getConnection();
        //last id
        let last_id = await purchaseHelper.getField('max(id) as max_id', purchaseHelper.table_name);
        // console.log(last_id)
        let code = last_id.max_id == null ? `'00001'` : `'${(last_id.max_id + 1).toString().padStart(5, '0')}'`;

        let objects = [];
        let product_updates = [];
        for (let i = 0; i < products.length; i++) {
            let data = purchasedetailsHelper.prep_data(curr);
            data.created_on = `'${created_on}'`;
            data.date = `'${date}'`;
            data.unit = `'${units[i]}'`;
            data.product = products[i];
            data.selling_price = selling_prices[i];
            data.quantity = quantities[i];
            data.price = prices[i];
            data.markup = markups[i];
            data.code = code;
            data.created_by = "admin";
            objects.push(data);
            //generate the update for the product
            let product_data = {
                price: selling_prices[i],
                cost_price: prices[i],
                unit: `'${units[i]}'`,
                expiry: `'${expiries[i]}'`
            }
            let p = productHelper.generateUpdateQuery(product_data, ` id = ${products[i]} `, productHelper.table_name)
            product_updates.push(p);
        }
        // console.log(objects)

        let purchase_data = purchaseHelper.prep_data(curr);
        purchase_data.date = `'${date}'`;
        purchase_data.created_on = `'${created_on}'`;
        purchase_data.created_by = "1";
        purchase_data.code = code;
        // console.log(purchase_data)

        let batches = JSON.parse(curr.batch_details);
        batches.map(bat => {
            bat.purchase_code = code;
            bat.barcode = `'${bat.barcode}'`;
            bat.batch_number = `'${bat.batch_number}'`;
            bat.expiry = `'${bat.expiry}'`;
            bat.quantity_sold = 0;

        })




        let sql = "BEGIN TRANSACTION; ";
        sql += purchaseHelper.generateInsertQuery(purchase_data, purchaseHelper.table_name);
        sql += purchasedetailsHelper.generateInsertManyQuery(purchasedetailsHelper.fields, objects, purchasedetailsHelper.table_name);
        sql += product_updates.join(" ");
        if (batches.length > 0) {
            sql += productBatchHelper.generateInsertManyQuery(productBatchHelper.fields, batches, productBatchHelper.table_name);

        }

        sql += "COMMIT;"
        console.log(sql)
        await purchaseHelper.connection.exec(sql);
        // console.log(sql)

        for (var x = 0; x < products.length; x++) {

            let pid = products[x];
            await productHelper.refreshCurrentStock(pid)
        }
        await stockValueHelper.updateStockValue();

        //enter the different batches



        activities.log(req.query.userid, `"added new purchases: ${code} : ${payment_method}"`, `'Purchase'`)
        // helper.connection.close().then(succ => { }, err => { })
    } catch (error) {
        console.log(error)
    }
    }


}



