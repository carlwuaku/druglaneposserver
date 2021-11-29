'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('requisitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sender: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      recipient: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      
      created_on: {
        defaultValue: Sequelize.NOW,
        allowNull: true,
        type: Sequelize.DATE,
        
      },
      created_by: {
        defaultValue: null,
        allowNull: true,
        type: Sequelize.INTEGER,
        
      },status: {
        allowNull: false,
        defaultValue: 'Pending',
        type: Sequelize.STRING
      }
    });

    await queryInterface.createTable('requisition_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      product: {
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DOUBLE
      },
      cost_price: {
        type: Sequelize.DOUBLE
      },
      quantity: {
        type: Sequelize.DOUBLE
      },
      expiry: {
        type: Sequelize.DATE
      },
      
      created_on: {
        defaultValue: Sequelize.NOW,
        allowNull: true,
        type: Sequelize.DATE,
        
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created_by: {
        defaultValue: null,
        allowNull: true,
        type: Sequelize.INTEGER,
        
      }
    });

    await queryInterface.addConstraint('requisitions',
    { fields: ['code'], 
      type: 'UNIQUE',
      name: 'requisitions_code_key', // useful if using queryInterface.removeConstraint
      
    });
    await queryInterface.addConstraint('requisitions',
    {fields: ['sender'], 
      type: 'FOREIGN KEY',
      name: 'requisitions_store_sender', 
      references: {
        table: 'stores',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('requisitions',
    {fields: ['recipient'], 
      type: 'FOREIGN KEY',
      name: 'requisitions_store_recipient', 
      references: {
        table: 'stores',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });


    await queryInterface.addConstraint('requisition_details',
    { fields: ['product'], 
      type: 'FOREIGN KEY',
      name: 'requisition_details_product_key', // useful if using queryInterface.removeConstraint
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('requisition_details',
    {fields: ['code'], 
      type: 'FOREIGN KEY',
      name: 'requisition_details_code_key', 
      references: {
        table: 'requisitions',
        field: 'code',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
    

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('requisitions');
    await queryInterface.dropTable('requisition_details');
  }
};
