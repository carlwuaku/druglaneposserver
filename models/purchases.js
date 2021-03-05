'use strict';




const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Purchases = sequelize.define("purchases", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
  vendor: DataTypes.INTEGER,
  date: DataTypes.DATE,
  site: DataTypes.STRING,
  code: DataTypes.STRING,
  status: DataTypes.STRING,
  created_on: DataTypes.DATE,
  created_by: DataTypes.INTEGER,
  invoice: DataTypes.STRING,
  payment_method: DataTypes.STRING,
  amount_paid: DataTypes.DOUBLE,
  last_payment_date: DataTypes.DATE,
},{
  tableName: 'purchases',
});
module.exports = Purchases;


