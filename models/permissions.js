'use strict';


const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Permissions = sequelize.define("permissions", {
  permission_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {type: DataTypes.STRING, allowNull: false},
  description: DataTypes.STRING
},{
  tableName: 'permissions',
  timestamps: false
});

module.exports = Permissions;


// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class permissions extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   permissions.init({
//     permission_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {type: DataTypes.STRING, allowNull: false},
//     description: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'permissions',
//   });
//   return permissions;
// };