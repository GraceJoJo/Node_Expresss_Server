var mysql = require('mysql'); //调用MySQL模块
//创建一个connection
var connection = mysql.createConnection({
    host: '101.201.153.110', //主机
    port: 3306, //端口号
    user: 'mingbai',  //MySQL认证用户名
    password: '4VdBfZXL', //MySQL认证用户密码
    database: 'mingbaiadmin-test'
});
//创建一个connection
connection.connect(function (err) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect] succeed!');
});

//--查询--

function query(sql, callback) {
    connection.query(sql, function (err, rows) {
        if (err) {
            console.log('query err:', err.message);
            callback(err, "error")
            return;
        }
        callback(err, rows);
        console.log('query success');
        // //关闭connection
        connection.end(function (err) {
            if (err) {
                console.log(err.toString());
                return;
            }
            console.log('[connection end] succeed!');
        });
    });
}


exports.query = query;
//nodejs进阶(6)—连接MySQL数据库示例:https://www.jb51.net/article/102313.htm