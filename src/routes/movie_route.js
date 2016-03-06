var express = require('express');
var router = express.Router();

var Movie = require('../controllers/movie.js');

/* GET users listing. */
router.get('/movieTypeIn',Movie.tomovTypeIn);

/* POST users listing. */

module.exports = router;