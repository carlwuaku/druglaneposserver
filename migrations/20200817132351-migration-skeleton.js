'use strict';
const Sequelize = require('sequelize')
module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'People',
        'petName',
        {
          type: Sequelize.DataTypes.STRING,
        },
        { transaction }
      );
      
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    const transaction = queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn("People", "role", { transaction })
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
