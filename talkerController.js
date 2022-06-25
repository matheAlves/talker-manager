const talkerService = require('./talkerService');

const talkerController = {
  async get(req, res) {
    const result = await talkerService.get();
    res.status(200).send(result);
  },
};

module.exports = talkerController;