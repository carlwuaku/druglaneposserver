'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock_adjustment_sessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  stock_adjustment_sessions.init({
    date: DataTypes.DATE,
    code: DataTypes.STRING,
    created_on: DataTypes.DATE,
    created_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stock_adjustment_sessions',
  });
  return stock_adjustment_sessions;
};