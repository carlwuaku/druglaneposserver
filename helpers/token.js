/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
        const dbClass = require('./database');
        const log = require('electron-log');
        
        class TokenHelper extends dbClass {
        
            constructor() {
                super();
            }
            fields = ["name", "token"]
            table_name = "tokens";
           
            not_string_fields = ["id"];
            //the fields which are not strings. used in prep_data
        
            prep_data(data) {
                return super.prep_data(data, this.fields, this.not_string_fields)
            }
        
        
            
         
        
         }
        
        module.exports = TokenHelper
        
        
        
        