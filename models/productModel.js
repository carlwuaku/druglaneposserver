const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:'String',
        //index:true
      },
      price:{
        type:'Number',
        //index:true
      },
      category:{
          type: 'String'
      },
      notes:{
        type: 'String'
    },
    unit:{
        type: 'String'
    },
    picture:{
        type: 'String'
    },
    thumbnail:{
        type: 'String'
    },
    createdAt:{
      type: 'Date'
    }
});

module.exports = mongoose.model('Product', productSchema);