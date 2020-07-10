const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    display_name:{
        type:'String',
        //index:true
      },
      contact:{
        type:'String',
        //index:true
      },
      username:{
        type:'String',
        //index:true
      },
      password:{
        type:'String',
        //index:true
      },
      email:{
        type:'String',
        //index:true
      },
      picture:{
        type:'String'
      },
      token:{
        type:'String',
        //index:true
      }
});

module.exports = mongoose.model('Admin', adminSchema);