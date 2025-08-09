const express = require('express');
const transferController = require('../controllers/transferController');
const router = express.Router();

router.post('/', transferController.transfer);

module.exports = router;
