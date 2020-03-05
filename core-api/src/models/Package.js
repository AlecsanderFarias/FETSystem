const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const Package = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  buyer: {
    type: String,
    required: true
  },
  delivery: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Travel',
    required: true
  },
  Weight: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    default: 'package',
    enum: ['package', 'boxes']
  }
});

Package.plugin(paginate);

module.exports = mongoose.model('Package', Package);
