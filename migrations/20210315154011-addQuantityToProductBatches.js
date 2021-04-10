'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('productbatches','quantity',
              {
               type:Sequelize.DOUBLE
              });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('productbatches', 'quantity');

  }
};
