const { findUserByLogin } = require('../models/userModel');

function login({ login, senha }) {
  if (!login || !senha) {
    throw new Error('Login e senha são obrigatórios');
  }
  const user = findUserByLogin(login);
  if (!user || user.senha !== senha) {
    throw new Error('Credenciais inválidas');
  }
  return user;
}

module.exports = { login };
