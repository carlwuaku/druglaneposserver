/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const log = require('electron-log');

class PurchaseDetailsHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["date", "code", "product", "quantity",
    "price", "unit", "markup","selling_price","created_by","created_on"]
    table_name = "purchase_details";
   
    not_string_fields = ["id","quantity","product", "price", "markup", "selling_price"];
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

     /**
     * get the total purchased of an item sold between some dates
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
    async getTotalAmountDateTime(id, start_date='', end_date=''){
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
    async getTotal(code){
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

    /**
     * Get the total amount purchased from some vendor (optional) using credit, cash or prepaid
     * @param {String} start_date 
     * @param {String} end_date 
     * @param {String} payment_method 
     * @param {String} vendor 
     */
    async getTotalPurchasedByDates(start_date, end_date, payment_method = '', vendor=''){
        
        let sql = `select sum(quantity * price) as total from ${this.table_name}
          where created_on >= '${start_date}'  and created_on <= '${end_date}' `;
        if(payment_method != '' && vendor == ''){
            sql += ` and code in (select code from purchases where payment_method = '${payment_method}') `
        }
        if(vendor != '' && payment_method == ''){
            sql += ` and code in (select code from purchases where vendor = '${vendor}') `
        }

        if(vendor != '' && payment_method != ''){
            sql += ` and code in (select code from purchases where vendor = '${vendor}' and payment_method = '${payment_method}') `
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
     * get the total quantity of an items bought from a vendor
     * @param {Number} id the vendor id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTotalAmountFromVendor(id, start_date='', end_date=''){
        let sql = `select sum(quantity * price) as total from ${this.table_name} 
        where code in (select code from purchases where vendor = ${id} `;
        
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }

        sql += ` ) `

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
     * get the total quantity of an items bought from a vendor
     * @param {Number} id the vendor id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTotalCreditAmountFromVendor(id, start_date='', end_date=''){
        let sql = `select sum(quantity * price) as total from ${this.table_name} 
        where code in (select code from purchases where vendor = ${id} and payment_method = 'Credit' `;
        
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }
        sql += ` ) `
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q.total == null ? 0 : q.total;;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    async getTotalPurchase(start, end){
        let sql = `select sum(quantity * price) as total from ${this.table_name}  `;
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

    async getTotalPurchaseSelling(start, end){
        let sql = `select sum(quantity * selling_price) as total from ${this.table_name}  `;
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

    /**
     * get the monthly quantities purchased for the product
     * @param {String} id the product id
     * @param {string} start_date the start date
     * @param {string} end_date the end_date
     */
    async getProductMonthlyQuantity(id, start_date='', end_date=''){
        let sql = `select sum(quantity) as total, strftime("%m-%Y", date) as 'month_year' from ${this.table_name} where product = ${id} 
        `;
        if(start_date != ''){
            sql += ` and date >= '${start_date}' `
        }

        if(end_date != ''){
            sql += ` and date <= '${end_date}' `
        }
        sql += ` group by strftime("%m-%Y", date) `
        try {
            // console.log(sql)
            await this.getConnection();
            let q = await this.connection.all(sql);
            
            return q;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    
    /**
     * get the vendor the item has been purchased from most
     * @param {Number} id the product id
     * @param {String} start_date optional
     * @param {String} end_date optional
     * @returns {Number} 
     */
    async getTopVendor(id, start_date='', end_date=''){
        //get all the vendors
        //get the total sold for each of them

        let sql1 = `select * from vendors;`;
        
        
        

        try {
            await this.getConnection();
            let vendors = await this.connection.all(sql1);
            if(vendors.length < 1){
                return {"id": "n/a", "name": "n/a"}
            }
            
            for (var i = 0; i < vendors.length; i++) {
                //get the total for each vendor
                let sql2 = `select sum(quantity) as total from purchase_details where code in 
                (select code from purchases where vendor = ${vendors[i].id} )
                `;
                // if(start_date != ''){
                //     sql += ` and date >= '${start_date}' `
                // }
        
                // if(end_date != ''){
                //     sql += ` and date <= '${end_date}' `
                // }
        
                // sql += ` ) `
                let q2 = await this.connection.get(sql2);
                vendors[i].total =  q2.total == null ? 0 : q2.total;
            }
            let key = "total"
            let order = -1 //for desc
            //sort the items and pick the top person
            vendors.sort((leftSide, rightSide) => {
                if (leftSide[key] < rightSide[key]) return -1 * order;
                if (leftSide[key] > rightSide[key]) return 1 * order;
                return 0;
              });
              return vendors[0];
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }
 }
 

module.exports = PurchaseDetailsHelper



