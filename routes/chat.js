var express = require('express');
var router = express.Router();
const chatControllers = require('../controllers/chat');

/* GET home page. */
router.get('/generate-token', chatControllers.generateToken);

module.exports = router;
