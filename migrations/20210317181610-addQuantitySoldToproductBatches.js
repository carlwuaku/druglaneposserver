'use strict';
const Sequelize = require('sequelize')
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('productbatches','quantity_sold',
              {
               type:Sequelize.DOUBLE,
               defaultValue: 0
              });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('productbatches', 'quantity_sold');

  }
};
