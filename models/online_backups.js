

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const OnlineBackups = sequelize.define("online_backups", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
    date: DataTypes.DATE,
    url: DataTypes.STRING,
    created_on: DataTypes.DATE,
},{
  tableName: 'online_backups',
});
module.exports = OnlineBackups;