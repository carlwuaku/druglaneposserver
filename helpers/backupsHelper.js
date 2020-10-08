const dbClass = require('./database');
const log = require('electron-log');

class BackupsHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["id","file_name", "description", "created_by", "uploaded", "db_version"]
    table_name = "dbbackups";
    not_string_fields = ["id"];
    //the fields which are not strings. used in prep_data

    prep_data(data) {
        return super.prep_data(data, this.fields, this.not_string_fields)
    }

    /**
     * search the customer table for a string or comma-separated strings
     * @param {string} param 
     * @param {Number} limit 
     * @param {Number} offset 
     * @returns {Array}
     */
    async search(param, limit = null, offset= 0){
        return await super.search(param,  ['description','file_name','db_version'],this.table_name, limit, offset);
    }
}

module.exports = BackupsHelper;

