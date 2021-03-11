'use strict';



const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const OnlineBackups = sequelize.define("online_backups", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
  date: DataTypes.DATE,
  code: DataTypes.STRING,
  invoice: DataTypes.STRING,
  created_on: DataTypes.DATE,
  created_by: DataTypes.INTEGER,
  sender: DataTypes.INTEGER
},{
  tableName: 'online_backups',
  timestamps: false
});
module.exports = OnlineBackups;
