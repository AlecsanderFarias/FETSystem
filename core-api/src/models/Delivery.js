const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const Delivery = mongoose.Schema({
  travel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Travel',
    required: true
  },
  address: {
    street_name: { type: String, required: true },
    street_number: { type: String, required: true },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true }
  },
  date: {
    type: Date
  },
  status: {
    type: String,
    default: 'waiting',
    enum: ['waiting', 'traveling', 'delivered']
  },
  value: {
    type: Number,
    required: true
  }
});

Delivery.plugin(paginate);

module.exports = mongoose.model('Delivery', Delivery);
