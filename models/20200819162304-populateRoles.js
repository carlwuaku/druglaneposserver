// 'use strict';

// const Sequelize = require("sequelize")
// /**
//  * create the roles table, insert admin and sales person roles, and give default permissions
//  */
// module.exports = {
//   up: async (queryInterface) => {
//     const transaction  = await queryInterface.sequelize.transaction();
//     try {

      

// //create the default roles
//       await queryInterface.bulkInsert('roles',
//         [
//           {
//             role_id: 1,
//             role_name: 'Branch Manager',
//             description: 'Manages day-to-day activities. Has all permissions'
//           },
//           {
//             role_id: 2,
//             role_name: 'Sales Person',
//             description: 'serves customers and makes sales. Limited permissions by default'

//           }

//         ], { transaction: transaction });
// //give the default roles default permissions
// await queryInterface.bulkInsert('role_permissions',
// [
//   {
//     role_id: 1,
//     permission_id: 59
//   },
//   {
//     role_id: 1,
//     permission_id: 60
//   },
//   {
//     role_id: 1,
//     permission_id: 61
//   },
//   {
//     role_id: 1,
//     permission_id: 62
//   },
//   {
//     role_id: 1,
//     permission_id: 63
//   },
//   {
//     role_id: 1,
//     permission_id: 64
//   },
//   {
//     role_id: 1,
//     permission_id: 65
//   },
//   {
//     role_id: 1,
//     permission_id: 67
//   },
//   {
//     role_id: 1,
//     permission_id: 68
//   },
//   {
//     role_id: 1,
//     permission_id: 72
//   },
//   {
//     role_id: 1,
//     permission_id: 73
//   },
//   {
//     role_id: 1,
//     permission_id: 74
//   },
//   {
//     role_id: 1,
//     permission_id: 75
//   },
//   {
//     role_id: 1,
//     permission_id: 76
//   },
//   {
//     role_id: 1,
//     permission_id: 77
//   },
//   {
//     role_id: 1,
//     permission_id: 78
//   },
//   {
//     role_id: 1,
//     permission_id: 79
//   },
//   {
//     role_id: 1,
//     permission_id: 80
//   },
//   {
//     role_id: 1,
//     permission_id: 81
//   },
//   {
//     role_id: 1,
//     permission_id: 82
//   },
//   {
//     role_id: 2,
//     permission_id: 59
//   },
//   {
//     role_id: 2,
//     permission_id: 60
//   },
//   {
//     role_id: 2,
//     permission_id: 62
//   },
//   {
//     role_id: 2,
//     permission_id: 63
//   },
//   {
//     role_id: 2,
//     permission_id: 67
//   },
//   {
//     role_id: 2,
//     permission_id: 74
//   },
//   {
//     role_id: 2,
//     permission_id: 75
//   },
//   {
//     role_id: 2,
//     permission_id: 80
//   },
//   {
//     role_id: 2,
//     permission_id: 83
//   }
  

// ], { transaction: transaction });

//       await transaction.commit();
//     } catch (error) {
//       await transaction.rollback();
//       throw error;

//     }
    

//   },
//   down: async (queryInterface) => {
//     await queryInterface.dropTable('roles');
//   }
// };
