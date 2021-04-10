/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const log = require('electron-log');

class DailyRecordsHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["date", "amount", "shift",
     "created_by", "created_on","momo","cash","cheque","insurance","other","credit","pos"]
    table_name = "dailyRecords";
   
    not_string_fields = ["id"];
    //the fields which are not strings. used in prep_data

    prep_data(data) {
        return super.prep_data(data, this.fields, this.not_string_fields)
    }


    /**
     * get the total amount paid to a vendor
     * @param {Number} id the vendor id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTotal(start_date='', end_date=''){
        let sql = `select sum(amount) as total from ${this.table_name} where 1  `;
        
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total amount entered for each day
     * @param {String} date optional
     * @returns {Object} 
     */
    async getTotalSummary(date){
        let sql = `select sum(cash) as cash, sum(momo) as momo, sum(pos) as pos,
         sum(cheque) as cheque, sum(other) as other, sum(credit) as credit
         , sum(insurance) as insurance from ${this.table_name} where date = '${date}'  `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }
 

 }

module.exports = DailyRecordsHelper



