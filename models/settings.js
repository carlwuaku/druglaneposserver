'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  settings.init({
    name: DataTypes.STRING,
    module: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'settings',
  });
  return settings;
};