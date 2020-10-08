'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer_diagnostics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  customer_diagnostics.init({
    customer: DataTypes.INTEGER,
    test: DataTypes.STRING,
    data: DataTypes.STRING,
    comments: DataTypes.STRING,
    date: DataTypes.DATE,
    created_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'customer_diagnostics',
  });
  return customer_diagnostics;
};