'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transfer_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  transfer_details.init({
    product: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    created_on: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    code: DataTypes.STRING,
    date: DataTypes.DATE,
    expiry: DataTypes.DATE,
    cost_price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'transfer_details',
  });
  return transfer_details;
};