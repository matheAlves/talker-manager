const fs = require('fs/promises');

const talkerModel = {
  async getTalkers() {
    const talkers = await fs.readFile('./talker.json', 'utf-8');
  return JSON.parse(talkers);
  },
};

module.exports = talkerModel;