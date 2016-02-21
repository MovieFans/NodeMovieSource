/**
 * Created by Roderick on 2016/2/20.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
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