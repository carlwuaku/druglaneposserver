'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn('dailyRecords', 'cash',
      {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      });
    await queryInterface.addColumn('dailyRecords', 'momo',
      {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      });
    await queryInterface.addColumn('dailyRecords', 'insurance',
      {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      });
    await queryInterface.addColumn('dailyRecords', 'credit',
      {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      });
    await queryInterface.addColumn('dailyRecords', 'pos',
      {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      });
    
    await queryInterface.addColumn('dailyRecords', 'cheque',
      {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      });
    await queryInterface.addColumn('dailyRecords', 'other',
      {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      });
  }, 

  down: async (queryInterface) => {
    await queryInterface.dropColumn('dailyRecords', 'cash');
    await queryInterface.dropColumn('dailyRecords', 'momo');
    await queryInterface.dropColumn('dailyRecords', 'insurance');
    await queryInterface.dropColumn('dailyRecords', 'credit');
    await queryInterface.dropColumn('dailyRecords', 'pos');
    await queryInterface.dropColumn('dailyRecords', 'cheque');
    await queryInterface.dropColumn('dailyRecords', 'other');
  }
};
