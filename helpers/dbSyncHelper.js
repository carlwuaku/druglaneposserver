
const dbClass = require('./database');
const log = require('electron-log');

class DbSyncHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["type", "action", "data"]
    table_name = "db_sync";
   
    not_string_fields = ["id"];
    //the fields which are not strings. used in prep_data

    prep_data(data) {
        return super.prep_data(data, this.fields, this.not_string_fields)
    }


 }

module.exports = DbSyncHelper