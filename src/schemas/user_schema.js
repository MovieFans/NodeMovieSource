/**
 * Created by Roderick on 2016/2/20.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// 定义加密密码计算强度
var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
	username: {
		unique: true,
		type: String
	},
	password: String,
	//- 0: nomal
	//- 1: verified
	//- 2: professonal
	//- >10: admin
	//- >50: superAdmin
	role: {
		type: Number,
		default: 0
	},
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})
// 使用pre中间件在用户信息存储前进行密码加密
UserSchema.pre('save', function(next) {
	var user = this;

	if(this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now
	}else {
		this.meta.updateAt = Date.now();
	}
  // 进行加密（加盐）
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if(err) return next(err);
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if(err) return next(err);
			user.password = hash;
			next();
		});
	});
});

UserSchema.statics = {
	findById: function(id, callback) {
		return this.findOne({_id: id}).exec(callback);
	}
};

UserSchema.methods = {
	comparePassword:function(_password,callback){
		bcrypt.compare(_password,this.password,function(err,isMatch){
			if(err){
				return callback(err);
			}
			callback(null,isMatch);
		});
	}
}

module.exports = UserSchema;