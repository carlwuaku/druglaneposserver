'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

const sequelize = require('../helpers/sequelize');
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }



// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db['activities'] = require("./activities")
db['users'] = require("./users")
db['user_sessions'] = require("./user_sessions")
db['permissions'] = require("./permissions")
db['branches'] = require("./branches")
db['customer_diagnostics'] = require("./customer_diagnostics")
db['customers'] = require("./customers")
db['db_backups'] = require("./db_backups")
db['db_sync'] = require("./db_sync")
db['diagnostic_tests'] = require("./diagnostic_tests")
db['drug_info'] = require("./drug_info")
db['incoming_payments'] = require("./incoming_payments")
db['insurance_providers'] = require("./insurance_providers")
db['item_active_ingredients'] = require("./item_active_ingredients")
db['online_backups'] = require("./online_backups")
db['outgoing_payments'] = require("./outgoing_payments")
db['products'] = require("./products")
db['purchase_details'] = require("./purchase_details")
db['purchases'] = require("./purchases")
db['received_transfer_details'] = require("./received_transfer_details")
db['received_transfers'] = require("./received_transfers")
db['refills'] = require("./refills")
db['role_permissions'] = require("./role_permissions")
db['roles'] = require("./roles")
db['sales'] = require("./sales")
db['sales_details'] = require("./sales_details")
db['settings'] = require("./settings")
db['stock_adjustment'] = require("./stock_adjustment")
db['stock_adjustement_pending'] = require("./stock_adjustment_pending")
db['stock_adjustment_sessions'] = require("./stock_adjustment_sessions")
db['stock_values'] = require("./stock_values")
db['transfer_details'] = require("./transfer_details")
db['transfers'] = require("./transfers")
db['vendors'] = require("./vendors")


db.Sequelize = Sequelize;

module.exports = db;
