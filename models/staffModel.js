const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require("../helpers/sequelize");

const Users = db.define('Users', {
  id: {
    primaryKey: true,
    type: DataTypes.BIGINT,
    autoIncrement: true,

  },
  role_id: {
    type: DataTypes.BIGINT
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password_hash: {
    type: DataTypes.STRING
  },
  last_login: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  created_on:{
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  display_name: {
    type: DataTypes.STRING
  },
  active: {
    type:DataTypes.SMALLINT
  },
  last_seen: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull:true
  }


});
module.exports = Users;