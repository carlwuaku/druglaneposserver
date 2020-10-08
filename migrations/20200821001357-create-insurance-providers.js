'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('insurance_providers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('insurance_providers');
  }
};