const mongoose = require('mongoose');

const SASchema = mongoose.Schema({

  

  product: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Product',
    required: true,
    index: true
  },
  //to enable easy searching
  product_name: {
    type: 'String',
    index: true
  },


  price: {
    type: 'Number',
    required: true,
    index: true
  },
  quantity: {
    type: 'Number',
    required: true,
    index: true
  },
  expected_quantity: {
    type: 'Number',
    required: true,
    index: true
  },
  added_by: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Staff'
  },
  notes: {
    type: 'String'
  },
  date:{
    type: 'Date',
    default: () => Date.now()
  }


});

module.exports = mongoose.model('StockAdjustment', SASchema);