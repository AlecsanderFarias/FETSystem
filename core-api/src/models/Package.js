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
  weight: {
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
  },
  pictures: [
    {
      type: String
    }
  ]
});

Package.plugin(paginate);

module.exports = mongoose.model('Package', Package);
