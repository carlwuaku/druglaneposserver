'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('roles', {
      
      role_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('roles');
  }
};