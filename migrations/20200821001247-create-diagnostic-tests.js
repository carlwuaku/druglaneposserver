'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('diagnostic_tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      test_name: {
        type: Sequelize.STRING
      },
      parameters: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('diagnostic_tests');
  }
};