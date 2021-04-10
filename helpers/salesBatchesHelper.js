
const dbClass = require('./database');
const log = require('electron-log');

class SalesBatchesHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["code", "product", "date",
    "batch_number","quantity","expiry"]
    table_name = "sales_batches";
   
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
        return await super.search(param, ['batch_number'], this.table_name, limit, offset, true, 'name');
    }

    /**
     * get the total quantity of an item sold between some datetimes
     * @param {Number} id the product id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTotalQuantityDateTime(id, start_date='', end_date=''){
        let sql = `select sum(quantity) as total from ${this.table_name} where product = ${id} `;
        if(start_date != ''){
            sql += ` and created_on >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and created_on <= '${end_date}' `
        }

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

}
module.exports = SalesBatchesHelper