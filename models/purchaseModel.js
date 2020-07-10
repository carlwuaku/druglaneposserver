const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Vendor',
    required: true,
    index: true
  },

  createdAt: {
    type: 'Date',
    index: true
  },
  site: {
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
  vendor_name: {
    type: 'String',
    index: true
  },

  code: {
    type: 'String',
    index: true
  },
  grade: {
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
  },
  unit:{
    type: 'String'
  },
  expiry:{
    type: 'Date',
    default: () => Date.now()
  },



});

module.exports = mongoose.model('Purchase', purchaseSchema);