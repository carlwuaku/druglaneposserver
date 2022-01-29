
var admin = require('firebase-admin');
const constants = require('./constants');
const adminService = require('./services/admin_service')
const log = require('electron-log');

let settingsHelper = require('./helpers/settingsHelper');
let sh = new settingsHelper();

let company_id = "";
async function getCompanyId() {
    company_id = await sh.getSetting(`'company_id'`);
}
getCompanyId();


// thedruglane-c15d8-firebase-adminsdk-gy2lo-d6f0f69bed.json
var serviceAccount = require('./helpers/druglanepms-firebase-adminsdk-jo95n-fc675546e8.json');
// https://thedruglane-c15d8.firebaseio.com/
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestoredb = admin.firestore();

exports.db = firestoredb;


exports.syncUsers = async function (data) {
    let batch = firestoredb.batch();

    const delete_ref = firestoredb.collection(constants.firebase_user_collection).where("company_id", "==", constants.company_id);


    delete_ref.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {

            batch.delete(doc.ref);
        });
    });

    for (var i = 0; i < data.length; i++) {
        //firebase sets a limit of 500 for batch transactions
        if (i >= 500) {
            break;
        }
        let item = data[i];
        const users_collection = firestoredb.collection(constants.firebase_user_collection).doc();
        batch.set(users_collection, item);

    }


    // Update the population of 'SF'
    // const sfRef = db.collection('cities').doc('SF');
    // batch.update(sfRef, {population: 1000000});

    // // Delete the city 'LA'


    // Commit the batch
    await batch.commit();
    // const res = await db.collection('users').where("company_id", "==", constants.company_id).delete();

    //this replaces the current data with the new one
    // await firestoredb.collection('users').doc(docId).set(data);

}

let received_requests = []

////////////////LISTEN FOR REQUESTS FROM ONLINE USERS//////////////////////
//VALIDATION WILL INCLUDE CHECKING TO MAKE SURE THE USER'S EMAIL IS IN THIS LOCALSERVER AND IS 
//ALLOWED TO ACCESS ONLINE

/**
 * monitor the firebase db for incoming requests. each company will have it's id in order to 
 * receive it's own requests
 */
async function getIncomingRequests() {
    // console.log("staring firebase")
    try {

        const query = firestoredb.collection('requests').where("request_status", '==', 'Pending').where("company_id", "==", constants.company_id);
        let dbref;
        const observer = query.onSnapshot(querySnapshot => {
            try { 
            //   console.log(`Received query snapshot of size ${querySnapshot.docChanges().length}`);
            querySnapshot.docChanges().forEach(async (change) => { 
                // console.log(change.doc.id, change.type);
                if (change.type === 'added') {
                    let doc = change.doc;
                    let data = doc.data();

                    dbref = firestoredb.collection('requests').doc(doc.id);
                    try {
                        let response_data = await runQuery(data.route);
                        // console.log(doc.id, response_data)
    
                        response_data['request_status'] = "Complete"
                        const res = await dbref.update(response_data);  
                    } catch (error) {

                        console.log(data.route,error);
                        response_data['request_status'] = "Complete"
                        const res = await dbref.update({status: "-1", request_status: "Complete"});
                    }
                    
                    // console.log(res)
                    // received_requests.push(doc.id)
                }

                //because each snapshot can contain items that were received in a previous snapshot,
                //we want to process only those that have not been processed yet
                // if(received_requests.indexOf(doc.id) == -1){

                // }
                // console.log(">>>> "+received_requests.toString())


            })   
            } catch (error) {
                log.error(error)
            }
           
            // ...
        }, err => {
            log.error(`Encountered error: ${err}`);
        });
    } catch (error) {
        log.error(error)
    }



    // console.log("monitoring requests...", company_id)
    // const snapshot = await firestoredb.collection("requests")
    //     .where("status", '==', 'Pending').get();//.where("company_id", "==", company_id)

    // snapshot.forEach(async (doc) => {
    //     let data = doc.data();
    //     switch (data.route) {
    //         case 'getUsers':
    //             //get users and update the doc response
    //             let users = await adminService.get_users_function();
    //             // console.log(users)
    //             break;

    //         default:
    //             // console.log(doc)
    //             break;
    //     }
    //     // console.log(doc.id, '=>', doc.data());
    //   });

}
getIncomingRequests();

/**
 * Load a service and run a query based on the route passed
 * @param {String} route the route containing the params. e.g. 
 * sales/findbyid
 */
async function runQuery(route) {
    try {


        //split the route and get any query items.
        let data = {}
        let route_parts = route.split("?");//the first part if the path, the second if any contains the query params
        let path_name = route_parts[0];//e.g. sales/getbetweendates or sales/findbyid/3
        if (route_parts.length > 1) {
            let query = route_parts[1];//e.g. param=gigngig&v=02&pr=3vvno
            let query_params = query.split("&"); 
            query_params.forEach(element => {
                let parts = element.split("=");
                //assign the keys to the values if there was a value
                data[parts[0]] = parts.length > 0 ? parts[1] : null;
            });
        }

        //the route itself
        let path_parts = path_name.split("/");//[0]=modulename e.g. sales or products, [1]=methodname, [2 onwards]=params
        let module_name = path_parts[0];
        let methodname = path_parts[1];
        let other_params = path_parts.length > 2 ? path_parts[2] : "";
        // console.log(route)
        //load the right service by the module
        let module = null;
        switch (module_name) {
            case "admin":
                module = require('./services/admin_service');
                break;
            case "product":
                module = require('./services/products_service');
                break;
            case "sale":
                module = require('./services/sales_service');
                break;
            case "purchase":
                module = require('./services/purchase_service');
                break;
            case "customer":
                module = require('./services/customer_service');
                break;

            case "transfer":
                module = require('./services/transfer_service');
                break;
            case "vendor":
                module = require('./services/vendor_service');
                break;
            default:
                break;
        }
        if (module != null) {

            if (module_name == "admin" || module_name == "product") {
                //place _ before the uppercases, convert to lowercaes and append _function to match the actual 
                //methods for products and admin.
                let method = methodname.replace(/([A-Z])/g, '_$1').trim().toLocaleLowerCase();
                let _function = module[method + "_function"]
                return await _function(data)
            }
            else {
                //in the other modules _ was simply prepended to the method names
                let _function = module["_" + methodname]
                return await _function(data)
            }

        }
        else {
            // console.log("module not found")
            return { status: "-1", data: null }

        }
        //if a module was found, look through its methods to see which matches the given method name
        // console.log(module,typeof(module))
        // console.log(methodname, data)
    } catch (error) {
        return { status: "-1", data: null }
        // console.log(">>>>>>>>>>." + route, error)
    }
}

