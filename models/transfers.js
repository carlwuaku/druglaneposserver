'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Transfers = sequelize.define("transfers", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  receiver: DataTypes.INTEGER,
  date: DataTypes.DATE,
  code: DataTypes.STRING,
  status: DataTypes.STRING,
  created_on: DataTypes.DATE,
  created_by: DataTypes.INTEGER
},{
  tableName: 'transfers',
});
module.exports = Transfers;
