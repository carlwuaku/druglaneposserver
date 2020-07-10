const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Customer',
    index: true
  },

  
  vending_station: {
    type: 'String',
    index: true
  },
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
  customer_name: {
    type: 'String',
    index: true
  },

  code: {
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
  added_by: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Staff'
  },
  
  
  date:{
    type: 'Date',
    default: () => Date.now()
  }


});

module.exports = mongoose.model('Sale', saleSchema);