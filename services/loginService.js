const Joi = require('joi');

const loginService = {  
  async validateEmail(email) {
    const schema = Joi.object({ email: Joi.string().email().required() });
    await schema.validateAsync({ email });
  },
};

module.exports = loginService;