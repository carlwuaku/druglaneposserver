'use strict';

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Users = sequelize.define("users", {
  role_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    last_login: DataTypes.STRING,
    last_ip: DataTypes.STRING,
    created_on: DataTypes.DATE,
    display_name: DataTypes.STRING,
    active: DataTypes.INTEGER,
    last_seen: DataTypes.STRING,
    phone: DataTypes.STRING
},{
  tableName: 'users',
  timestamps: false
});

module.exports = Users;