'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('customer_diagnostics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer: {
        type: Sequelize.INTEGER
      },
      test: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      created_on: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('customer_diagnostics');
  }
};