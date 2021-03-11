'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const DbSync = sequelize.define("db_sync", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  type: DataTypes.STRING,
  action: DataTypes.STRING,
  data: DataTypes.STRING,
  created_on: DataTypes.DATE
}, {
  tableName: 'db_sync',
  timestamps: false
});
module.exports = DbSync;