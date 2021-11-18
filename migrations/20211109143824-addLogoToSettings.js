'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('settings', [{
      name: 'logo',
      module: 'System',
      value: ''
    },
    {
      name: 'receipt_logo',
      module: 'System',
      value: 'no'
    }]);
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
