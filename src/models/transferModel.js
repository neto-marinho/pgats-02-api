// Simula banco de transferências em memória
const transfers = [];

function addTransfer(transfer) {
  transfers.push(transfer);
}

function getAllTransfers() {
  return transfers;
}

module.exports = { transfers, addTransfer, getAllTransfers };
