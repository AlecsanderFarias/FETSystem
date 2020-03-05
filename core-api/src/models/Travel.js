const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const Travel = mongoose.Schema({
  date: {
    start: { type: Date, required: true },
    end: { type: Date, required: true }
  },
  status: {
    type: String,
    defaul: 'unstarted',
    enum: ['unstarted', 'in progress', 'finished']
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
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
