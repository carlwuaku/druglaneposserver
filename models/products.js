'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  products.init({
    id: { allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER},
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    category: DataTypes.STRING,
    notes: DataTypes.STRING,
    unit: DataTypes.STRING,
    picture: DataTypes.STRING,
    created_on: DataTypes.STRING,
    max_stock: DataTypes.DOUBLE,
    min_stock: DataTypes.DOUBLE,
    expiry: DataTypes.STRING,
    barcode: DataTypes.STRING,
    current_stock: DataTypes.DOUBLE,
    last_modified: DataTypes.STRING,
    cost_price: DataTypes.DOUBLE,
    size: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};