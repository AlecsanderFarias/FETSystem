const express = require('express');
const routes = express.Router();

const login = require('./services/login');

routes.post('/', login);

module.exports = routes;
