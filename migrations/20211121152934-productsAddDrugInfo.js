'use strict';
const Sequelize = require('sequelize')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('products', 'is_drug',
      {
        type: Sequelize.STRING,
        defaultValue: 'yes'
      });
      await queryInterface.addColumn('products', 'generic_name',
      {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: null
      });
      await queryInterface.addColumn('products', 'contraindications',
      {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: null
      });
      await queryInterface.addColumn('products', 'pregnancy',
      {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: null
      });
      await queryInterface.addColumn('products', 'side_effects',
      {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: null
      });
      await queryInterface.addColumn('products', 'caution',
      {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: null
      });
      await queryInterface.addColumn('products', 'indications',
      {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: null
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('products', 'is_drug');
      await queryInterface.removeColumn('products', 'generic_name');
      await queryInterface.removeColumn('products', 'contraindications');
      await queryInterface.removeColumn('products', 'pregnancy');
      await queryInterface.removeColumn('products', 'side_effects');
      await queryInterface.removeColumn('products', 'caution');
      await queryInterface.removeColumn('products', 'indications');
  }
};
