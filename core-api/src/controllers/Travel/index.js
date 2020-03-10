const express = require('express');
const routes = express.Router();

const auth = require('../../middlewares/Auth');

const create = require('./services/create');

routes.post('/', auth, create);

module.exports = routes;
