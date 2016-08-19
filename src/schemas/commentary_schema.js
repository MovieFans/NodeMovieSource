/**
 * Created by lily on 2016/8/10.
 */
var mongoose = require('mongoose');

var commentarySchema = new mongoose.Schema({
	thisusername: {
		unique: true,
		type: String
	},
	starvalue:{
		type: Number,
		default: 0
	},
	movietag:string,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		}
	},
	moviecommentary:String,
	onlymyshow:Boolean,
	shareblog:Boolean
});

commentarySchema.pre('save',function(next){
	var commentary = this;

	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}

	next();
});

commentarySchema.statics = {
	fetch: function(cb) {
		return this
			.find({})
			.sort('meta.createAt')
			.exec(cb);
	},
	findById: function(id, callback) {
		return this.findOne({_id: id}).exec(callback);
	}
};

module.exports = commentarySchema;