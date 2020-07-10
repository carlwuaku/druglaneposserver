
const dbClass = require('./database');
class ActivityHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["activity_id", "user_id", "activity", "module"]
    table_name = "activities";
    
    not_string_fields = ["activity_id", "user_id"];//the fields which are not strings. used in prep_data

    prep_data(data) {
        return super.prep_data(data, this.fields, this.not_string_fields)
    }

    async log(user_id, activity, module = "'System'"){
        try {
           await this.insert({user_id: user_id, activity: activity, module: module}, this.table_name)

        } catch (error) {
            throw new Error(error)
        }
    }

    

}

module.exports = ActivityHelper
