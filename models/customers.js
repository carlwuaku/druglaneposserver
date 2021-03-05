'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Customers = sequelize.define("customers", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: DataTypes.STRING,
  sex: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  location: DataTypes.STRING,
  created_on: DataTypes.DATE
}, {
  tableName: 'customers',
});
module.exports = Customers;