const { Sequelize } = require('sequelize');
const path = require('path')
const constants = require('../constants')

const dbpath = constants.sequelize_db;
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbpath
  });

  sequelize.authenticate().then(val=>{
    console.log('connection successful')
  }).catch(err => {
    console.log('connection failed')
  });

  module.exports = sequelize;
 