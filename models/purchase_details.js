'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  purchase_details.init({
    product: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    unit: DataTypes.STRING,
    created_on: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    markup: DataTypes.DOUBLE,
    code: DataTypes.STRING,
    date: DataTypes.DATE,
    selling_price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'purchase_details',
  });
  return purchase_details;
};