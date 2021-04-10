
const dbClass = require('./database');
const log = require('electron-log');

class ProductBachesHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["purchase_code", "product", "barcode",
    "expiry", "batch_number","quantity","quantity_sold"]
    table_name = "ProductBatches";
   
    not_string_fields = ["id","quantity"];
    //the fields which are not strings. used in prep_data

    prep_data(data) {
        return super.prep_data(data, ['barcode'], this.not_string_fields)
    }

    
    /**
     * search the products table for a string or comma-separated strings
     * @param {string} param 
     * @param {Number} limit 
     * @param {Number} offset 
     * @returns {Array}
     */
    async search(param, limit = null, offset = 0) {
        return await super.search(param, ['batch_number','barcode'], this.table_name, limit, offset, true, 'name');
    }

}
module.exports = ProductBachesHelper