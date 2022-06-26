const talkerModel = require('../models/talkerModel');

const talkerService = {
  async getTalkers() {
    const result = await talkerModel.getTalkers();
    return result;
  },

  async getTalker(id) {
    const talkers = await talkerModel.getTalkers();
    const talker = talkers.find((t) => t.id === id);
    return talker;
  },
};

module.exports = talkerService;