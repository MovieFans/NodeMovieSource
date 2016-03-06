/**
 * Created by judith on 2016/3/6.
 */
var MovieModel = require('../model/user_model');

/**
 * 电影录入页
 */
exports.tomovTypeIn = function(req,res){
	res.render('movie/movie_typeIn',{
		title:'电影详情页'
	});
}