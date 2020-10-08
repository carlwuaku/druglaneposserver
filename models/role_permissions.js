'use strict';



const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const RolePermissions = sequelize.define("role_permissions", {
  role_id: {type: DataTypes.INTEGER
  },
  permission_id: {type: DataTypes.INTEGER
  }
},{
  tableName: 'role_permissions',
  timestamps: false
});

module.exports = RolePermissions;



// const {
//   Model
// } = require('sequelize');
// const Roles = require("./roles");
// const Permissions = require("./permissions")
// module.exports = (sequelize, DataTypes) => {
//   class role_permissions extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   role_permissions.init({
//     role_id: {type: DataTypes.INTEGER
//     },
//     permission_id: {type: DataTypes.INTEGER
//     }
//   }, {
//     sequelize,
//     modelName: 'role_permissions',
//   });



//   return role_permissions;
// };