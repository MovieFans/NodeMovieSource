var express = require('express');
var router = express.Router();
var Index = require('../controllers/index.js');
/* GET home page. */
router.get('/',Index.toindex);
module.exports = router;
