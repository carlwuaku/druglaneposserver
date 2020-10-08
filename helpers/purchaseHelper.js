/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const log = require('electron-log');

class PurchaseHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["vendor", "date", "site",
     "code", "status","invoice","payment_method",
     "amount_paid","last_payment_date"]
    table_name = "purchases";
   
    not_string_fields = ["id"];
    //the fields which are not strings. used in prep_data

    prep_data(data) {
        return super.prep_data(data, this.fields, this.not_string_fields)
    }

    /**
     * search the products table for a string or comma-separated strings
     * @param {string} param 
     * @param {Number} limit 
     * @param {Number} offset 
     * @returns {Array}
     */
    async search(param, limit = null, offset= 0){
        return await super.search(param, ['code','invoice'],this.table_name, limit, offset);
    }

    /**
     * get the total amount paid to vendors over a certain period
     * @param {String} start_date 
     * @param {String} end_date 
     * @param {String} payment_method 
     * @param {String} vendor 
     */
    async getTotalPaidByDates(start_date, end_date, payment_method = '', vendor=''){
        
        let sql = `select sum(amount_paid) as total from ${this.table_name}
          where created_on >= '${start_date}'  and created_on <= '${end_date}' `;
        if(payment_method != '' && vendor == ''){
            sql += ` and  payment_method = '${payment_method}' `
        }
        if(vendor != '' && payment_method == ''){
            sql += ` and  vendor = '${vendor}' `
        }

        if(vendor != '' && payment_method != ''){
            sql += ` and  vendor = '${vendor}' and payment_method = '${payment_method}' `
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

module.exports = PurchaseHelper



