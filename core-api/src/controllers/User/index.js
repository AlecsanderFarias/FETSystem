const express = require('express');
const routes = express.Router();

const create = require('./services/create');

routes.post('/', create);

module.exports = routes;
