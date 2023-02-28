var mysql = require('mysql2');

var pool = mysql.createPool({
    host:'us-cdbr-east-02.cleardb.com',
    user:process.env.MYSQL_USR,
    password:process.env.MYSQL_PWD,
    database:process.env.MYSQL_DB,
    waitForConnections: true,
    multipleStatements: true,
    connectionLimit: 10,
    queueLimit: 0,
    timezone: 'utc'
});
                                  
var getConnection = function(cb){
    pool.getConnection(function(err, connection){
        if(err){
            return cb(err);
        }
        cb(null, connection);
    });
};
    
module.exports = getConnection;