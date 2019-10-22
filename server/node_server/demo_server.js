const fs = require('fs');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
// const port = 3355;
// app.listen(port, hostName, () => {
//     console.log(`http://` + hostName + `:` + port);
// })
http.listen(3355,hostName, function () {
    console.log('listening on *:3355');
});
// 连接mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost', //数据库地址
    user: 'root', //账号
    password: '123456', //密码
    database: 'zyb', //库名
    multipleStatements: true //允许执行多条语句
});

//解析pots请求
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

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
        // res.send(200)
        res.status(200).send();
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
// 需要接收用户名和密码
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
// 需要接受用户名、旧密码、新密码
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
// 需要接收用户名、密码
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



// 上传图片
app.post('/user/fileImg', (req, res) => {
    var response = {
        fileName: req.body.fileName,
        fileDate: req.body.fileDate,
        fileType: req.body.fileType,
        fileImg: req.body.fileImg
    };
    // console.log(response);
    const sql = "SELECT * FROM file_img where fileImg='" + response.fileImg + "'";
    //查询
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        } else {
            // console.log(result)
            if (result != '') {
                res.json(false);
            } else {
                // 添加到数据库
                const addSql = "INSERT INTO file_img(fileId, fileName, fileDate, fileType, fileImg) VALUES('0','" + response.fileName + "','" + response.fileDate + "','" + response.fileType + "','" + response.fileImg + "')";
                connection.query(addSql, function (err, result) {
                    if (err) {
                        console.log('[INSERT ERROR] - ', err.message);
                        return;
                    } else {
                        console.log(result.insertId)
                        var imgData = response.fileImg;
                        //过滤data:URL
                        var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
                        var imageType = response.fileType.replace(/^image\//, "");
                        // base64格式解析
                        var dataBuffer = Buffer.from(base64Data, 'base64');
                        fs.writeFile("./../www.ybcc.live/images/" + response.fileName + "_" + result.insertId + "." + imageType, dataBuffer, function (err) {
                            if (err) {
                                console.log(err);
                                res.json(false);
                            } else {
                                const addSql = "UPDATE file_img SET imageName= '" + response.fileName + "_" + result.insertId + "." + imageType + "' WHERE fileId =" + result.insertId;
                                // console.log(addSql)
                                connection.query(addSql, function (err, result) {
                                    if (err) {
                                        console.log('[INSERT ERROR] - ', err.message);
                                        return;
                                    } else {
                                        res.json(true);
                                    }
                                })
                            }
                        });
                    }
                });
            }
        }
    });
});





// 上传的图片渲染
app.post('/images', (req, res) => {
    const sql = "select * from file_img";
    //查询
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        } else {
            res.json(result);
        }
    });
})













// 用户登录
// 需要接受用户名、密码
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
            res.json({ status: 2 });
            return;
        } else {
            if (result.length !== 0 && response.user_name === result[0].user_name && response.user_psw === result[0].user_psw) {
                let content = { name: req.body.name }; // 要生成token的主题信息
                let secretOrPrivateKey = "zyb";
                let token = jwt.sign(content, secretOrPrivateKey, {
                    expiresIn: 60 * 1 * 1  // 1小时过期
                });
                // res.json(result[0].user_name);

                // 更改user：token内容
                const addSql = "UPDATE user_msg SET token= '" + token + "' WHERE user_name ='" + response.user_name + "'";
                // console.log(addSql)
                connection.query(addSql, function (err, result) {
                    if (err) {
                        console.log('[INSERT ERROR] - ', err.message);
                        res.json({ status: 2 });
                        return;
                    } else {
                        res.json({ status: 1, mess: 'ok', token: token, user_name: req.body.user_name });
                    }
                })
                // res.json(true);
            } else {
                res.json({ status: 2 });
            }
        }
    });
});

// 验证token
app.post('/checkUser', (req, res) => {
    let token = req.body.token; // 获取token
    let user_name = req.body.user_name;
    let secretOrPrivateKey = "zyb"; // 这是加密的key（密钥）
    jwt.verify(token, secretOrPrivateKey, (err, decode) => {
        if (err) {  //  时间失效的时候 || 伪造的token
            res.json({ 'status': 10010 });
        } else {
            // console.log(decode);
            // const sql = "SELECT * FROM user_msg where token='" + token + "'";
            // //查询
            // connection.query(sql, (err, result) => {
            //     // console.log(result);
            //     if (err) {
            //         console.log('[SELECT ERROR] - ', err.message);
            //         res.json({ 'status': 10010 });
            //         return;
            //     } else {
            //         console.log(result)
            //         console.log(1)
            //         res.json({ 'status': 10000 });
            //     }
            // })
            res.json({ 'status': 10000 });
        }
    })
});







// 根据ID 获取相关数据

// 添加留言,查看留言
// 需要传入用户名、留言
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
// 需要传入留言独有的id
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




// socket.io

io.on('connection', function (socket) {
    socket.on('message', function (msg) {
        // console.log(socket.id);
        io.emit('message', msg);
    });
});













































// connection.connect();
// // 查询
// // var addSql = "SELECT * from user_msg WHERE BINARY user_name='zyb'";
// var addSql = 'select * from user_msg';
// // 删除
// // var addSql = 'DELETE FROM user_msg WHERE user_name="asdas"';
// // 添加
// // var addSql = "INSERT INTO `zyb`.`user_msg` (`user_name`, `user_psw`) VALUES ('qwe', '123456');";

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