class Database{
    init(conn){
        const clientesstart = "CREATE TABLE IF NOT EXISTS Clientes ("+
                  "ID int NOT NULL AUTO_INCREMENT,"+
                  "Nome varchar(150) NOT NULL,"+
                  "CPF char(11) NOT NULL,"+
                  "PRIMARY KEY (ID)"+
                  ");";
      
      conn.query(clientesstart, function (error, results, fields){
          if(error) return console.log(error);
          console.log('Clientes OK');
      });
    }
}
module.exports.Database = Database