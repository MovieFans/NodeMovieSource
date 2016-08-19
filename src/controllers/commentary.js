/**
 * Created by lily on 2016/8/10.
 */
var CommentaryModel = require('../model/commentary_model');
var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');

/*保存短评*/
exports.saveCommentary = function(req, res){
	var _commentary = req.body;

	CommentaryModel.findOne({thisusername:_commentary.thisusername}, function(err, commentary){
		if(err){
			console.log(err);
		}
		if(commentary){
			return;
		}else{
			var commentaryModel = new CommentaryModel(_commentary);
			commentaryModel.save(function(err, commentary){
				if(err){
					console.log(err);
				}
				res.redirect('/movie/movieTypeIn');
			});
		}
	});
}
