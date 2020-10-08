'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('sales','date',
              {
               type:Sequelize.DATE
              });

              await queryInterface.addIndex('sales',
              {
               fields: ['date']
              });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('sales','date'
              );
  }
};
