// com base no exemplo da aula 23.2

class InvalidLogin extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidLogin';
  }
}

module.exports = InvalidLogin;