'use strict';



const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Products = sequelize.define("products", {
  id: { allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER},
  name: DataTypes.STRING,
  price: DataTypes.DOUBLE,
  category: DataTypes.STRING,
  notes: DataTypes.STRING,
  unit: DataTypes.STRING,
  picture: DataTypes.STRING,
  created_on: DataTypes.STRING,
  max_stock: DataTypes.DOUBLE,
  min_stock: DataTypes.DOUBLE,
  expiry: DataTypes.STRING,
  barcode: DataTypes.STRING,
  current_stock: DataTypes.DOUBLE,
  last_modified: DataTypes.STRING,
  cost_price: DataTypes.DOUBLE,
  size: DataTypes.STRING,
  description: DataTypes.STRING,
  status: DataTypes.INTEGER,
  shelf: DataTypes.STRING
},{
  tableName: 'products',
  timestamps: false
});
module.exports = Products;
