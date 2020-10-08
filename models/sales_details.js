'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sales_details.init({
    date: DataTypes.DATE,
    product: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    quantity: DataTypes.DOUBLE,
    created_on: DataTypes.DATE,
    code: DataTypes.STRING,
    cost_price: DataTypes.DOUBLE,
    created_by: DataTypes.INTEGER,
    customer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sales_details',
  });
  return sales_details;
};