const talkerModel = require('./talkerModel');

const talkerService = {
  async get() {
    const result = await talkerModel.get();
    return result;
  },
};

module.exports = talkerService;