//require表示引包，引包就是引用自己的一个特殊功能
var http = require('http');
 
//创建服务器，参数就是一个回调函数，表示如果有请求进来，要做什么
var server = http.createServer(function(req, res){
            //req表示请求， request；res表示响应，response
 
    //设置HTTP头部，状态码是200， 文件类型是html。字符编码格式是 UTF-8
    res.writeHead(200, {'Content-Type':'text/html; charset= UTF-8; '});
    res.end('Hello World!');
});
 
//运行服务器，监听8083端口
server.listen(8083, '127.0.0.1');