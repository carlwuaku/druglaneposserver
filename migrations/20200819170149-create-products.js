'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        defaultValue: 'Miscellaneous'
      },
      notes: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE
      },
      max_stock: {
        type: Sequelize.DOUBLE,
        defaultValue: 50
      },
      min_stock: {
        type: Sequelize.DOUBLE,
        defaultValue: 1
      },
      expiry: {
        type: Sequelize.DATE
      },
      barcode: {
        type: Sequelize.STRING
      },
      current_stock: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      last_modified: {
        type: Sequelize.DATE
      },
      cost_price: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      size: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      createdAt: {
        type: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('products');
  }
};