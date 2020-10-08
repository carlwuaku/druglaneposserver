'use strict';
// const {
//   Model
// } = require('sequelize');
const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Activities = sequelize.define("activities", {
  activity_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    activity: DataTypes.STRING,
    module: DataTypes.STRING,
    created_on: DataTypes.DATE,
    deleted: DataTypes.INTEGER
},{
  tableName: 'activities',
});
module.exports = Activities;

/*
module.exports = (sequelize, DataTypes) => {
  class activities extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  activities.init({
    activity_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    activity: DataTypes.STRING,
    module: DataTypes.STRING,
    created_on: DataTypes.DATE,
    deleted: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'activities',
  });
  return activities;
};
*/