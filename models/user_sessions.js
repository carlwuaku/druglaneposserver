'use strict';

const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const UserSessions = sequelize.define("user_sessions", {
  user_id: DataTypes.INTEGER,
    token: DataTypes.STRING,
    created_on: {type: DataTypes.DATE,
      defaultValue: Sequelize.NOW},
    expires: DataTypes.DATE
},{
  tableName: 'user_sessions',
  timestamps: false
});

module.exports = UserSessions;

