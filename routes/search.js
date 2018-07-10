var express = require('express');
var router = express.Router();

var db = require("../config/db");//连接池的方式连接mysql
var dbnormal = require("../config/dbnormal");//普通方式连接mysql
const Unity = require('../unity/Unity');
const r = Unity.send;

/**
 * search
 */
router.get('/', function (req, res, next) {
    db.query("select * from awards", function (error, rows) {
        if (error) {
            res.send(r('', 200, 1, 'error'));
        } else {
            res.send(r(rows));
        }
    })
});

//测试普通连接mysql数据库
// router.get('/', function(req, res, next) {
//     dbnormal.query("select * from awards",function (error, rows) {
//         if (error) {
//             res.send(r('', 200, 1, 'error'));
//         } else {
//             res.send(r(rows));
//         }
//     })
// });
module.exports = router;//不加这句会报错： Router.use() requires a middleware function but got a Object （没有向外暴露，导致app.use引用不到）