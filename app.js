var createError = require('http-errors');
var express = require('express');//加载express模块
var path = require('path');//路径模块
var cookieParser = require('cookie-parser');//这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
var logger = require('morgan');//在控制台中，显示req请求的信息

// 路由信息（接口地址），存放在routes的根目录
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置视图根目录
app.set('view engine', 'jade');//设置视图格式（本人不太喜欢用jade，接下来会交大家使用html格式的文件）
// 载入中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//配置路由，（'自定义路径'，上面设置的接口地址）
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);

// 错误处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/**
 *
 /bin:用来启动应用（服务器）
 /public: 存放静态资源目录
 /routes：路由用于确定应用程序如何响应对特定端点的客户机请求，包含一个 URI（或路径）和一个特定的 HTTP 请求方法（GET、POST 等）。每个路由可以具有一个或多个处理程序函数，这些函数在路由匹配时执行。
 /views: 模板文件所在目录 文件格式为.jade
 目录app.js程序main文件 这个是服务器启动的入口
 学习网址：[NodeJS+Express+mySQL服务端开发详解](https://www.cnblogs.com/jj-notes/p/6670310.html)
 */

