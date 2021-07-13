'use strict';
const Sequelize = require("sequelize")

 
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      name: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      },
      created_on: {
        defaultValue: Sequelize.NOW,
        allowNull: true,
        type: Sequelize.DATE,
        
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('tokens`');
  }
};
