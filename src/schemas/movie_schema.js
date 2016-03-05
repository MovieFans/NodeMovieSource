/**
 * Created by Judith on 2016/3/4.
 */
var mongoose = require('mongoose');
var bcrypt = require('bctypt-nodejs');

var MovieSchema = new mongoose.Schema({
	movieName:{
		unique: true,
		type: String
	},
	director:String,
	writers:String,
	actors:String,
	type:String,
	countries:String,
	language:String,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		},
		showDate:{
			type:Date,
			default: Date.now()
		}
	},
	runtime:String
});

MovieSchema.pre('save',function(next){
	var movie = this;

	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}

	next();
});

module.exports = MovieSchema;
