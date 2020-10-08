'use strict';
const Sequelize = require("sequelize")
module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {

      await queryInterface.changeColumn('permissions', 'createdAt', 
      {allowNull: true, defaultValue: Sequelize.NOW},
      {transaction: transaction}
      );
      await queryInterface.changeColumn('permissions', 'updatedAt', 
      {allowNull: true, defaultValue: Sequelize.NOW},
      {transaction: transaction}
      );

      await queryInterface.bulkInsert('permissions',
        [
          {
            permission_id: 59,
            name: 'View Sales History',
            description: 'view sales invoices'
          },
          {
            permission_id: 60,
            name: 'Return Sold Items',
            description: 'received items returned. This will alter stock levels'

          },
          {
            permission_id: 61,
            name: 'Delete Sales Records',
            description: 'delete sales receipts. this erases the receipt from the database. it will affect stock levels and sales',

          },
          {
            permission_id: 62,
            name: 'View Sales Reports',
            description: 'View the monthly/daily sales reports page ',

          },
          { permission_id: 63, name: 'View End Of Day Report', description: 'view the end of day sales summary' },
          { permission_id: 64, name: 'Transfer Items', description: 'transfer products to another branch. this will affect stock levels' },
          { permission_id: 65, name: 'Receive Transfers', description: 'receive items transferred from another branch. this will affect stock levels' },
          { permission_id: 67, name: 'View Inventory', description: 'view the products list, expiries, and stock-out' },
          { permission_id: 68, name: 'Manage Inventory', description: 'add a new product to the inventory/edit products, delete products' },
          { permission_id: 72, name: 'Adjust Stock', description: 'adjust the stock of products or initiate stock-taking' },
          { permission_id: 73, name: 'Receive Purchases', description: 'receive new purchases' },
          { permission_id: 74, name: 'View Purchase History', description: 'view purchase history ' },
          { permission_id: 75, name: 'Create Sales', description: 'make sales' },
          { permission_id: 76, name: 'Delete Purchases', description: 'delete purchases invoices. This will affect stock levels' },
          { permission_id: 77, name: 'Manage Vendors', description: 'add/delete vendors' },
          { permission_id: 78, name: 'View Transfer History', description: 'view outgoing/incoming transfer history' },
          { permission_id: 79, name: 'Delete Transfers', description: 'delete transfer records. this will affect stock levels' },
          { permission_id: 80, name: 'View User Activities', description: 'view all activities by user and time' },
          { permission_id: 81, name: 'Manage Staff', description: 'add/edit/delete users. Also can change a user role or permissions' },
          { permission_id: 82, name: 'Manage Customers', description: 'add/edit/delete customers data.' },
          { permission_id: 83, name: 'Manage Settings', description: 'edit company name, phone, address, etc' }


        ], { transaction: transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    try {
      await queryInterface.bulkDelete('permissions',
        {
          permission_id: { [Sequelize.not]: null }
        }, transaction);

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
