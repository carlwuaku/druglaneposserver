'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Vendors = sequelize.define("vendors", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: DataTypes.STRING,
  location: DataTypes.STRING,
  phone: DataTypes.STRING,
  code: DataTypes.STRING,
  email: DataTypes.STRING,
  notes: DataTypes.STRING,
  created_on: DataTypes.DATE,
  legacy_id: DataTypes.STRING
},{
  tableName: 'vendors',
  timestamps: false
});
module.exports = Vendors;

