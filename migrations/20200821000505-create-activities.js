'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('activities', {
      
      activity_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      activity: {
        type: Sequelize.STRING
      },
      module: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE
      },
      deleted: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('activities');
  }
};