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


// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class user_sessions extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   user_sessions.init({
//     user_id: DataTypes.INTEGER,
//     token: DataTypes.STRING,
//     created_on: DataTypes.DATE,
//     expires: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'user_sessions',
//   });
//   return user_sessions;
// };