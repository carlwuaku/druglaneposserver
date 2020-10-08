'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class branches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  branches.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    created_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'branches',
  });
  return branches;
};