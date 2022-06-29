const fs = require('fs/promises');

const talkerModel = {
  async getTalkers() {
    const talkers = await fs.readFile('./talker.json', 'utf-8');
    return JSON.parse(talkers);
  },

  async add(talker) {
    const all = await talkerModel.getTalkers();
    const newTalker = {
      id: all.length + 1,
      ...talker,
    };
    all.push(newTalker);
    await fs.writeFile('./talker.json', JSON.stringify(all));
    return newTalker;
  },
};

module.exports = talkerModel;