const talkerService = require('./talkerService');

const talkerController = {
  async getTalkers(req, res) {
    const result = await talkerService.get();
    res.status(200).json(result);
  },
};

module.exports = talkerController;