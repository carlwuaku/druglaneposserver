'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class received_transfers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  received_transfers.init({
    date: DataTypes.DATE,
    code: DataTypes.STRING,
    invoice: DataTypes.STRING,
    created_on: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    sender: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'received_transfers',
  });
  return received_transfers;
};