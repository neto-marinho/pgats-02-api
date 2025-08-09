const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/', userController.register);
router.get('/', userController.list);

module.exports = router;
