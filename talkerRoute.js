const { Router } = require('express');
const talkerController = require('./talkerController');

const talkerRoute = Router();

talkerRoute.get('/', talkerController.get);

module.exports = talkerRoute;