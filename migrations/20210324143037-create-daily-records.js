'use strict';
const Sequelize = require("sequelize")

 
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('dailyRecords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      date: {
        type: Sequelize.DATE
      },amount: {
        type: Sequelize.DOUBLE
      },shift: {
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
    await queryInterface.dropTable('dailyRecords');
  }
};