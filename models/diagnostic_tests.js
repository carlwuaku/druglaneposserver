'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const DiagnosticTests = sequelize.define("diagnostic_tests", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  test_name: DataTypes.STRING,
    parameters: DataTypes.STRING,
    comments: DataTypes.STRING,
    created_on: DataTypes.DATE
}, {
  tableName: 'diagnostic_tests',
});
module.exports = DiagnosticTests;