// const http = require("http");
const url = require("url");
const fs = require("fs");
const express = require('express');
const app = express();


// websocket代码
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);
// app.get('/zybcome', function (req, res) {
//     res.sendFile(__dirname + '/liantian.html');
// });
// io.on('connection', function (socket) {
//     // console.log('a user connected');
//     // socket.on('disconnect', function () {
//     //     console.log('user disconnected');
//     // });
//     socket.on('message', function (msg) {
//         // console.log('message: ' + msg);
//         io.emit('message', msg);
//     });
// });

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
    console.log('http://127.0.0.1:5566/');
});






// 连接user_msg数据库
// {
//     var mysql = require('mysql');
//     var user_msg = mysql.createConnection({
//         host: 'localhost', //数据库地址
//         user: 'root', //账号
//         password: '123456', //密码
//         database: 'user_msg', //库名
//         multipleStatements: true //允许执行多条语句
//     });
//     user_msg.connect();

//     app.post('/addUser', (req, res) => {
//         var response = {
//             register_name: req.body.register_name,
//             register_psw: req.body.register_psw,
//             register_date: req.body.register_date
//         };
//         console.log(response.register_name, response.register_psw, response.register_date)
//         const addUser = "CREATE TABLE " + response.register_name + "(user_id INT UNSIGNED AUTO_INCREMENT,user_name varchar(255),user_psw varchar(255),user_date varchar(255),primary key (user_id))"
//         user_msg.query(addUser, (err, result) => {
//             if (err) {
//                 console.log('[DELETE ERROR] - ', err.message);
//                 res.json(err.message);
//                 return;
//             } else {
//                 // res.json(result);
//                 // 添加用户
//                 console.log(response.register_name, response.register_psw, response.register_date)
//                 const addSql = "INSERT INTO " + response.register_name + "(user_name, user_psw , user_date) VALUES('" + response.register_name + "','" + response.register_psw + "','" + response.register_date + "')";
//                 user_msg.query(addSql, function (err, result) {
//                     if (err) {
//                         console.log('[INSERT ERROR] - ', err.message);
//                         return;
//                     } else {
//                         console.log(result);
//                         res.json(response.register_name);
//                     }
//                 });
//             };
//         });
//     });

    // 查找朋友
    // app.post('/queryBoy', (req, res) => {
    //     var response = {
    //         boy_name: req.body.boy_name,
    //     };
    //     const sql = "SELECT * FROM " + response.boy_name + " where user_name='" + response.boy_name + "'";
    //     user_msg.query(sql, (err, result) => {
    //         if (err) {
    //             console.log('[DELETE ERROR] - ', err.message);
    //             res.json(err.message);
    //             return;
    //         } else {
    //             console.log(result);
    //             // res.json(response.boy_name);
    //             res.json(result[0]);
    //             // 添加用户
    //         };
    //     });
    // });









// }






















{
    // 连接test数据库
    // var mysql = require('mysql');
    // var connection = mysql.createConnection({
    //     host: 'localhost', //数据库地址
    //     user: 'root', //账号
    //     password: '123456', //密码
    //     database: 'test', //库名
    //     multipleStatements: true //允许执行多条语句
    // });
    // connection.connect();





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
    // app.post('/del/user', (req, res) => {
    //     var response = {
    //         user_name: req.body.user_name,
    //         user_psw: req.body.user_psw
    //     };
    //     // 根据用户名字查询数据库是否存在
    //     const sql = "SELECT * FROM user_msg where user_name='" + response.user_name + "'";
    //     connection.query(sql, (err, result) => {
    //         // console.log(result);
    //         if (err) {
    //             console.log('[SELECT ERROR] - ', err.message);
    //             res.json(false);
    //             return;
    //         } else {
    //             // 如果用户存在则删除用户
    //             if (result.length !== 0 && response.user_name === result[0].user_name && response.user_psw === result[0].user_psw) {
    //                 const delSql = "DELETE FROM user_msg where user_name='" + response.user_name + "'";
    //                 connection.query(delSql, (err, result) => {
    //                     if (err) {
    //                         console.log('[DELETE ERROR] - ', err.message);
    //                         return;
    //                     } else {
    //                         res.json(response.user_name);
    //                     }
    //                 });
    //             } else {
    //                 // 如果用户不存在返回false
    //                 res.json(false);
    //             };
    //         };
    //     });
    // });





    // 修改密码
    // app.post('/set/psw', (req, res) => {
    //     var response = {
    //         user_name: req.body.user_name,
    //         user_psw: req.body.user_psw,
    //         ipt_new: req.body.ipt_new
    //     };
    //     // 查询用户信息是否存在
    //     const sql = "SELECT * FROM user_msg where user_name='" + response.user_name + "'";
    //     connection.query(sql, (err, result) => {
    //         if (err) {
    //             console.log('[SELECT ERROR] - ', err.message);
    //             res.json(false);
    //             return;
    //         } else {
    //             if (result.length !== 0 && response.user_name === result[0].user_name && response.user_psw === result[0].user_psw) {
    //                 const upDate = "UPDATE user_msg SET user_psw='" + response.ipt_new + "' WHERE user_name='" + response.user_name + "'";
    //                 connection.query(upDate, (err, result) => {
    //                     if (err) {
    //                         console.log('[SELECT ERROR] - ', err.message);
    //                         res.json("set-err");
    //                         return;
    //                     } else {
    //                         res.json(true);
    //                     };
    //                 });
    //             } else {
    //                 res.json("err");
    //             };
    //         };
    //     });
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

    // app.post('/user/msg', function (req, res) {
    //     // 接收前端form表单传入的值
    //     response = {
    //         user_name: req.body.user_name,
    //         user_psw: req.body.user_psw
    //     };
    //     const sql = "SELECT * FROM user_msg where user_name='" + response.user_name + "'";
    //     //查询
    //     connection.query(sql, function (err, result) {
    //         console.log(response.user_name);
    //         if (err) {
    //             console.log('[SELECT ERROR] - ', err.message);
    //             return;
    //         } else {
    //             if (result.length === 0 && response.user_name !== '' && response.user_psw !== '') {
    //                 // 添加用户
    //                 const addSql = "INSERT INTO user_msg(user_name, user_psw) VALUES('" + response.user_name + "','" + response.user_psw + "')";
    //                 connection.query(addSql, function (err, result) {
    //                     if (err) {
    //                         console.log('[INSERT ERROR] - ', err.message);
    //                         return;
    //                     } else {
    //                         console.log(result);
    //                         res.json(true);
    //                     }
    //                 });
    //             } else {
    //                 res.json(false);
    //             }
    //         }
    //     });
    // });






    const jwt = require('jsonwebtoken');
    // //用户登录
    app.post('/user/login', (req, res) => {
        // console.log(req);
        const response = {
            user_name: req.body.user_name,
            user_psw: req.body.user_psw
        };
        // const sql = "SELECT * FROM user_msg where user_name='" + response.user_name + "'";
        //查询
        // connection.query(sql, (err, result) => {
            // console.log(result);
            // if (err) {
                // console.log('[SELECT ERROR] - ', err.message);
                // res.json(false);
                // return;
            // } else {
                // if (result.length !== 0 && response.user_name === result[0].user_name && response.user_psw === result[0].user_psw) {
                    let content = { name: req.body.name }; // 要生成token的主题信息
                    let secretOrPrivateKey = "zyb";
                    let token = jwt.sign(content, secretOrPrivateKey, {
                        expiresIn: 60 * 60 * 1  // 1小时过期
                    });
                    // res.json(result[0].user_name);
                    res.json({ status: 1, mess: 'ok', token: token, user_name: req.body.name });
                // } else {
                    // res.json(false);
                // }
            // }
        // });
    });
    // 解析token
    app.post('/checkUser', (req, res) => {
        console.log(req);
        let token = req.headers.authorization; // 从Authorization中获取token
        // console.log(token);
        let secretOrPrivateKey = "zyb"; // 这是加密的key（密钥）
        jwt.verify(token, secretOrPrivateKey, (err, decode) => {
            if (err) {  //  时间失效的时候 || 伪造的token
                res.send({ 'status': 10010 });
            } else {
                res.send({ 'status': 10000 });
                console.log(decode);
            }
        });
    });






    // // 根据ID 获取相关数据

    // //添加留言,查看留言
    // app.get('/leav/msg', (req, res) => {
    //     const user_name = req.query.user_name;
    //     const user_leav = req.query.user_leav;
    //     // console.log(user_leav);
    //     if (user_leav == undefined) {
    //         const sql = "SELECT * FROM leav_msg where user_name='" + user_name + "'";
    //         //查
    //         connection.query(sql, (err, result) => {
    //             if (err) {
    //                 console.log('[SELECT ERROR] - ', err.message);
    //                 return;
    //             }
    //             res.json(result);
    //         });
    //     } else {
    //         const addSql = "INSERT INTO leav_msg(user_name, user_leav) VALUES('" + user_name + "','" + user_leav + "')";
    //         connection.query(addSql, function (err, result) {
    //             if (err) {
    //                 console.log('[INSERT ERROR] - ', err.message);
    //                 return;
    //             } else {
    //                 const sql = "SELECT * FROM leav_msg where user_name='" + user_name + "'";
    //                 //查
    //                 connection.query(sql, (err, result) => {
    //                     if (err) {
    //                         console.log('[SELECT ERROR] - ', err.message);
    //                         return;
    //                     }
    //                     res.json(result);
    //                 });
    //             };
    //         });
    //     }
    // });







    // //删除留言
    // app.get('/del/leav', (req, res) => {
    //     const leav_id = req.query.leav_id;
    //     const delSql = "DELETE FROM leav_msg where leav_id='" + leav_id + "'";
    //     connection.query(delSql, (err, result) => {
    //         if (err) {
    //             console.log('[DELETE ERROR] - ', err.message);
    //             return;
    //         } else {
    //             res.json(result);
    //         };
    //     });
    // });








    // connection.end();
}