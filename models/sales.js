'use strict';


const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Sales = sequelize.define("sales", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
  customer: DataTypes.STRING,
  code: DataTypes.STRING,
  created_by: DataTypes.INTEGER,
  created_on: DataTypes.DATE,
  amount_paid: DataTypes.DOUBLE,
  payment_method: DataTypes.STRING,
  momo_reference: DataTypes.STRING,
  insurance_provider: DataTypes.STRING,
  insurance_member_name: DataTypes.STRING,
  insurance_member_id: DataTypes.STRING,
  creditor_name: DataTypes.STRING,
  credit_paid: DataTypes.INTEGER,
  discount: DataTypes.DOUBLE,
  shift: DataTypes.STRING,
},{
  tableName: 'sales',
  timestamps: false
});
module.exports = Sales;
