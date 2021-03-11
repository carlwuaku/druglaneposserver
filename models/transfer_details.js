'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const TransferDetails = sequelize.define("transfer_details", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  product: DataTypes.INTEGER,
  quantity: DataTypes.DOUBLE,
  price: DataTypes.DOUBLE,
  created_on: DataTypes.DATE,
  created_by: DataTypes.INTEGER,
  code: DataTypes.STRING,
  date: DataTypes.DATE,
  expiry: DataTypes.DATE,
  cost_price: DataTypes.DOUBLE
},{
  tableName: 'transfer_details',
  timestamps: false
});
module.exports = TransferDetails;
