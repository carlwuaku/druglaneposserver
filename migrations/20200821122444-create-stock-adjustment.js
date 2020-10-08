'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('stock_adjustments', {
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
      quantity_counted: {
        type: Sequelize.DOUBLE
      },
      quantity_expected: {
        type: Sequelize.DOUBLE
      },
      current_price: {
        type: Sequelize.DOUBLE
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      category: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      expiry: {
        type: Sequelize.DATE
      },
      comments: {
        type: Sequelize.STRING
      },
      quantity_expired: {
        type: Sequelize.DOUBLE
      },
      quantity_damaged: {
        type: Sequelize.DOUBLE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('stock_adjustments');
  }
};