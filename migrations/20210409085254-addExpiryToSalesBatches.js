'use strict';
const Sequelize = require('sequelize')
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('sales_batches','expiry',
              {
               type:Sequelize.DATE
              });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('sales_batches','expiry');
 
  }
};
