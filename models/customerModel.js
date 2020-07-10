const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    first_name:{
        type:'String',
        //index:true
      },
      last_name:{
        type:'String',
        //index:true
      },
      sex:{
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
      },
      place_of_work:{
          type: 'String'
      },
      phone:{
          type: 'String'
      },
      nationality:{
          type: 'String'
      },
      notes:{
        type: 'String'
    },
    thumbnail:{
      type: 'String'
    },
    createdAt:{
      type: 'Date'
    }
});

module.exports = mongoose.model('Customer', customerSchema);