const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Newbeginning888!',
  database : 'quest040'
});
module.exports  =  connection;