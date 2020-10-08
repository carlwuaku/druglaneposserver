'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('purchase_details', {
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
      unit: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      markup: {
        type: Sequelize.DOUBLE
      },
      code: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      selling_price: {
        type: Sequelize.DOUBLE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('purchase_details');
  }
};