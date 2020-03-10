const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const Delivery = mongoose.Schema({
  address: {
    street_name: { type: String, required: true },
    street_number: { type: String, required: true },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true }
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: 'waiting',
    enum: ['waiting', 'traveling', 'delivered']
  },
  value: {
    type: Number,
    required: true
  },
  packages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Package'
    }
  ]
});

Delivery.plugin(paginate);

module.exports = mongoose.model('Delivery', Delivery);
