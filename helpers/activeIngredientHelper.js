/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const log = require('electron-log');

class ActiveIngredientHelper extends dbClass {

    constructor() { 
        super();
    }
    fields = [
        "name", 
    "pharmacodynamics",
     "mechanism_of_action", 
     "pharmacokinetics",
     "indications_and_usage",
     "contradictions",
     "drug_interactions_table",
     "warnings_and_cautions",
     "dosage_and_administration",
     "adverse_reactions",
     "information_for_patients",
     "clinical_pharmacology",
     "drug_abuse_and_dependence",
     "teratogenic_effects",
     "geriatric_use",
     "overdosage",
        "pregnancy"]
    table_name = "drug_info";

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
    async search(param, limit = null, offset = 0) {
        return await super.search(param, ['name'], this.table_name, limit, offset, true, 'name');
    }



    


}

module.exports = ActiveIngredientHelper



