

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const OutgoingPayments = sequelize.define("outgoing_payments", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
    date: DataTypes.DATE,
    amount: DataTypes.DOUBLE,
    type: DataTypes.STRING,
    recipient: DataTypes.STRING,
    transaction_id: DataTypes.STRING,
    item_code: DataTypes.STRING,
    notes: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_on: DataTypes.DATE,
},{
  tableName: 'outgoing_payments',
  timestamps: false
});
module.exports = OutgoingPayments;