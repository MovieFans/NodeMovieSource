/**
 * Created by Roderick on 2016/8/22.
 */
var thrift =require('thrift');
/*var ThriftTransports = require('thrift/transport');
var ThriftProtocols = require('thrift/protocol');*/
var hello = require('./HelloWorld');
var helloType = require('./HelloWorld_types');

/*transport = ThriftTransports.TBufferedTransport()
protocol = ThriftProtocols.TBinaryProtocol()*/

/*var connection = thrift.createConnection("localhost", 6060, {
    transport : transport,
    protocol : protocol
});*/
var connection = thrift.createConnection("localhost", 6060);

connection.on('error', function(err) {
    /*assert(false, err);*/
});

//var client = thrift.createClient(hello, connection);
exports.client = thrift.createClient(hello, connection);
    /*exports.hello = client.sayHello('roderick', function(err, response) {
    console.log('sayHello()');
    connection.end();});*/

