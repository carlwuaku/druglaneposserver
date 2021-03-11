

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Refills = sequelize.define("refills", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
    product: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    status: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
    customer_name: DataTypes.STRING,
    created_on: DataTypes.DATE,
},{
  tableName: 'refills',
  timestamps: false
});
module.exports = Refills;