'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('settings', [
      {
        name: 'tax_title',
        module: 'System',
        value: 'Local Sale Tax'
      },
      {
        name: 'show_tax_on_receipt',
        module: 'System',
        value: 'yes'
      },
      {
        name: 'receipt_show_credits',
        module: 'System',
        value: 'yes'
      },
      {
        name: 'receipt_extra_info',
        module: 'System',
        value: 'TIN NUMBER: 1234'
      },
      {
        name: 'receipt_footer',
        module: 'System',
        value: 'ALL ITEMS ARE VAT AND COVID-19 LEVY OF 4% INCLUSIVE'
      },
    ]);
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
