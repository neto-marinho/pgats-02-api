const { addTransfer } = require('../models/transferModel');
const { findUserByLogin } = require('../models/userModel');

function transfer({ remetente, destinatario, valor }) {
  const remetenteUser = findUserByLogin(remetente);
  const destinatarioUser = findUserByLogin(destinatario);
  if (!remetenteUser || !destinatarioUser) {
    throw new Error('Usuário remetente ou destinatário não encontrado');
  }
  const isFavorecido = remetenteUser.favorecidos && remetenteUser.favorecidos.includes(destinatario);
  if (!isFavorecido && valor >= 5000) {
    throw new Error('Transferências acima de R$ 5.000,00 só são permitidas para favorecidos');
  }
  const transfer = { remetente, destinatario, valor, data: new Date() };
  addTransfer(transfer);
  return transfer;
}

module.exports = { transfer };
