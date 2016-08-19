/**
 * Created by judith on 2016/3/6.
 */
var MovieModel = require('../model/movie_model');
var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
var request = require('superagent');
var weeks = new Array("周日", "周一", "周二","周三","周四", "周五","周六");

//日期格式化
Date.prototype.Format = function (fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

//时间戳转化为日期
function getLocalTime(nS) {
	return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}

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
 * 购票&影讯页
 */
exports.tomovieSeat = function(req, res) {
	var id =req.params.id;
	var name = req.params.name;
	var theDate = new Date().Format("yyyyMMdd");

	MovieModel.findById(id, function (err, movie) {
		if (err) {
			console.log(err);
		}

		request.get('http://192.168.1.103:8080/movieQuery/Ooops! Noah is Gone.../' + theDate)
			/*.type('form')
			.send({movie:'中文'})
			.send({ pet: 'tobi' })*/
			.end(function(err, response){
				if(!err && response.ok){
					var cenimas = [];
					var cenima = response.body;
					cenima.releaseDate = getLocalTime(cenima.releaseDate).substr(6,6) + weeks[new Date(cenima.releaseDate).getDay()];
					cenimas.push(cenima);

					res.render('movie/movie_seat', {
						movie: movie,
						cenimas:cenimas
					});
				}
			});
		/*request({url:'http://192.168.1.103:8080/movieQuery/'+name+'/'+theDate,
				method: 'POST',
				postData: {params: {name: 'movie', value : '中文'}}},
			function(error, response, body) {
				if (!error && response.statusCode == 200) {
					var info = JSON.parse(body);
					console.log(info);
				}});*/



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
