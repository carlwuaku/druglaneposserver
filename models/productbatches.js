'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductBatches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductBatches.init({
    batch_number: DataTypes.STRING,
    expiry: DataTypes.DATE,
    barcode: DataTypes.STRING,
    product: DataTypes.INTEGER,
    purchase_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductBatches',
  });
  return ProductBatches;
};