var express = require('express');
var router = express.Router();

var User = require('../controllers/user.js');

/* GET users listing. */
router.get('/signup', User.toSignUp);
router.get('/signin', User.toSignIn);

/* POST users listing. */
router.post('/signup', User.signup);

module.exports = router;
