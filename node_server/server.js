const http = require("http");
const url = require("url");
const fs = require("fs");
// const path = require("path");
http.createServer((req, res) => {
    if (req.url == '/favicon.ico') return;
    var pathname = url.parse(req.url).pathname;
    if (pathname == "/") {
        pathname = "/index.html";
    };
    console.log(pathname);
    fs.readFile('./index' + pathname, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, {
                "Content-type": "text/html;charset=utf-8"
            });
            res.end(data);
        };
    });

}).listen(6655, '127.0.0.1', () => {
    console.log("running......");
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost', //数据库地址
        user: 'root', //账号
        password: '123456', //密码
        database: 'test', //库名
        multipleStatements: true //允许执行多条语句
    });
    connection.connect();

    
    //增
    // var addSql = 'INSERT INTO runoob_tbl(runoob_id, runoob_title, runoob_author, submission_date) VALUES(0,"JAVA 教程", "RUNOOB.COM", "2019-06-09")';
    // // var addSqlParams = ["JAVA 教程", "RUNOOB.COM", 'NOW()'];
    // connection.query(addSql, function (err, result) {
    //     if (err) {
    //         console.log('[INSERT ERROR] - ', err.message);
    //         return;
    //     }
    //     console.log('--------------------------INSERT----------------------------');
    //     //console.log('INSERT ID:',result.insertId);
    //     console.log('INSERT ID:', result);
    //     console.log('-----------------------------------------------------------------\n\n');
    // });



    // 删除
    // var delSql = 'DELETE FROM runoob_tbl where runoob_author="RUNOOB.COM"';
    // connection.query(delSql, function (err, result) {
    //     if (err) {
    //         console.log('[DELETE ERROR] - ', err.message);
    //         return;
    //     }

    //     console.log('--------------------------DELETE----------------------------');
    //     console.log('DELETE affectedRows', result);
    //     console.log('-----------------------------------------------------------------\n\n');
    // });


    var sql = 'SELECT * FROM runoob_tbl';
    //查
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        // res.end(result);
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n');
    });
    connection.end();
});
