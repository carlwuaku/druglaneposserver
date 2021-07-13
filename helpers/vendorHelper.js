const dbClass = require('./database');
const log = require('electron-log');

class VendorHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["name", "code", "location", "phone",
    "email", "notes", "created_on","legacy_id"]
    table_name = "vendors";
   
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
        return await super.search(param, ['name'],this.table_name, limit, offset);
    }
}

module.exports = VendorHelper;

