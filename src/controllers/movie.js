/**
 * Created by judith on 2016/3/6.
 */
var MovieModel = require('../model/movie_model');
var fs = require('fs');
var formidable = require('formidable');
/**
 * 电影录入页
 */
exports.tomovTypeIn = function(req,res){
	res.render('movie/movie_typeIn',{
	title:'电影录入页'
});
}

exports.tomovDetail = function(req,res) {
	var id = req.params.id
	MovieModel.findById(id, function (err, movie) {
		if (err) {
			console.log(err);
		}
		if (!movie) {
			res.render('movie/movie_detail', {
				//title: '电影详情页'
			});
		}
		res.render('movie/movie_detail', {
			movie: movie
		});
	})
}


/**
 * 电影录入
 */
exports.movieTypeIn = function(req,res) {
	var _movie = req.body;

	var form = new formidable.IncomingForm(); //创建上传表单
	form.uploadDir = '../../public/upload/';    //上传目录
	form.keepExtensions = true;             //保留后缀格式
	form.maxFieldsSize = 2*1024*1024;       //文件大小

	form.parse(req, function(err, fields, files) {
		if (err) {
			console.log(err);
		}

		var extName = '';  //后缀名
		switch (files.fulAvatar.type) {
			case 'image/pjpeg':
				extName = 'jpg';
				break;
			case 'image/jpeg':
				extName = 'jpg';
				break;
			case 'image/png':
				extName = 'png';
				break;
			case 'image/x-png':
				extName = 'png';
				break;
		}
		if (extName.length == 0) {
			res.locals.error = '只支持png和jpg格式图片';
			console.log(err);
		}
		var avatarName = Math.random() + '.' + extName;
		var newPath = form.uploadDir + avatarName;

		console.log(newPath);
		fs.renameSync(files.fulAvatar.path, newPath);  //重命名

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
		});
	});
}
