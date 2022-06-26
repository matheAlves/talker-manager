const loginService = require('../services/loginService');
const utils = require('./utils');

const loginController = {

  async login(req, res) {
    const { email, password } = req.body;
    await loginService.validateLogin(email, password);
    const token = utils.generateToken();
    res.status(200).json({ token });
  },
};

module.exports = loginController;