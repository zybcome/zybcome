const express = require('express');
const server = require('./config').server;
const app = express();
const mysql = require('mysql');
app.listen(3333, () => {
    console.log('http://127.0.0.1:3333');
});
const zybcome = mysql.createConnection({
    host: 'localhost', //数据库地址
    user: 'zybcome', //账号
    password: '123456', //密码
    database: 'zybcome', //库名
    multipleStatements: true //允许执行多条语句
});
zybcome.connect();


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


//解析pots请求
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// // 创建 application/x-www-form-urlencoded 编码解析
// const urlencodedParser = bodyParser.urlencoded({ extended: true });


// // 解析ajax请求post 编码解析
// app.use(bodyParser.json());


// 注册
app.post("/register", (req, res) => {
    zybcome.query(server.registSql({
        u_name: req.body.u_name,
        u_psw: req.body.u_psw,
        u_phone: req.body.u_phone
    }), (err, result) => {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            res.send('2');
        } else {
            res.send('1');
        };
    });
});


// 登录
app.post("/login", (req, res) => {
    // console.log(req);
    zybcome.query(server.loginSql({
        u_name: req.body.u_name,
        u_psw: req.body.u_psw
    }), (err, result) => {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            res.send('2');
        } else {
            // console.log(result[0]);
            var u_msg = {
                u_id: result[0].u_id,
                u_name: result[0].u_name,
                u_time: result[0].u_time
            };
            res.send({ "data": u_msg, "token": server.addToken(req.body.u_name) })
        };
    });
});


// 删除所有用户
app.get("/d_user", (req, res) => {
    zybcome.query(server.truncateTab("user"), (err, result) => {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            res.send('2');
        } else {
            res.send('1');
        };
    });
});


// 删除所有留言
app.get("/d_leav", (req, res) => {
    zybcome.query(server.truncateTab("leav"), (err, result) => {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            res.send('2');
        } else {
            res.send('1');
        };
    });
});


// 查看个人留言
app.post("/read_leav", (req, res) => {
    if (req.headers.authorization) {
        const status_ = server.readToken(req.headers.authorization);
        if (status_ == "1") {
            zybcome.query(server.chaLeav({
                u_id: req.body.u_id
            }), (err, result) => {
                if (err) {
                    console.log('[DELETE ERROR] - ', err.message);
                    res.send('err');
                } else {
                    res.send(result);
                };
            });
        } else {
            res.send(status_);
        };
    } else {
        res.send("3");
    };
});


// 查看全部留言
app.post("/all_leav", (req, res) => {
    if (req.headers.authorization) {
        const status_ = server.readToken(req.headers.authorization);
        if (status_ == "1") {
            zybcome.query(server.allLeav(), (err, result) => {
                if (err) {
                    console.log('[DELETE ERROR] - ', err.message);
                    res.send('err');
                } else {
                    // console.log(result);
                    res.send(result);
                };
            });
        } else {
            res.send(status_);
        };
    } else {
        res.send("3");
    };
});


// 添加留言
app.post("/add_leav", (req, res) => {
    if (req.headers.authorization) {
        const status_ = server.readToken(req.headers.authorization);
        if (status_ == "1") {
            zybcome.query(server.addLeav({
                u_id: req.body.u_id,
                leav: req.body.leav
            }), (err, result) => {
                if (err) {
                    console.log('[DELETE ERROR] - ', err.message);
                    res.send('2');
                } else {
                    res.send('1');
                };
            });
        } else {
            res.send(status_);
        };
    } else {
        res.send("3");
    };
});


// 获取所有用户
app.post("/quer_user", (req, res) => {
    if (req.headers.authorization) {
        const status_ = server.readToken(req.headers.authorization);
        if (status_ == "1") {
            // token验证通过之后，根据u_id查看用户管理员权限
            zybcome.query(server.adminSql(req.body.u_id), (err, result) => {
                if (err) {
                    console.log('[DELETE ERROR] - ', err.message);
                } else {
                    const u_admin = result[0].u_admin;
                    if (u_admin == 1) {
                        // 不是管理员身份
                        res.send("4");
                    } else if (u_admin == 2 || u_admin == 3) {
                        zybcome.query(server.querySql("user"), (err, result) => {
                            if (err) {
                                console.log('[DELETE ERROR] - ', err.message);
                            } else {
                                res.send(result);
                            };
                        });
                    };
                };
            });
        } else {
            res.send(status_);
        };
    } else {
        res.send("3");
    };
});


// 设置管理员（需要超级管理员权限 3）
app.post("/set_admin", (req, res) => {
    if (req.headers.authorization) {
        const status_ = server.readToken(req.headers.authorization);
        if (status_ == "1") {
            // token验证通过之后，根据u_id查看用户管理员权限
            zybcome.query(server.adminSql(req.body.u_id), (err, result) => {
                if (err) {
                    console.log('[DELETE ERROR] - ', err.message);
                } else {
                    const u_admin = result[0].u_admin;
                    if (u_admin == 1) {
                        // 不是管理员身份
                        res.send("4");
                    } else if (u_admin == 2) {
                        // 不是超级管理员身份
                        res.send("5");
                    } else if (u_admin == 3) {
                        if (req.body.set_admin == 1 || req.body.set_admin == 2) {
                            zybcome.query(server.setAdmin(req.body.set_admin, req.body.set_id), (err, result) => {
                                if (err) {
                                    console.log('[DELETE ERROR] - ', err.message);
                                } else {
                                    res.send("1");
                                };
                            });
                        } else {
                            // 设置的管理员权限只能是1或2
                            res.send("6");
                        };
                    };
                };
            });
        } else {
            res.send(status_);
        };
    } else {
        res.send("3");
    };
});




// 根据u_id修改用户管理员权限
// zybcome.query(server.setAdmin("1","1"), (err, result) => {
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message);
//     } else {
//         console.log(result);
//         res.send("1");
//     }
// });

// 根据u_id查看用户管理员权限
// zybcome.query(server.adminSql("1"), (err, result) => {
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message);
//     } else {
//         console.log(result[0].u_admin);
//     }
// });

// 查询所有用户
// zybcome.query(server.querySql("user"), (err, result) => {
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message);
//     } else {
//         console.log(result);
//     }
// });

// 用户注册
// zybcome.query(server.registSql({
//     u_name: 'ybcc',
//     u_psw: '123456'
// }), (err, result) => {
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message);
//     } else {
//         console.log(result);
//     }
// });

// 用户登录
// zybcome.query(server.loginSql({
//     u_name: 'zyb',
//     u_psw: '123456'
// }), (err, result) => {
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message);
//     } else {
//         console.log(result);
//         console.log(server.token());
//     }
// });

//完善用户信息
// zybcome.query(server.addSql({
//     name: '赵翊搏',
//     u_phone: "15555536670",
//     u_address: '河南省安阳市'
// }), (err, result) => {
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message);
//     } else {
//         console.log(result);
//     }
// });

//添加留言
// zybcome.query(server.addLeav({
//     u_id: 1,
//     leav: "你真棒"
// }), (err, result) => {
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message);
//     } else {
//         console.log(result);
//     }
// });

//留言查询
// zybcome.query(server.chaLeav({
//     u_id: 1
// }), (err, result) => {
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message);
//     } else {
//         console.log(result);
//     }
// });

//清空表，并且重置自增
// zybcome.query(server.truncateTab("leav"), (err, result) => {
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message)
//     } else {
//         console.log(result);
//     }
// });