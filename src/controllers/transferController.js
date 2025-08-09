const { transfer } = require('../services/transferService');

const transferController = {
  transfer: (req, res) => {
    try {
      const result = transfer(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = transferController;
