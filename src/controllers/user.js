/**
 * Created by Roderick on 2016/2/17.
 */
var UserModel = require('../model/user_model');

/**
 * 注册页面
 */
exports.toSignUp = function (req, res) {
	res.render('user/sign_up', {
		title: '欢迎加入豆瓣'
	});
}

/**
 * 登录页面
 */
exports.toSignIn = function(req, res){
	res.render('user/sign_in', {
		title: '登录豆瓣'
	});
}


/**
 * 用户注册
 */
exports.signup = function (req, res) {
	var _user = req.body;

	UserModel.findOne({username: _user.username}, function (err, user) {
		if (err) {
			console.log(err);
		}
		if (user) {
			console.log('用户名已存在！');
			return res.redirect('/signin');
		} else {
			var newUser = new UserModel(_user);
			newUser.save(function (err, user) {
				if (err) {
					console.log(err);
				}
				res.redirect('/');
			})
		}
	});
}