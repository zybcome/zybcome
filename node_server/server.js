const http = require("http");
const url = require("url");
const fs = require("fs");
const express = require('express');
const app = express();


//解析pots请求
const bodyParser = require('body-parser');


// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: true });


// 解析ajax请求post 编码解析
app.use(bodyParser.json());


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


// 删除用户
app.post('/del/user', (req, res) => {
    var response = {
        user_name: req.body.user_name,
        user_psw: req.body.user_psw
    };
    // 根据用户名字查询数据库是否存在
    const sql = "SELECT * FROM user_msg where user_name='" + response.user_name + "'";
    connection.query(sql, (err, result) => {
        // console.log(result);
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.json(false);
            return;
        } else {
            // 如果用户存在则删除用户
            if (result.length !== 0 && response.user_name === result[0].user_name && response.user_psw === result[0].user_psw) {
                const delSql = "DELETE FROM user_msg where user_name='" + response.user_name + "'";
                connection.query(delSql, (err, result) => {
                    if (err) {
                        console.log('[DELETE ERROR] - ', err.message);
                        return;
                    } else {
                        res.json(response.user_name);
                    }
                });
            } else {
                // 如果用户不存在返回false
                res.json(false);
            };
        };
    });
});


// 修改密码
app.post('/set/psw', (req, res) => {
    var response = {
        user_name: req.body.user_name,
        user_psw: req.body.user_psw,
        ipt_new: req.body.ipt_new
    };
    // 查询用户信息是否存在
    const sql = "SELECT * FROM user_msg where user_name='" + response.user_name + "'";
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.json(false);
            return;
        } else {
            if (result.length !== 0 && response.user_name === result[0].user_name && response.user_psw === result[0].user_psw) {
                const upDate = "UPDATE user_msg SET user_psw='" + response.ipt_new + "' WHERE user_name='" + response.user_name + "'";
                connection.query(upDate, (err, result) => {
                    if (err) {
                        console.log('[SELECT ERROR] - ', err.message);
                        res.json("set-err");
                        return;
                    } else {
                        res.json(true);
                    };
                });
            } else {
                res.json("err");
            };
        };
    });
});



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



// form表单提交代码


// app.post('/form/user/msg', urlencodedParser, (req, res) => {
//     response = {
//         user_name: req.body.user_name,
//         user_psw: req.body.user_psw
//     };
//     const sql = "SELECT * FROM user_msg where user_name='" + response.user_name + "'";
//     //查
//     connection.query(sql, function (err, result) {
//         if (err) {
//             console.log('[SELECT ERROR] - ', err.message);
//             return;
//         } else {
//             if (result.length === 0) {
//                 const addSql = "INSERT INTO user_msg(user_name, user_psw) VALUES('" + response.user_name + "','" + response.user_psw + "')";
//                 connection.query(addSql, function (err, result) {
//                     if (err) {
//                         console.log('[INSERT ERROR] - ', err.message);
//                         return;
//                     }
//                     console.log('--------------------------INSERT----------------------------');
//                     //console.log('INSERT ID:',result.insertId);
//                     console.log(result);
//                     res.jsonp(result);
//                 });
//             } else {
//                 res.jsonp(result.user_name);
//                 console.log(result.user_name);
//             }
//         }
//     });
// });





// ajax请求post代码

// 注册用户

app.post('/user/msg', function (req, res) {
    // 接收前端form表单传入的值
    response = {
        user_name: req.body.user_name,
        user_psw: req.body.user_psw
    };
    const sql = "SELECT * FROM user_msg where user_name='" + response.user_name + "'";
    //查询
    connection.query(sql, function (err, result) {
        console.log(response.user_name);
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        } else {
            if (result.length === 0 && response.user_name !== '' && response.user_psw !== '') {
                // 添加用户
                const addSql = "INSERT INTO user_msg(user_name, user_psw) VALUES('" + response.user_name + "','" + response.user_psw + "')";
                connection.query(addSql, function (err, result) {
                    if (err) {
                        console.log('[INSERT ERROR] - ', err.message);
                        return;
                    }
                    console.log(result);
                    res.json(true);
                });
            } else {
                res.json(false);
            }
        }
    });
});




//用户登录
app.post('/user/login', (req, res) => {
    // console.log(req);
    const response = {
        user_name: req.body.user_name,
        user_psw: req.body.user_psw
    };
    const sql = "SELECT * FROM user_msg where user_name='" + response.user_name + "'";
    //查询
    connection.query(sql, (err, result) => {
        // console.log(result);
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.json(false);
            return;
        } else {
            if (result.length !== 0 && response.user_name === result[0].user_name && response.user_psw === result[0].user_psw) {
                res.json(result[0].user_name);
            } else {
                res.json(false);
            }
        }
    });
});





// 根据ID 获取相关数据

//添加留言,查看留言
app.get('/leav/msg', (req, res) => {
    const user_name = req.query.user_name;
    const user_leav = req.query.user_leav;
    // console.log(user_leav);
    if (user_leav == undefined) {
        const sql = "SELECT * FROM leav_msg where user_name='" + user_name + "'";
        //查
        connection.query(sql, (err, result) => {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            res.json(result);
        });
    } else {
        const addSql = "INSERT INTO leav_msg(user_name, user_leav) VALUES('" + user_name + "','" + user_leav + "')";
        connection.query(addSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            } else {
                const sql = "SELECT * FROM leav_msg where user_name='" + user_name + "'";
                //查
                connection.query(sql, (err, result) => {
                    if (err) {
                        console.log('[SELECT ERROR] - ', err.message);
                        return;
                    }
                    res.json(result);
                });
            };
        });
    }

});


//删除留言
app.get('/del/leav', (req, res) => {
    const leav_id = req.query.leav_id;
    const delSql = "DELETE FROM leav_msg where leav_id='" + leav_id + "'";
    connection.query(delSql, (err, result) => {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return;
        } else {
            res.json(result);
        };
    });
});




// connection.end();