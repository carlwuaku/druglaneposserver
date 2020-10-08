'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('customers','sex',
              {
               type:Sequelize.STRING
              });
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
