'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Branches = sequelize.define("branches", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    created_on: DataTypes.DATE
},{
  tableName: 'branches',
});
module.exports = Branches;