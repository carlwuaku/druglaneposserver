'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");


const DailyRecords = sequelize.define("daily_records", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  date: DataTypes.DATE,
  amount: DataTypes.DOUBLE,
  pos: DataTypes.DOUBLE,
  cheque: DataTypes.DOUBLE,
  insurance: DataTypes.DOUBLE,
  cash: DataTypes.DOUBLE,
  momo: DataTypes.DOUBLE,
  other: DataTypes.DOUBLE,
  credit: DataTypes.DOUBLE,
  shift: DataTypes.STRING,
  created_by: DataTypes.INTEGER,
  created_on: DataTypes.DATE
}, {
  tableName: 'daily_records',
  timestamps: false
});



module.exports = DailyRecords