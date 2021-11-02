'use strict';
const Sequelize = require('sequelize')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('sales','tax',
    {
      type: Sequelize.DOUBLE,
      defaultValue: 0
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('sales','tax');

  }
};
