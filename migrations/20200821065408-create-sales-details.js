'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('sales_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      product: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      },
      quantity: {
        type: Sequelize.DOUBLE
      },
      created_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      code: {
        type: Sequelize.STRING
      },
      cost_price: {
        type: Sequelize.DOUBLE
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      customer: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('sales_details');
  }
};