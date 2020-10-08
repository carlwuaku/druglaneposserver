'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transfers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  transfers.init({
    receiver: DataTypes.INTEGER,
    date: DataTypes.DATE,
    code: DataTypes.STRING,
    status: DataTypes.STRING,
    created_on: DataTypes.DATE,
    created_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transfers',
  });
  return transfers;
};