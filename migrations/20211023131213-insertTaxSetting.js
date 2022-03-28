'use strict';
const Sequelize = require('sequelize')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('settings', [{
      name: 'tax',
      module: 'System',
      value: '0'
    }],
    {
      ignoreDuplicates: true
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * queryInterface.bulkInsert('roles', [{
   label: 'user',
   createdAt: new Date(),
   updatedAt: new Date()
 }, {
   label: 'admin',
   createdAt: new Date(),
   updatedAt: new Date()
 }]);
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
