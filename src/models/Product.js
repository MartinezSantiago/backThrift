const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  descr: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  state: {
    type: Number,
    required: false
  },
  /* season: {
    type: String,
    required: false
  },
  fit: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  fabric: {
    type: String,
    required: false
  },
  style: {
    type: String,
    required: false
  },
  specifications: {
    type: String,
    required: false
  },
  available:{
    type: Boolean,
    required: false
  }, */
  size: {
    type: String,
    required: false
  },
  stock: {
    type: Number,
    required: false
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  }

},{timestamps: true});

module.exports = mongoose.model('Product', productSchema);