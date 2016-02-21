var express = require('express');
var router = express.Router();

var User = require('../controllers/user.js');

/* GET users listing. */
router.get('/signup', User.toSignUp);

module.exports = router;
