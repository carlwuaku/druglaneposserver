'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('received_transfer_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.DOUBLE
      },
      price: {
        type: Sequelize.DOUBLE
      },
      created_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      expiry: {
        type: Sequelize.DATE
      },
      cost_price: {
        type: Sequelize.DOUBLE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('received_transfer_details');
  }
};