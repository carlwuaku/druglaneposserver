'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction  = await queryInterface.sequelize.transaction();
    try {

      

//create the default roles
      await queryInterface.changeColumn('role_permissions','role_id',
        {
          references: {
            model: {
              tableName: 'userseed'
            },
            key: 'id'
          }
        }, { transaction: transaction });

        await queryInterface.changeColumn('role_permissions','permission_id',
        {
          references: {
            model: {
              tableName: 'permissions'
            },
            key: 'permission_id'
          }
        }, { transaction: transaction });


      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;

    }
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
