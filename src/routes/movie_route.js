var express = require('express');
var router = express.Router();

var Movie = require('../controllers/movie.js');

/* GET users listing. */
router.get('/movieTypeIn',Movie.tomovTypeIn);
router.get('/movDetail',Movie.tomovDetail);

/* POST users listing. */
router.post('/movieTypeIn',Movie.movieTypeIn);

module.exports = router;