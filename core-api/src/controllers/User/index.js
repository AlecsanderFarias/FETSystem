const express = require('express');
const routes = express.Router();

const create = require('./services/create');
const list = require('./services/list');

routes.post('/', create);
routes.get('/', list);

module.exports = routes;
