const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const User = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  admin: { type: Boolean, default: false },
  driver: { type: Boolean, default: false },
  cpf: { type: String },
  cnh: { type: String }, //foto da cnh,
  status: { type: String, default: 'stopped', enum: ['traveling', 'stopped'] }
});

User.plugin(paginate);

module.exports = mongoose.model('User', User);
