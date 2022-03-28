'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('settings', [{
      name: 'activate_batch_mode',
      module: 'System',
      value: 'no'
    }],
    {
      ignoreDuplicates: true
    });
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
