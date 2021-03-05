

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const StockAdjustmentPending = sequelize.define("stock_adjustment_pending", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
  date: DataTypes.DATE,
  product: DataTypes.INTEGER,
  quantity_counted: DataTypes.DOUBLE,
  quantity_expected: DataTypes.DOUBLE,
  current_price: DataTypes.DOUBLE,
  created_by: DataTypes.INTEGER,
  code: DataTypes.STRING,
  created_on: DataTypes.DATE,
  category: DataTypes.STRING,
  size: DataTypes.STRING,
  expiry: DataTypes.DATE,
  comments: DataTypes.STRING,
  quantity_expired: DataTypes.DOUBLE,
  quantity_damaged: DataTypes.DOUBLE,
  shelf: DataTypes.STRING,
  unit:DataTypes.STRING
},{
  tableName: 'stock_adjustment_pending',
});
module.exports = StockAdjustmentPending;
