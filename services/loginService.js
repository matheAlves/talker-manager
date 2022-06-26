const InvalidLogin = require('../errors/InvalidLogin');

const loginService = {
  
  async validateLogin(email, password) {
    if (!email || !password) {
      throw new InvalidLogin('preencha os 2 campos');
    }
  },
};

module.exports = loginService;