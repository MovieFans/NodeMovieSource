/**
 * Created by judith on 2016/3/6.
 */
var MovieModel = require('../model/movie_model');

/**
 * 电影录入页
 */
exports.tomovTypeIn = function(req,res){
	res.render('movie/movie_typeIn',{
	title:'电影录入页'
});
}

exports.tomovDetail = function(req,res) {
	var name = "功夫熊猫3";
	MovieModel.findOne({moviename: name}, function (err, movie) {
		if (err) {
			console.log(err);
		}
		if (!movie) {
			res.render('movie/movie_detail', {
				title: '电影详情页'
			});
		}
		res.render('movie/movie_detail', {
			title: movie.moviename
		});
	})
}


/**
 * 电影录入
 */
exports.movieTypeIn = function(req,res) {
	var _movie = req.body;

	MovieModel.findOne({moviename: _movie.moviename}, function (err, movie) {
		if (err) {
			console.log(err);
		}
		if (movie) {
			console.log('该电影已存在！');
			return res.redirect('/');
		} else {
			var newMovie = new MovieModel(_movie);
			newMovie.save(function (err, movie) {
				if (err) {
					console.log(err);
				}
				res.redirect('/movie/movieTypeIn');
			});
		}
	})
}