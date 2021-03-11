'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const StockAdjustmentSessions = sequelize.define("stock_adjustment_sessions", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
  date: DataTypes.DATE,
  code: DataTypes.STRING,
  created_on: DataTypes.DATE,
  created_by: DataTypes.INTEGER
},{
  tableName: 'stock_adjustment_sessions',
  timestamps: false
});
module.exports = StockAdjustmentSessions;

