/**
 * Created by Roderick on 2016/2/20.
 */
var mongoose = require('mongoose');

var UserSchema = require('../schemas/user_schema.js');
var User = mongoose.model('User', UserSchema);

module.exports = User;