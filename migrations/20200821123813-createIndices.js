'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {

      await queryInterface.addIndex(
        'activities',
        {
          fields: ['user_id'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'activities',
        {
          fields: ['activity'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'activities',
        {
          fields: ['created_on'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'branches',
        {
          fields: ['name','location','phone'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'customer_diagnostics',
        {
          fields: ['customer','test','created_on'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'customers',
        {
          fields: ['name','phone','email'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'permissions',
        {
          fields: ['name'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'products',
        {
          fields: ['name','category','notes','unit','max_stock','min_stock','expiry','barcode','status'],
          transaction,
        }
      );


      await queryInterface.addIndex(
        'purchase_details',
        {
          fields: ['product','created_on','created_by','code'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'purchases',
        {
          fields: ['code'],
          unique: true,
          transaction,
        }
      );

      await queryInterface.addIndex(
        'purchases',
        {
          fields: ['vendor','date','status','invoice','payment_method','amount_paid','last_payment_date'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'received_transfers',
        {
          fields: ['code'],
          unique: true,
          transaction,
        }
      );

      await queryInterface.addIndex(
        'received_transfers',
        {
          fields: ['sender','date','invoice','created_on'],
          unique: true,
          transaction,
        }
      );

      await queryInterface.addIndex(
        'received_transfer_details',
        {
          fields: ['product','created_on','created_by','date','cost_price'],
          unique: true,
          transaction,
        }
      );


      await queryInterface.addIndex(
        'transfers',
        {
          fields: ['code'],
          unique: true,
          transaction,
        }
      );

      await queryInterface.addIndex(
        'transfers',
        {
          fields: ['date','created_on'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'transfer_details',
        {
          fields: ['product','created_on','created_by','date','cost_price'],
          transaction,
        }
      );

///////////////////
      await queryInterface.addIndex(
        'sales_details',
        {
          fields: ['date','created_on','created_by','code','product'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'sales',
        {
          fields: ['code'],
          unique: true,
          transaction,
        }
      );

      await queryInterface.addIndex(
        'sales',
        {
          fields: ['customer','created_by', 'amount_paid','payment_method','momo_reference','insurance_provider','creditor_name','credit_paid','discount'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'settings',
        {
          fields: ['name','module','value'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'stock_adjustment_sessions',
        {
          fields: ['date','created_by'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'stock_adjustment_sessions',
        {
          fields: ['code'],
          unique: true,
          transaction,
        }
      );

      await queryInterface.addIndex(
        'stock_adjustments',
        {
          fields: ['date','product','quantity_counted','quantity_expected','created_by','created_on','category','comments'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'users',
        {
          fields: ['password_hash','email','display_name','active','phone'],
          transaction,
        }
      );

      await queryInterface.addIndex(
        'users',
        {
          fields: ['username'],
          unique: true,
          transaction,
        }
      );

      await queryInterface.addIndex(
        'user_sessions',
        {
          fields: ['token','user_id','created_on'],
          transaction,
        }
      );


      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;

    }
  },

  down: async (queryInterface) => {

  }
};
