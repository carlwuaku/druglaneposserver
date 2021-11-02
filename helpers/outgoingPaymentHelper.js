/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const log = require('electron-log');

class OutgoingPaymentHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["date", "amount", "type",
     "item_code", "recipient","transaction_id","payment_method",
     "notes"]
    table_name = "outgoing_payments";
   
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
        return await super.search(param, ['transaction_id','item_code'],this.table_name, limit, offset);
    }

    /**
     * get the total amount paid to a vendor
     * @param {Number} id the vendor id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTotalPaidToVendor(id, start_date='', end_date=''){
        let sql = `select sum(amount) as total from ${this.table_name} where 
        type = 'Credit Purchase Payment' `;
        if(id != '' && id != null && id != undefined && id != 'undefined'){
            sql += ` and recipient = ${id}  `
        }
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

    async getTotalPaid(recipient='', start_date='', end_date=''){
        let sql = `select sum(amount) as total from ${this.table_name} where
         type = 'Credit Purchase Payment' `;
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }
        if(recipient != ''){
            sql += ` and recipient >= ${recipient} `
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

    async getAllTotalPaid(recipient='', start_date='', end_date=''){
        let sql = `select sum(amount) as total from ${this.table_name} where type != 'Credit Purchase Payment'
          `;
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }
        if(recipient != ''){
            sql += ` and recipient >= ${recipient} `
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
     * 
     * @param {string} start_date  start date
     * @param {string} end_date 
     * @returns {number}
     */
    async getPaymentsGrouped( start_date='', end_date=''){
        let sql = `select type, sum(amount) as total from ${this.table_name}
         where type != 'Credit Purchase Payment'
          `;
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }
        sql += ` group by type  `

        try {
            await this.getConnection();
            let q = await this.connection.all(sql);
            return q;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

 }

module.exports = OutgoingPaymentHelper



