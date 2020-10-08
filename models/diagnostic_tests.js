'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class diagnostic_tests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  diagnostic_tests.init({
    test_name: DataTypes.STRING,
    parameters: DataTypes.STRING,
    comments: DataTypes.STRING,
    created_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'diagnostic_tests',
  });
  return diagnostic_tests;
};