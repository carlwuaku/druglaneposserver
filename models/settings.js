'use strict';




const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Settings = sequelize.define("settings", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: DataTypes.STRING,
    module: DataTypes.STRING,
    value: DataTypes.STRING
},{
  tableName: 'settings',
  timestamps: false
});
module.exports = Settings;

