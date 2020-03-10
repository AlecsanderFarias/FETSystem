const express = require('express');
const routes = express.Router();

const auth = require('../../middlewares/Auth');

const create = require('./services/create');
const list = require('./services/list');
const get = require('./services/get');
const update = require('./services/update');
const remove = require('./services/delete');

const linkPackage = require('./services/PackageLink');
const unlinkPackage = require('./services/PackageUnlink');

routes.post('/', auth, create);
routes.get('/', auth, list);
routes.get('/:id', auth, get);
routes.put('/:id', auth, update);
routes.delete('/:id', auth, remove);

routes.post('/:id/link', auth, linkPackage);
routes.post('/:id/unlink', auth, unlinkPackage);

module.exports = routes;
