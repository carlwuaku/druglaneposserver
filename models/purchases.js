'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  purchases.init({
    vendor: DataTypes.INTEGER,
    date: DataTypes.DATE,
    site: DataTypes.STRING,
    code: DataTypes.STRING,
    status: DataTypes.STRING,
    created_on: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    invoice: DataTypes.STRING,
    payment_method: DataTypes.STRING,
    amount_paid: DataTypes.DOUBLE,
    last_payment_date: DataTypes.DATE,
    deleted: DataTypes.INTEGER,
    invoice_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'purchases',
  });
  return purchases;
};