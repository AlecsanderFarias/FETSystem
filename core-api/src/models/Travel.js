const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const Travel = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  date: {
    start: { type: Date },
    end: { type: Date }
  },
  status: {
    type: String,
    default: 'unstarted',
    enum: ['unstarted', 'in progress', 'finished']
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  deliverys: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Delivery'
    }
  ],
  locomotion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Locomotion',
    required: true
  },
  subLocomotion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Locomotion'
  }
});

Travel.plugin(paginate);

module.exports = mongoose.model('Travel', Travel);
