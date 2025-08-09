const { login } = require('../services/authService');

const authController = {
  login: (req, res) => {
    try {
      const user = login(req.body);
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = authController;
