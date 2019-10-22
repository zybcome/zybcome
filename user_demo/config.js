const jwt = require('jsonwebtoken');
let secretOrPrivateKey = "zybcome";
var server = {
    // 封装查询用户信息表功能函数（不包含密码）
    querySql: (database) => {
        var sql = "select u_id,u_name,u_img,name,u_phone,u_address,u_time from " + database;
        return sql;
    },
    //修改管理员权限
    setAdmin: (u_admin,u_id)=>{
        var sql = "UPDATE user SET u_admin='"+u_admin+"' where u_id='"+u_id+"'";
        return sql;
    },
    // 封装查询管理员权限
    adminSql: (u_id) => {
        var sql = "select u_admin from user where u_id='" + u_id + "'";
        return sql;
    },
    // 封装添加用户信息功能函数
    registSql: (user) => {
        var sql = "INSERT INTO user(u_name, u_psw, u_phone, u_time) VALUES('" + user.u_name + "','" + user.u_psw + "','" + user.u_phone + "',now())";
        return sql;
    },
    // 封装用户登录功能函数
    loginSql: (login) => {
        var sql = "SELECT * FROM user where u_name='" + login.u_name + "'";
        return sql;
    },
    // 封装添加完善信息功能函数
    addSql: (add) => {
        var sql = "UPDATE user SET name='" + add.name + "', u_phone='" + add.u_phone + "', u_address='" + add.u_address + "' WHERE u_name='zybcome'";
        return sql;
    },
    // 添加留言函数封装
    addLeav: (leav) => {
        var sql = "INSERT INTO leav(u_id, leav, leav_time) VALUES('" + leav.u_id + "','" + leav.leav + "',now())";
        return sql;
    },
    // 根据u_id查询指定id的留言信息函数封装
    chaLeav: (cha) => {
        var sql = "SELECT user.u_id,leav FROM user,leav where user.u_id=leav.u_id and user.u_id='" + cha.u_id + "'";
        return sql;
    },
    // 查询所有留言信息函数封装
    allLeav: () => {
        var sql = "SELECT user.u_id,u_name,leav,name FROM user,leav where user.u_id=leav.u_id";
        return sql;
    },
    // 清空表并且重置自增
    truncateTab: (tab) => {
        var sql = "truncate " + tab;
        return sql;
    },
    // 生成token
    addToken: (u_name) => {
        let content = { name: u_name }; // 要生成token的主题信息
        let token = jwt.sign(content, secretOrPrivateKey, {
            expiresIn: 60 * 60 * 1  // 1小时过期
        });
        return token;
    },
    // 解析token
    readToken: (token) => {
        var status;
        jwt.verify(token, secretOrPrivateKey, (err, decode) => {
            if (err) {  //  时间失效的时候 || 伪造的token
                status = "2";
            } else {
                status = "1";
            }
        });
        return status
    }
};
module.exports = {
    server
};