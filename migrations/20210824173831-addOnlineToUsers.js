'use strict';
const Sequelize = require('sequelize')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('users','allow_online',
    {
      type: Sequelize.STRING,
      defaultValue: 'no'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users','allow_online');

  }
};
