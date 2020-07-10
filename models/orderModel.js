const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Customer',
    required: true,
    index: true
  },

  createdAt: {
    index: true,
    type: 'Date',
    default: () => Date.now()
  },
  delivery_date: {
    type: 'String',
    index: true
  },
  delivered_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  delivery_point: {
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
  notes: {
    type: 'String'
  },
  status: {
    type: 'String'
  },
  date:{
    type: 'Date',
    default: () => Date.now()
  }


});

module.exports = mongoose.model('Order', orderSchema);