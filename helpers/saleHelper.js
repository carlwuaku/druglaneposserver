/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const log = require('electron-log');

class SalesHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["customer", "code", "status", "created_by", "created_on", "date", "amount_paid",
    "payment_method", "insurance_provider","creditor_name","insurance_member_id", 
    "insurance_member_name","momo_reference","discount"]
    table_name = "sales";
   
    not_string_fields = ["id","amount_paid", "discount"];
    //the fields which are not strings. used in prep_data

    prep_data(data) {
        return super.prep_data(data, this.fields, this.not_string_fields)
    }

    /**
     * search the sales table for a string or comma-separated strings
     * @param {string} param 
     * @param {Number} limit 
     * @param {Number} offset 
     * @returns {Array}
     */
    async search(param, limit = null, offset= 0){
        return await super.search(param, ['code'],this.table_name, limit, offset);
    }


 }

module.exports = SalesHelper



