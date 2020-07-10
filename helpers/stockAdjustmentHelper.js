/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const log = require('electron-log');

class StockAdjustmentHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["date", "product", "quantity_counted", "quantity_expected", "current_price", 
        
    "created_by","cost_price","code","category","size","expiry"]
    table_name = "stock_adjustment";
    sessions_table_name = 'stock_adjustment_sessions'
   
    not_string_fields = ["id","product", "quantity_counted","quantity_expected",
     "current_price","cost_price"];
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
        return await super.search(param, ['code'], limit, offset);
    }

    async getLastAdjustment(id){
        let sql = `select * from ${this.table_name} where product = ${id} order by created_on desc`
        try {
            await this.getConnection();
            let q = await this.connection.get(sql);

            return q;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

     /**
     * get the total quantity of an item sold between some dates
     * @param {Number} id the product id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTotalQuantity(id, start_date='', end_date=''){
        let sql = `select sum(quantity_counted) as total from ${this.table_name} where product = ${id} `;
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total quantity*price of an item sold between some dates
     * @param {Number} id the product id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTotalAmount(id, start_date='', end_date=''){
        let sql = `select sum(quantity_counted * current_price) as total from ${this.table_name} where product = ${id} `;
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            
            return q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total quantity of an item sold between some datetimes
     * @param {Number} id the product id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTotalQuantityDateTime(id, start_date='', end_date=''){
        let sql = `select sum(quantity) as total from ${this.table_name} where product = ${id} `;
        if(start_date != ''){
            sql += ` and created_on >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and created_on <= '${end_date}' `
        }

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total quantity*price of an item sold between some datetimes
     * @param {Number} id the product id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTotalAmount(id, start_date='', end_date=''){
        let sql = `select sum(quantity * price) as total from ${this.table_name} where product = ${id} `;
        if(start_date != ''){
            sql += ` and created_on >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and created_on <= '${end_date}' `
        }

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total difference in stockadjustment
     * @param {String} code 
     * @returns {Number} 
     */
    async getSessionTotalDifference(code){
        let sql = `select sum((quantity_counted - quantity_expected) * current_price) as total from ${this.table_name} where code = '${code}' `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total number of items in stockadjustment
     * @param {String} code 
     * @returns {Number} 
     */
    async getSessionNumItems(code){
        let sql = `select count(id) as total from ${this.table_name} where code = '${code}' `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

     /**
     * get the total number of items in negatives stockadjustment
     * @param {String} code 
     * @returns {Number} 
     */
    async getNumberNegative(code){
        let sql = `select count(id) as total from ${this.table_name} where code = '${code}' and quantity_counted < quantity_expected `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }


    /**
     * get the total number of items in negatives stockadjustment
     * @param {String} code 
     * @returns {Number} 
     */
    async getNumberPositive(code){
        let sql = `select count(id) as total from ${this.table_name} where code = '${code}' and quantity_counted > quantity_expected `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

       /**
     * get the total number of items in neutral stockadjustment
     * @param {String} code 
     * @returns {Number} 
     */
    async getNumberNeutral(code){
        let sql = `select count(id) as total from ${this.table_name} where code = '${code}' and quantity_counted = quantity_expected `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total amount where difference is negative in stockadjustment
     * @param {String} code 
     * @returns {Number} 
     */
    async getTotalNegative(code){
        let sql = `select sum((quantity_counted - quantity_expected) * current_price) as total from ${this.table_name} where code = '${code}' and quantity_counted < quantity_expected `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total amount where difference is positive in stockadjustment
     * @param {String} code 
     * @returns {Number} 
     */
    async getTotalPositive(code){
        let sql = `select sum((quantity_counted - quantity_expected) * current_price) as total from ${this.table_name} where code = '${code}' and quantity_counted > quantity_expected `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }


    ////////////////////////////////
    /**
     * get the total difference in stockadjustment
     * by dates
     * @param {String} start
     * @param {String} end
     * @returns {Number} 
     */
    async getTotalDifferenceByDates(start, end){
        let sql = `select sum((quantity_counted - quantity_expected) * current_price) as total from ${this.table_name} where date >= '${start}' and date <= '${end}' `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total number of items in stockadjustment
     * by dates
     * @param {String} start
     * @param {String} end
     * @returns {Number} 
     */
    async getNumItemsByDates(start, end){
        let sql = `select count(id) as total from ${this.table_name} where date >= '${start}' and date <= '${end}' `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }


    /**
     * get the total number of items in negatives stockadjustment
     * by dates
     * @param {String} start
     * @param {String} end
     * @returns {Number} 
     */
    async getNumberNegativeByDates(start, end){
        let sql = `select count(id) as total from ${this.table_name} where date >= '${start}' and date <= '${end}'  and quantity_counted < quantity_expected `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }


    /**
     * get the total number of items in negatives stockadjustment
     * by dates
     * @param {String} start
     * @param {String} end
     * @returns {Number} 
     */
    async getNumberPositiveByDates(start, end){
        let sql = `select count(id) as total from ${this.table_name} where date >= '${start}' and date <= '${end}'  and quantity_counted > quantity_expected `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

       /**
     * get the total number of items in neutral stockadjustment
     * by dates
     * @param {String} start
     * @param {String} end
     * @returns {Number} 
     */
    async getNumberNeutralByDates(start, end){
        let sql = `select count(id) as total from ${this.table_name} where date >= '${start}' and date <= '${end}'  and quantity_counted = quantity_expected `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total amount where difference is negative in stockadjustment
     * by dates
     * @param {String} start
     * @param {String} end
     * @returns {Number} 
     */
    async getTotalNegativeByDates(start, end){
        let sql = `select sum((quantity_counted - quantity_expected) * current_price) as total from ${this.table_name} where date >= '${start}' and date <= '${end}'  and quantity_counted < quantity_expected `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total amount where difference is positive in stockadjustment
     * by dates
     * @param {String} start
     * @param {String} end
     * @returns {Number} 
     */
    async getTotalPositiveByDates(start, end){
        let sql = `select sum((quantity_counted - quantity_expected) * current_price) as total from ${this.table_name} where date >= '${start}' and date <= '${end}'  and quantity_counted > quantity_expected `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }
 }

module.exports = StockAdjustmentHelper



