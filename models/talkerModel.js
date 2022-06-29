const fs = require('fs/promises');
const talkerService = require('../services/talkerService');
const { getTalker } = require('../services/talkerService');

const talkerModel = {
  async getTalkers() {
    const talkers = await fs.readFile('./talker.json', 'utf-8');
    return JSON.parse(talkers);
  },

  async getTalker(id) {
    const talkers = await talkerModel.getTalkers();
    const talker = talkers.find((t) => t.id === id);
    return talker;
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

  async edit(id, body) {
    const all = await talkerModel.getTalkers();
    const index = all.findIndex((t) => t.id === id);
    all[index] = { id, ...body };
    await fs.writeFile('./talker.json', JSON.stringify(all));
    return all[index];
  },

  async delete(id) {
    const all = await talkerModel.getTalkers();
    const newAll = all.filter((t) => t.id !== id);
    await fs.writeFile('./talker.json', JSON.stringify(newAll));
  },
};

module.exports = talkerModel;