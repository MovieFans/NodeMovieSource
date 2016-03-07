/**
 * Created by judith on 2016/3/6.
 */
var mongoose = require('mongoose');

var MovieSchema = require('../schemas/movie_schema.js');
var Movie = mongoose.model('Movie',MovieSchema);

module.exports = Movie;
