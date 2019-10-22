var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// 解决跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    };
});
// app.get('/zybcome', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });
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
http.listen(3356, function () {
    console.log('listening on *:3356');
});