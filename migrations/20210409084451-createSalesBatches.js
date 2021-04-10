'use strict';
const Sequelize = require("sequelize")

 
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('sales_batches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      date: {
        type: Sequelize.DATE
      },
      batch_number: {
        type: Sequelize.STRING
      },
      
      
      product: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.DOUBLE
      },
      code: {
        type: Sequelize.STRING
      },created_by: {
        type: Sequelize.INTEGER
      },
      created_on: {
        defaultValue: Sequelize.NOW,
        allowNull: true,
        type: Sequelize.DATE,
        
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('sales_batches');
  }
};