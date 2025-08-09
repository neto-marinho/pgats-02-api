const { registerUser, listUsers } = require('../services/userService');

const userController = {
  register: (req, res) => {
    try {
      const user = registerUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  list: (req, res) => {
    res.json(listUsers());
  }
};

module.exports = userController;
