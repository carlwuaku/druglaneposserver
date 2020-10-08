'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      module: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('settings');
  }
};