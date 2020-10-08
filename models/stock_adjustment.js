'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock_adjustment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  stock_adjustment.init({
    date: DataTypes.DATE,
    product: DataTypes.INTEGER,
    quantity_counted: DataTypes.DOUBLE,
    quantity_expected: DataTypes.DOUBLE,
    current_price: DataTypes.DOUBLE,
    created_by: DataTypes.INTEGER,
    code: DataTypes.STRING,
    created_on: DataTypes.DATE,
    category: DataTypes.STRING,
    size: DataTypes.STRING,
    expiry: DataTypes.DATE,
    comments: DataTypes.STRING,
    quantity_expired: DataTypes.DOUBLE,
    quantity_damaged: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'stock_adjustment',
  });
  return stock_adjustment;
};