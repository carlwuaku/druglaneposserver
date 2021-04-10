'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('ProductBatches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      batch_number: {
        type: Sequelize.STRING
      },
      expiry: {
        type: Sequelize.DATE
      },
      barcode: {
        type: Sequelize.STRING
      },
      product: {
        type: Sequelize.INTEGER
      },
      purchase_code: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('ProductBatches');
  }
};