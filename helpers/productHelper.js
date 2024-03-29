
const dbClass = require('./database');
const log = require('electron-log');

class ProductHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["price", "unit", "min_stock", "max_stock",
        "expiry", "cost_price",
        "status",
        "name", "category", "notes", "barcode", "size", 
        "shelf","description","preferred_vendor",
    "markup", "active_ingredients","drug_info"]
    table_name = "products";

    not_string_fields = ["id", "price", "min_stock", "max_stock", "cost_price","markup"];
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
        return await super.search(param, ['name','barcode'], this.table_name, limit, offset, true, 'name');
    }

    /**
     * calculate the current stock of an item amt sold, bought, transferred in and out, and stock adjustment
     * @param {Number} id 
     * @returns {Number} count
     */
    async calculateCurrentStock(id) {
        try {
            await this.getConnection();
            let sales = require('./salesDetailsHelper');
            let salehelper = new sales();
            let purchases = require('./purchaseDetailsHelper');
            let purchasehelper = new purchases();
            let stocker = require('./stockAdjustmentHelper');
            let stockhelper = new stocker();

            let trans = require('./transferDetailsHelper');
            let transhelper = new trans();
            let rt = require('./receivedTransferDetailsHelper');

            let rthelper = new rt();

            let last_adjustment = await stockhelper.getLastAdjustment(id);
            let last_date = last_adjustment == undefined ? '' : last_adjustment.created_on;
            let last_quantity = last_adjustment == undefined ? 0 : last_adjustment.quantity_counted;

            let amt_sold = await salehelper.getTotalQuantityDateTime(id, last_date)
            let amt_purchased = await purchasehelper.getTotalQuantityDateTime(id, last_date)
            let amt_transferred = await transhelper.getTotalQuantityDateTime(id, last_date)
            let amt_received = await rthelper.getTotalQuantityDateTime(id, last_date)

            let quantity = last_quantity + amt_purchased + amt_received - amt_sold - amt_transferred;
            return quantity;
        } catch (error) {
            // console.log(error);
            throw new Error(error)
        }


    }


    /**
     * recalculate the stock of the product id
     * @param {Number} id product id
     * @param {Number} new_value a value to be added to the stock. if null, the system autocalculates the 
     * new stock. Otherwise it uses new_value to add to stock
     */
    async refreshCurrentStock(id, new_value = null) {
        try {
            if(new_value == null){
                let stock = await this.calculateCurrentStock(id);
                // console.log("stock updated to ",stock)
            await this.updateField('current_stock', stock, ` id = ${id}`, this.table_name);
            }
            else{
                await this.updateField('current_stock', `stock + ${new_value}`, ` id = ${id}`, this.table_name);

            }
           
            
        } catch (error) {
            throw new Error(error)
        }
    }
    


     /**
     * get items with duplicate names in the db
     * @returns {Array} an array of objects
     */
    async getDuplicates() {
        try {
            let objects = await this.runQuery(` select id, count(id) as total, name from products group by name having total > 1;`);
            return objects;
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = ProductHelper



