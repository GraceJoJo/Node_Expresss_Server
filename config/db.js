var mysql = require("mysql");
var pool = mysql.createPool({
  host: '101.201.153.110',
  port: 3306,
  user: 'mingbai',
  password: '4VdBfZXL',
  database: 'mingbaiadmin-test'
});

function query(sql,callback){
  pool.getConnection(function(err,connection){
    connection.query(sql, function (err,rows) {
      callback(err,rows);
      connection.release();
    });
  });
}

exports.query = query;


