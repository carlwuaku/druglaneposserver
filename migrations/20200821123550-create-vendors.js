'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('vendors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      legacy_id: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('vendors');
  }
};