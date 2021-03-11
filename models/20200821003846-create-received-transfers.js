// 'use strict';
// const Sequelize = require("sequelize")

// module.exports = {
//   up: async (queryInterface) => {
//     await queryInterface.createTable('received_transfers', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       date: {
//         type: Sequelize.DATE
//       },
//       code: {
//         type: Sequelize.STRING
//       },
//       invoice: {
//         type: Sequelize.STRING
//       },
//       created_on: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW
//       },
//       created_by: {
//         type: Sequelize.INTEGER
//       },
//       sender: {
//         type: Sequelize.INTEGER
//       }
//     });
//   },
//   down: async (queryInterface) => {
//     await queryInterface.dropTable('received_transfers');
//   }
// };