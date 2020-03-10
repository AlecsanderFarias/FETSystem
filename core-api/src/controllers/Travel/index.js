const express = require('express');
const routes = express.Router();

const auth = require('../../middlewares/Auth');

const create = require('./services/create');
const list = require('./services/list');

routes.post('/', auth, create);
routes.get('/', auth, list);

module.exports = routes;
