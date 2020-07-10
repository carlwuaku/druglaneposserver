const mongoose = require('mongoose');

const vendorSchema = mongoose.Schema({
    name:{
        type:'String',
        //index:true
      },
      location:{
        type:'String',
        //index:true
      },
      phone:{
        type:'String',
        //index:true
      },
      code:{
        type:'String',
        //index:true
      },
      email:{
        type:'String',
        //index:true
      },
    createdAt:{
      type: 'Date'
    },
    notes:{
        type: 'String'
    }
});

module.exports = mongoose.model('Vendor', vendorSchema);