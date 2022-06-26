const talkerService = require('./talkerService');

const talkerController = {
  async getTalkers(req, res) {
    const result = await talkerService.getTalkers();
    res.status(200).json(result);
  },

  async getTalker(req, res) {
    const { id } = req.params;
    const talker = await talkerService.getTalker(Number(id));
    if (!talker) res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(talker);
  },
};

module.exports = talkerController;