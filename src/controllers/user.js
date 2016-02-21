/**
 * Created by Roderick on 2016/2/17.
 */

exports.toSignUp = function(req, res) {
    res.render('user/sign_up', {
        title: '欢迎加入豆瓣'
    });
}