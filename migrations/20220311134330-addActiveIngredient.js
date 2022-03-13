'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products','active_ingredients',
    {
      type: Sequelize.STRING,
      defaultValue: null,
      allowNull: true
    });
    await queryInterface.addColumn('products','drug_info',
    {
      type: Sequelize.STRING,
      defaultValue: null,
      allowNull: true
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
