var express = require('express');
var router = express.Router();
const videoCallControllers = require('../controllers/videoCall');

/* GET home page. */
router.get('/generate-token/:uid/:channel', videoCallControllers.generateToken);

module.exports = router;
