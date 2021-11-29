'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      name: {
        type: Sequelize.STRING
      },
      
      created_on: {
        defaultValue: Sequelize.NOW,
        allowNull: true,
        type: Sequelize.DATE,
        
      }
    });

    await queryInterface.createTable('store_inventory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      product: {
        type: Sequelize.INTEGER,
      },
      store: {
        type: Sequelize.INTEGER,
      },
      max_stock: {
        type: Sequelize.DOUBLE
      },
      min_stock: {
        type: Sequelize.DOUBLE
      },
      current_stock: {
        type: Sequelize.DOUBLE
      },
      expiry: {
        type: Sequelize.DATE
      },
      
      created_on: {
        defaultValue: Sequelize.NOW,
        allowNull: true,
        type: Sequelize.DATE,
        
      }
    });

    await queryInterface.addConstraint('store_inventory',
    {fields: ['product'], 
      type: 'FOREIGN KEY',
      name: 'products_storeInventory_product', // useful if using queryInterface.removeConstraint
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('store_inventory',
    {fields: ['store'], 
      type: 'FOREIGN KEY',
      name: 'products_storeInventory_store', // useful if using queryInterface.removeConstraint
      references: {
        table: 'stores',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stores');
    await queryInterface.dropTable('store_inventory');


  }
};
