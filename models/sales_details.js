'use strict';



const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const SalesDetails = sequelize.define("sales_details", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  date: DataTypes.DATE,
  product: DataTypes.INTEGER,
  price: DataTypes.DOUBLE,
  quantity: DataTypes.DOUBLE,
  created_on: DataTypes.DATE,
  code: DataTypes.STRING,
  cost_price: DataTypes.DOUBLE,
},{
  tableName: 'sales_details',
});
module.exports = SalesDetails;
