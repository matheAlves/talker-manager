const utils = require('./utils');
const loginService = require('../services/loginService');

const loginController = {

  async login(req, res) {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    try {
      await loginService.validateEmail(email);
    } catch (e) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    if (password.length < 6) {
      return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    const token = utils.generateToken();
    res.status(200).json({ token });
  },
};

module.exports = loginController;