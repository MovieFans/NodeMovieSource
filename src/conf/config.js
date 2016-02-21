/**
 * Created by Roderick on 2016/2/20.
 */

//mongodb数据库参数配置
var user_name = 'roderick';
var password = '123456';
var db_url = 'localhost';
var db_port = 27017;
var db_name = 'nodemovie';

/*var options = {
	db: { native_parser: true },
	server: { poolSize: 5 },
	replset: { rs_name: 'myReplicaSetName' },
	user: 'myUserName',
	pass: 'myPassword'
}
mongoose.connect(uri, options);*/

// exports.db_str_test = 'mongodb://localhost/nodemovie'; //无用户名密码，裸奔连接
//var dbUrl = 'mongodb://roderick:123456@localhost:27017/nodemovie';
exports.db_str = 'mongodb://' + user_name + ':' + password + '@' + db_url + ':' + db_port + '/' + db_name;