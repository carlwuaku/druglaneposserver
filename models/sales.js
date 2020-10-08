'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sales.init({
    customer: DataTypes.STRING,
    code: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_on: DataTypes.DATE,
    amount_paid: DataTypes.DOUBLE,
    payment_method: DataTypes.STRING,
    momo_reference: DataTypes.STRING,
    insurance_provider: DataTypes.STRING,
    insurance_member_name: DataTypes.STRING,
    insurance_member_id: DataTypes.STRING,
    creditor_name: DataTypes.STRING,
    credit_paid: DataTypes.INTEGER,
    discount: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'sales',
  });
  return sales;
};