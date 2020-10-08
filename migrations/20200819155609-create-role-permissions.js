'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('role_permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'roles',
          key: 'role_id'
        }
      },
      permission_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'permissions'
          ,
          key: 'permission_id'
        },
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('role_permissions');
  }
};