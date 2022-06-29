const Joi = require('joi');
const talkerModel = require('../models/talkerModel');

const talkerService = {
  async getTalkers() {
    const result = await talkerModel.getTalkers();
    return result;
  },

  async getTalker(id) {
    const talker = await talkerModel.getTalker(id);
    return talker;
  },

  async validateToken(authorization) {
    const schema = Joi.object({
      authorization: Joi.string().length(16),
    });
    await schema.validateAsync({ authorization });
  },

  async validateWatchedAt(watchedAt) {
    const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    const isValid = watchedAt.match(regex);
    return isValid;
  },

  async validateRate(rate) {
    const schema = Joi.object({
      rate: Joi.number().min(1).max(5).integer(),
    });
  await schema.validateAsync({ rate });
  },

  async add(talker) {
    const newTalker = await talkerModel.add(talker);
    return newTalker;
  },

  async edit(id, body) {
    const idN = Number(id);
    const talkerEdit = await talkerModel.edit(idN, body);
    return talkerEdit;
  },
};

module.exports = talkerService;