const mongoose = require('mongoose');
//roles created by schols
const roleSchema = mongoose.Schema({
    role_name:{
        type:'string',
        //index:true
      },
      description:{
          type:'string'
      },
      //permission is an array of strings
      permissions: [String]
});

module.exports = mongoose.model('Roles', roleSchema);