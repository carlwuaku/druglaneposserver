/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const log = require('electron-log');

class StockValueHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["date", "selling_value", "cost_value", "last_modified", 
        
    "created_on"]
    table_name = "stock_values";
    sessions_table_name = 'stock_adjustment_sessions'
   
    not_string_fields = ["id","selling_value", "cost_value"];
    //the fields which are not strings. used in prep_data

    prep_data(data) {
        return super.prep_data(data, this.fields, this.not_string_fields)
    }

    /**
     * get the stock x price of all items
     * 
     */
    async getSellingValue() {
        let sql = `select 
        sum(current_stock * price) as total from products where price 
        is not null `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }

       
    }

    async getStockValueByDate(date) {
        let sql = `select 
        selling_value from stock_values where date <= '${date}'`;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.selling_value;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }

       
    }

    async getStockCostValueByDate(date) {
        let sql = `select 
        cost_value from stock_values where date <= '${date}' order by date desc `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.cost_value;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }

       
    }

    async getCostValue() {
        let sql = `select 
        sum(current_stock * cost_price) as total from products where cost_price 
        is not null `;
        

        try {
            await this.getConnection();
            let q = await this.connection.get(sql);
            return q == undefined ? 0 : q.total;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }

       
    }

    async updateStockValue(date='') {
        //check if the value exists for the date already
        if(date == ''){
            date = this.getToday();
        }
        let now = this.getToday('timestamp')
        
        try {
            await this.getConnection();
            let cost = await this.getCostValue();
            let selling = await this.getSellingValue();
            let query = `insert or replace into ${this.table_name} (date, selling_value, cost_value, 
                last_modified) values ('${date}', ${selling}, ${cost}, '${now}')`;

               
    

            let res = await this.connection.run(query);


            return res.lastID;
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }

       
    }

 }

module.exports = StockValueHelper



