'use strict';
const Sequelize = require('sequelize')
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('products','preferred_vendor',
              {
               type:Sequelize.INTEGER
              });
  }, 

  down: async (queryInterface) => {
    await queryInterface.removeColumn('products','preferred_vendor');

  }
};
