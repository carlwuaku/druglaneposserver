const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const IncomingPayments = sequelize.define("incoming_payments", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    date: DataTypes.DATE,
    amount: DataTypes.DOUBLE,
    type: DataTypes.STRING,
    payer: DataTypes.STRING,
    payment_method: DataTypes.STRING,
    transaction_id: DataTypes.STRING,
    item_code: DataTypes.STRING,
    notes: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_on: DataTypes.DATE
},{
  tableName: 'incoming_payments',
});
module.exports = IncomingPayments;