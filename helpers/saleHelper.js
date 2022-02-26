/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const log = require('electron-log');

class SalesHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["customer", "code", "status", "created_by", "created_on", "date", "amount_paid",
        "payment_method", "insurance_provider", "creditor_name", "insurance_member_id",
        "insurance_member_name", "momo_reference", "discount", "shift","tax"]
    table_name = "sales";
    details_table_name = "sales_details"

    not_string_fields = ["id", "amount_paid", "discount"];
    //the fields which are not strings. used in prep_data

    prep_data(data) {
        return super.prep_data(data, this.fields, this.not_string_fields)
    }

    /**
     * search the sales table for a string or comma-separated strings
     * @param {string} param 
     * @param {Number} limit 
     * @param {Number} offset 
     * @returns {Array}
     */
    async search(param, limit = null, offset = 0) {
        return await super.search(param, ['code'], this.table_name, limit, offset);
    }

    /**
     * get total discount for a period
     * @param {String} start the start date
     * @param {String} end the end date
     */
    async getTotalDiscount(start, end) {
        let sql = `select sum(discount) as total from ${this.table_name}  `;
        if (start != '') {
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
    * get total discount by a user for a period
    * @param {String} start the start date
    * @param {String} end the end date
    * @param {String} user the user id
    */
    async getUserDiscount(user, start, end) {
        let sql = `select sum(discount) as total from ${this.table_name} where created_by = ${user} `;
        if (start != '') {
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
    * get total discount by a user for a payment method for a period
    * @param {String} start the start date
    * @param {String} payment_method the payment method
    * @param {String} end the end date
    * @param {String} user the user id
    */
     async getUserPaymentMethodDiscount(user,payment_method, start, end) {
        let sql = `select sum(discount) as total from ${this.table_name} where created_by = ${user}
         and payment_method = '${payment_method}' `;
        if (start != '') {
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
    * get total discount by a shift for a payment method for a period
    * @param {String} start the start date
    * @param {String} payment_method the payment method
    * @param {String} end the end date
    * @param {String} shift the shift
    *     */
     async getShiftPaymentMethodDiscount(shift,payment_method, start, end) {
        let sql = `select sum(discount) as total from ${this.table_name} where shift = '${shift}'
         and payment_method = '${payment_method}' `;
        if (start != '') {
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
    * get total discount for a payment method for a period
    * @param {String} start the start date
    * @param {String} end the end date
    * @param {String} payment_method the payment method 
    */
     async getPaymentMethodDiscount(payment_method, start, end) {
        let sql = `select sum(discount) as total from ${this.table_name} where payment_method = '${payment_method}' `;
        if (start != '') {
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
     * get total discount by a shift for a period
     * @param {String} start the start date
     * @param {String} end the end date
     * @param {String} shift the shift
     */
    async getShiftDiscount(shift, start, end) {
        let sql = `select sum(discount) as total from ${this.table_name} where shift = '${shift}' `;
        if (start != '') {
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
     * get total tax for a period
     * @param {String} start the start date
     * @param {String} end the end date
     */
     async getTotalTax(start, end) {
        let sql = `select code, tax from ${this.table_name}  `;
        if (start != '') {
            sql += ` where date >= '${start}' and date <= '${end}' `
        }

        try {
            await this.getConnection();
            let objects = await this.connection.all(sql);
            //foreach, get the total and the tax
            let total = 0;
            for (var i = 0; i < objects.length; i++) {
                let curr = objects[i];
                let products_total = await this.connection.get(`select sum(quantity * price) as total from ${this.details_table_name} where code = '${curr.code}' `);
                total += products_total.total == null ? 0 : (curr.tax/100 * products_total.total)
                //get the total

            }
            return total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
    * get total tax by a user for a period
    * @param {String} start the start date
    * @param {String} end the end date
    * @param {String} user the user id
    */
    async getUserTax(user, start, end) {
        let sql = `select code, tax from ${this.table_name} where created_by = ${user} `;
        if (start != '') {
            sql += ` and date >= '${start}' and date <= '${end}' `
        }

        try {
            await this.getConnection();
            let objects = await this.connection.all(sql);
            //foreach, get the total and the tax
            let total = 0;
            for (var i = 0; i < objects.length; i++) {
                let curr = objects[i];
                let products_total = await this.connection.get(`select sum(quantity * price) as total from ${this.details_table_name} where code = '${curr.code}' `);
                total += products_total.total == null ? 0 : curr.tax/100 * products_total.total
                //get the total

            }
            return total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * get total discount by a shift for a period
     * @param {String} start the start date
     * @param {String} end the end date
     * @param {String} shift the shift
     */
    async getShiftTax(shift, start, end) {
        let sql = `select code, tax from ${this.table_name} where shift = '${shift}' `;
        if (start != '') {
            sql += ` and date >= '${start}' and date <= '${end}' `
        }

        try {
            await this.getConnection();
            let objects = await this.connection.all(sql);
            //foreach, get the total and the tax
            let total = 0;
            for (var i = 0; i < objects.length; i++) {
                let curr = objects[i];
                let products_total = await this.connection.get(`select sum(quantity * price) as total from ${this.details_table_name} where code = '${curr.code}' `);
                total += products_total.total == null ? 0 : curr.tax/100 * products_total.total
                //get the total

            }
            return total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }


    //payment_method = 'Credit' and
    /**
         * get the credit sales for a period
         * @param {String} start the start date
         * @param {String} end the end date
         * @returns {Array} [{customer: any, total: number}]
         */
    async getCreditSales(start = '', end = '', customer='') {
        let sql = `SELECT customer, sum(quantity * price) as total from ${this.table_name} 
         join sales_details on sales.code = sales_details.code where 
        payment_method = 'Credit'  `;
        if (start != '') {
            sql += ` and date >= '${start}' and date <= '${end}' `
        }
        if (customer != '') {
            sql += ` and customer = ${customer} `
        }
        sql += ` group by customer `
        try {
            await this.getConnection();
            let q = await this.connection.all(sql);
            return q;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
         * get the total amount of credit sales for a period
         * @param {String} start the start date
         * @param {String} end the end date
         * @returns {Number} the total amount
         */
    async getTotalCreditSales(start = '', end = '', customer='') {
        let data = await this.getCreditSales(start, end, customer);
        let total = 0;
        data.forEach(element => {
            total += element.total
        });
        return total
    }
}

module.exports = SalesHelper



