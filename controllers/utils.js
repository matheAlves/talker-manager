const crypto = require('crypto');

const utils = {
  generateToken() {
    const token = crypto.randomBytes(8).toString('hex');
    return token;
  },
};

module.exports = utils;