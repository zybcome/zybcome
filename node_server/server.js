const http = require("http");
const url = require("url");
const fs = require("fs");
const express = require('express')
const app = express()


//解析pots请求
const bodyParser = require('body-parser');


// const path = require("path");
// http监听
// http.createServer((req, res) => {
//     if (req.url == '/favicon.ico') return;
//     var pathname = url.parse(req.url).pathname;
//     if (pathname == "/") {
//         pathname = "/index.html";
//     };
//     console.log(pathname);
//     fs.readFile('./index' + pathname, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.writeHead(200, {
//                 "Content-type": "text/html;charset=utf-8"
//             });
//             res.end(data);
//         };
//     });
// }).listen(6655, '127.0.0.1', () => {
//     console.log("running......");
// });



app.listen(5566, () => {
    // 打印一下
    console.log('http://127.0.0.1:5566/api/gethero?runoob_id=1');
})
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






// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: true })
// 添加用户
app.post('/user/msg', urlencodedParser, function (req, res) {
    // 接收前端form表单传入的值
    response = {
        user_name: req.body.user_name,
        user_psw: req.body.user_psw
    };
    const sql = "SELECT * FROM user_msg where user_name='" + response.user_name + "'";
    //查
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        } else {
            if (result.length === 0) {
                var addSql = "INSERT INTO user_msg(user_name, user_psw) VALUES('" + response.user_name + "','" + response.user_psw + "')";
                connection.query(addSql, function (err, result) {
                    if (err) {
                        console.log('[INSERT ERROR] - ', err.message);
                        return;
                    }
                    console.log('--------------------------INSERT----------------------------');
                    //console.log('INSERT ID:',result.insertId);
                    console.log(result);
                    res.jsonp(result);
                });
            } else {
                res.jsonp(result.user_name);
                console.log(result.user_name);
            }
        }
    });

    // 添加用户信息
    // var addSql = "INSERT INTO user_msg(user_name, user_psw) VALUES('" + response.user_name + "','" + response.user_psw + "')";
    // connection.query(addSql, function (err, result) {
    //     if (err) {
    //         console.log('[INSERT ERROR] - ', err.message);
    //         return;
    //     }
    //     console.log('--------------------------INSERT----------------------------');
    //     //console.log('INSERT ID:',result.insertId);
    //     console.log(result);
    //     res.jsonp(result);
    //     console.log('-----------------------------------------------------------------\n\n');
    // });
});







// 根据ID 获取相关数据
app.get('/aaa/gethero', (req, res) => {
    const id = req.query.runoob_id;
    const sql = 'SELECT * FROM runoob_tbl where runoob_id=' + id;
    //查
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.jsonp(result);
        console.log(result);
    });
});
// connection.end();