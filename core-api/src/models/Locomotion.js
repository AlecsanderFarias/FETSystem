const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const Locomotion = mongoose.Schema({
  nickname: {
    type: Date,
    required: true
  },
  double: {
    //se for false eh um truck, caso true sera uma carreta e cavalinho
    type: Boolean,
    default: false
  },
  cart: {
    //so eh necessario caso seja um double , se for carreta cart sera true , se for cavalinho se false
    type: Boolean,
    default: false
  },
  measures: {
    //so sera obrigatorio caso seja um truck ou uma carreta
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    }
  },
  Weight: {
    type: Number,
    required: true
  },
  board: {
    type: String,
    required: truex
  },
  picture: {
    type: String
  }
});

Locomotion.plugin(paginate);

module.exports = mongoose.model('Locomotion', Locomotion);
