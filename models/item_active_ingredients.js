

const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const ItemActiveIngredients = sequelize.define("item_active_ingredients", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    
    product: DataTypes.INTEGER,
    ingredient: DataTypes.INTEGER
},{
  tableName: 'item_active_ingredients',
  timestamps: false
});
module.exports = ItemActiveIngredients;