// Simula banco de dados em memória
const users = [];

function addUser(user) {
  users.push(user);
}

function findUserByLogin(login) {
  return users.find(u => u.login === login);
}

function getAllUsers() {
  return users;
}

module.exports = { users, addUser, findUserByLogin, getAllUsers };
