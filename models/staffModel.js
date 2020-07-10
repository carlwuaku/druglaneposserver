const mongoose = require('mongoose');

const staffSchema = mongoose.Schema({
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
      contact:{
        type:'String'
      },
      picture:{
        type:'String'
      },
      token:{
        type:'String',
        //index:true
      },
      role: { type: mongoose.Schema.Types.ObjectId, ref: 'Roles' },
});

module.exports = mongoose.model('Staff', staffSchema);