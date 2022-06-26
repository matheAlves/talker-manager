const { Router } = require('express');
const talkerController = require('./talkerController');

const talkerRoute = Router();

talkerRoute.get('/', talkerController.getTalkers);
talkerRoute.get('/:id', talkerController.getTalker);

module.exports = talkerRoute;