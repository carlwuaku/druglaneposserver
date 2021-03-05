

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const InsuranceProviders = sequelize.define("insurance_providers", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
    name: DataTypes.STRING,
},{
  tableName: 'insurance_providers',
});
module.exports = InsuranceProviders;