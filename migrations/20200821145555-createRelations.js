'use strict';
const Sequelize = require("sequelize")

module.exports = {
  up: async (queryInterface) => {
    const transaction  = await queryInterface.sequelize.transaction();

    try {

      

            await queryInterface.changeColumn('purchases','vendor',
              {
                references: {
                  model: {
                    tableName: 'vendors'
                  },
                  key: 'id'
                }
              }, { transaction: transaction });
      
              await queryInterface.changeColumn('purchase_details','product',
              {
                references: {
                  model: {
                    tableName: 'products'
                  },
                  key: 'id'
                }
              }, { transaction: transaction });

              await queryInterface.changeColumn('purchase_details','code',
              {
                references: {
                  model: {
                    tableName: 'purchases'
                  },
                  key: 'code'
                }
              }, { transaction: transaction });

              await queryInterface.changeColumn('received_transfer_details','product',
              {
                references: {
                  model: {
                    tableName: 'products'
                  },
                  key: 'id'
                }
              }, { transaction: transaction });

              await queryInterface.changeColumn('received_transfer_details','code',
              {
                references: {
                  model: {
                    tableName: 'purchases'
                  },
                  key: 'code'
                }
              }, { transaction: transaction });

              await queryInterface.changeColumn('received_transfers','sender',
              {
                references: {
                  model: {
                    tableName: 'branches'
                  },
                  key: 'id'
                }
              }, { transaction: transaction });

              await queryInterface.changeColumn('sales_details','product',
              {
                references: {
                  model: {
                    tableName: 'products'
                  },
                  key: 'id'
                }
              }, { transaction: transaction });

              await queryInterface.changeColumn('sales_details','code',
              {
                references: {
                  model: {
                    tableName: 'sales'
                  },
                  key: 'code'
                }
              }, { transaction: transaction });


              await queryInterface.changeColumn('transfer_details','code',
              {
                references: {
                  model: {
                    tableName: 'purchases'
                  },
                  key: 'code'
                }
              }, { transaction: transaction });

              

              await queryInterface.changeColumn('transfer_details','product',
              {
                references: {
                  model: {
                    tableName: 'products'
                  },
                  key: 'id'
                }
              }, { transaction: transaction });

              
      
      
            await transaction.commit();
          } catch (error) {
            await transaction.rollback();
            throw error;
      
          }
  },

  down: async (queryInterface) => {
    
  }
};
