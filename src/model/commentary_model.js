/**
 * Created by lily on 2016/8/10.
 */
var mongoose = require('mongoose');

var commentarySchema = require('../schemas/commentary_schema.js');
var Commentary = mongoose.model('Commentary',commentarySchema);

module.exports = Commentary;
