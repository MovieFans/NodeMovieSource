/**
 * Created by judith on 2016/3/6.
 */
var MovieModel = require('../model/movie_model');
var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
/**
 * 电影录入页
 */
exports.tomovTypeIn = function(req,res){
	res.render('movie/movie_typeIn',{
	title:'电影录入页'
});
}
/**
 * 电影详情页
 */
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
	var form = new formidable.IncomingForm();
	form.uploadDir = './public/upload/'
	form.keepExtensions = true;  //保留后缀格式
	form.parse(req, function(err, fields, files) {
		if (err) {
			console.log(err);
		}
		var newMovie = new MovieModel(fields);
		var path = files.moviepic.path.substring(6);
		newMovie.moviepic = path;
		newMovie.save(function (err, movie) {
			if (err) {
				console.log(err);
			}
			res.redirect('/movie/movieTypeIn');
		});
	});
}
