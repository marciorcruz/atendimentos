var mysql = require('mysql');

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "telemarketing", 
  insecureAuth : true
});

module.exports = conexao;