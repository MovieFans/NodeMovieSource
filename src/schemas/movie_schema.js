/**
 * Created by Judith on 2016/3/4.
 */
var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	moviename:{
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
	moviepic:String,
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

MovieSchema.statics = {
	fetch: function(cb) {
		return this
				.find({})
				.sort('meta.updateAt')
				.exec(cb);
	},
	findById: function(id, callback) {
		return this.findOne({_id: id}).exec(callback);
	}
};

module.exports = MovieSchema;
