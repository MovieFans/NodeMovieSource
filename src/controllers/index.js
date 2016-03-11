/**
 * Created by Roderick on 2016/2/17.
 */
var MovieModel = require('../model/movie_model');

exports.toindex = function(req, res) {
	MovieModel.fetch(function(err, movies){
		if(err) {
			console.log(err);
		}
		res.render('index', {
			title: '豆瓣电影',
			movies: movies
		});
	});
}