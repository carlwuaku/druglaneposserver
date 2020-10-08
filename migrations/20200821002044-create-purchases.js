'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('purchases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vendor: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      site: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      invoice: {
        type: Sequelize.STRING
      },
      payment_method: {
        type: Sequelize.STRING
      },
      amount_paid: {
        type: Sequelize.DOUBLE
      },
      last_payment_date: {
        type: Sequelize.DATE
      },
      deleted: {
        type: Sequelize.INTEGER
      },
      invoice_date: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('purchases');
  }
};