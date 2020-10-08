'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      created_on: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      },
      amount_paid: {
        type: Sequelize.DOUBLE
      },
      payment_method: {
        type: Sequelize.STRING
      },
      momo_reference: {
        type: Sequelize.STRING
      },
      insurance_provider: {
        type: Sequelize.STRING
      },
      insurance_member_name: {
        type: Sequelize.STRING
      },
      insurance_member_id: {
        type: Sequelize.STRING
      },
      creditor_name: {
        type: Sequelize.STRING
      },
      credit_paid: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.DOUBLE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('sales');
  }
};