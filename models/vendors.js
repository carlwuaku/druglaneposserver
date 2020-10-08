'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vendors.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    code: DataTypes.STRING,
    email: DataTypes.STRING,
    notes: DataTypes.STRING,
    created_on: DataTypes.DATE,
    legacy_id: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'vendors',
  });
  return vendors;
};