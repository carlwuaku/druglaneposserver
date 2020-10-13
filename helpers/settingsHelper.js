const dbClass = require('./database');
const log = require('electron-log');

class SettingsHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["id", "name", "module", "value"]
    insert_fields = ["name", "module", "value"]
    table_name = "settings";
    not_string_fields = ["id"];//the fields which are not strings. used in prep_data

    prep_data(data) {
        return super.prep_data(data, this.fields, this.not_string_fields)
    }

  /**
   * Return the value of a setting by name
   * @param {string} name 
   */
    async getSetting(name){
       let q = await this.getItem(`name = ${name}`, this.table_name);
        if(q == undefined){
            return null;
        }
        return q.value;
    }

    async saveSetting(name, value){

    }


}

module.exports = SettingsHelper