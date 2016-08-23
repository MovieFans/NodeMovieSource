/**
 * Created by Roderick on 2016/8/22.
 */
var thrift =require('thrift');
var hello = require('./HelloWorld');
//var helloType = require('./HelloWorld_types');

var options = {
    transport: thrift.TFramedTransport,
    protocol: thrift.TBinaryProtocol,
    path: "/HelloWorld",
    headers: {"Connection": "close"},
    https: false
};

var connection = thrift.createHttpConnection("localhost", 6060, options);

//var connection = thrift.createConnection("localhost", 6060);

connection.on('error', function(err) {
    if (err)  console.log(err);
    /*assert(false, err);*/
});

var client = thrift.createClient(hello, connection);
//exports.client = thrift.createClient(hello, connection);
client.sayHello('roderick', function(err, response) {
    console.log('sayHello()');
    connection.end();
});

