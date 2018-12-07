var mysql  = require('mysql');

var connection = mysql.createConnection({
	host: '127.0.0.1', 
    user: 'root',
    password: '123456',
    database:'yfzs', // user表位于这个数据库中
    port: 3306
});

connection.connect();

module.exports = {
    connection,
    sqls:{
    	insert:'INSERT INTO user(username, password) VALUES(?,?)',
	    update:'update user set username=?, password=? where id=?',
	    delete: 'delete from user where id=?',
	    searchUsers: 'select * from user',
	    searchArticles: 'select * from article',
	    searchUser:'select * from user where username=?',
	    loginSql:'select * from user where username=? and password=?'
    }
};