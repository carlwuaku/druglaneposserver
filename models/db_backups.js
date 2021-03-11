'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const DbBackups = sequelize.define("db_backups", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  file_name: DataTypes.STRING,
  created_by: DataTypes.STRING,
  description: DataTypes.STRING,
  uploaded: DataTypes.STRING,
  db_version: DataTypes.STRING,
  created_on: DataTypes.DATE
}, {
  tableName: 'db_backups',
  timestamps: false
});
module.exports = DbBackups;