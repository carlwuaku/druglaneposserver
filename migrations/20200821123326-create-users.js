'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_id: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password_hash: {
        type: Sequelize.STRING
      },
      last_login: {
        type: Sequelize.STRING
      },
      last_ip: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      display_name: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.INTEGER
      },
      last_seen: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  }
};