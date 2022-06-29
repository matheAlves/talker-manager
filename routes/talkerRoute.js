const { Router } = require('express');
const talkerController = require('../controllers/talkerController');

const talkerRoute = Router();

talkerRoute.get('/', talkerController.getTalkers);

talkerRoute.get('/:id', talkerController.getTalker);

talkerRoute.post('/', 
talkerController.validateToken, 
talkerController.verifyName, 
talkerController.verifyAge,
talkerController.verifyTalk1,
talkerController.verifyTalk2,
talkerController.add);

talkerRoute.put('/:id', 
talkerController.validateToken,
talkerController.verifyName,
talkerController.verifyAge,
talkerController.verifyTalk1,
talkerController.verifyTalk2,
talkerController.edit);

talkerRoute.delete('/:id',
talkerController.validateToken,
talkerController.delete);

module.exports = talkerRoute;