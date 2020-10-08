'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('user_sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      token: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      expires: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('user_sessions');
  }
};