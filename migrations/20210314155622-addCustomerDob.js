'use strict';
const Sequelize = require("sequelize")
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('customers','date_of_birth',
              {
               type:Sequelize.DATE
              });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('customers', 'date_of_birth');
  }
};
