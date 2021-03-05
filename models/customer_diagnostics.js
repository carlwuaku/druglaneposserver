'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const CustomerDiagnostics = sequelize.define("customer_diagnostics", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customer: DataTypes.INTEGER,
  test: DataTypes.STRING,
  data: DataTypes.STRING,
  comments: DataTypes.STRING,
  date: DataTypes.DATE,
  created_on: DataTypes.DATE
},{
  tableName: 'customer_diagnostics',
});
module.exports = CustomerDiagnostics;