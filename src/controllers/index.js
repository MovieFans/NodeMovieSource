/**
 * Created by Roderick on 2016/2/17.
 */
var MovieModel = require('../model/movie_model');
var info = require('../remote/cinema_info')

exports.toindex = function(req, res) {

	info.client.sayhello('roderick', function(err, response) {
		console.log('sayhello()');
		connection.end();
	});

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