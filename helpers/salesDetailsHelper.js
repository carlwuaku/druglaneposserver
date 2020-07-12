/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const  log  = require('electron-log');
class SalesDetailsHelper extends dbClass {

   
    fields = ["date", "code", "product", "quantity",
    "price", "cost_price"]
    table_name = "sales_details";
   
    not_string_fields = ["id","product", "quantity","price", "cost_price"];
    //the fields which are not strings. used in prep_data
    constructor() {
        super();
    }
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

    /**
     * get the total quantity of an item sold between some dates
     * @param {Number} id the product id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTotalQuantity(id, start_date='', end_date=''){
        let sql = `select sum(quantity) as total from ${this.table_name} where product = ${id} `;
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;
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
        let sql = `select sum(quantity * price) as total from ${this.table_name} where product = ${id} `;
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;
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
            return q.total == null ? 0 : q.total;
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
            return q.total == null ? 0 : q.total;
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
    async getSaleTotal(code){
        let sql = `select sum(quantity * price) as total from ${this.table_name} where code = '${code}' `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get the total number of items in receipt
     * @param {String} code 
     * @returns {Number} 
     */
    async getNumItems(code){
        let sql = `select count(id) as total from ${this.table_name} where code = '${code}' `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    async getUserSales(start='', end='' ){
        let sql = `select sales.created_by, COUNT(distinct sales_details.code) as num_of_items, sum(price * quantity) as total_amount
        from ${this.table_name} join sales on sales_details.code = sales.code `;
        if(start != ''){
            sql += ` where sales_details.date >= '${start}' and sales_details.date <= '${end}' `
        }
        sql += ` group by created_by `
        try {
            await this.getConnection();
            let q = await this.connection.all(sql);
            return q;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    
    }

    async getSalesByPaymentMethod( method, start='', end='' ){
        let sql = `select sum(price * quantity) as total
        from ${this.table_name} where code in (select code from sales where payment_method = '${method}') `;
        if(start != ''){
            sql += ` and date >= '${start}' and date <= '${end}' `
        }
       
        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    
    }

    /**
     * 
     * @param {Number} user 
     * @param {String} method 
     * @param {String} start 
     * @param {String} end 
     * @returns {Number}
     */
    async getUserSalesByPaymentMethod(user,method, start='', end='' ){
        let sql = `select sum(price * quantity) as total
        from ${this.table_name} where code in (select code from sales where payment_method = '${method}' and created_by = ${user}) `;
        if(start != ''){
            sql += ` and date >= '${start}' and date <= '${end}' `
        }
        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }

    
    }

    async getTotalSales(start, end){
        let sql = `select sum(quantity * price) as total from ${this.table_name}  `;
        if(start != ''){
            sql += ` where date >= '${start}' and date <= '${end}' `
        }

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            console.log(q)
            return q.total == null ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    async getAverageSales(start, end){
        let sql = `select avg(quantity * price) as total from ${this.table_name}  `;
        if(start != ''){
            sql += ` where date >= '${start}' and date <= '${end}' `
        }

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    async getDailySales(start, end){
        let sql = `select sum(quantity * price) as total, date from ${this.table_name}  `;
        if(start != ''){
            sql += ` where date >= '${start}' and date <= '${end}' `
        }
        sql += ` group by date `

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;
        } catch (error) {
            console.log(sql)
            log.error(error);
            throw new Error(error)
        }
    }

 }

module.exports = SalesDetailsHelper


