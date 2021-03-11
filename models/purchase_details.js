'use strict';



const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const PurchaseDetails = sequelize.define("purchase_details", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
  product: DataTypes.INTEGER,
  quantity: DataTypes.DOUBLE,
  price: DataTypes.DOUBLE,
  unit: DataTypes.STRING,
  created_on: DataTypes.DATE,
  created_by: DataTypes.INTEGER,
  markup: DataTypes.DOUBLE,
  code: DataTypes.STRING,
  date: DataTypes.DATE,
  selling_price: DataTypes.DOUBLE
},{
  tableName: 'purchase_details',
  timestamps: false
});
module.exports = PurchaseDetails;
