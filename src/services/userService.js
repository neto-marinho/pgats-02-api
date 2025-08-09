const { addUser, findUserByLogin, getAllUsers } = require('../models/userModel');

function registerUser({ login, senha, nome, favorecidos = [] }) {
  if (findUserByLogin(login)) {
    throw new Error('Usuário já existe');
  }
  const user = { login, senha, nome, favorecidos };
  addUser(user);
  return user;
}

function listUsers() {
  return getAllUsers();
}

module.exports = { registerUser, listUsers };
