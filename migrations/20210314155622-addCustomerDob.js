'use strict';
const Sequelize = require("sequelize")
module.exports = {
  up: async (queryInterface) => {

    await queryInterface.createTable('customers',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.DATE
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.INTEGER
      },
    })
    await queryInterface.addColumn('customers','date_of_birth',
              {
               type:Sequelize.DATE
              });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('customers', 'date_of_birth');
  }
};
