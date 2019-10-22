var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    // console.log('a user connected');
    // socket.on('disconnect', function () {
    //     console.log('user disconnected');
    // });
    socket.on('message', function (msg) {
        // console.log('message: ' + msg);
        io.emit('message', msg);
    });
});
// 连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost', //数据库地址
    user: 'root', //账号
    password: '123456', //密码
    database: 'test', //库名
    multipleStatements: true //允许执行多条语句
});
connection.connect();



http.listen(3356, function () {
    console.log('listening on *:3000');
});