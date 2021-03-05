

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const StockValues = sequelize.define("stock_values", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
    date: DataTypes.DATE,
    last_modified: DataTypes.DATE,
    selling_value: DataTypes.DOUBLE,
    cost_value: DataTypes.DOUBLE,
    created_on: DataTypes.DATE,
},{
  tableName: 'stock_values',
});
module.exports = StockValues;