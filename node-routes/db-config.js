// DB connectivity
var mysql = require("mysql");

var connection = mysql.createConnection({
  connectionLimit : 100,
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "demo",
  debug    : false,
  timezone : 'cet'
  
});

connection.connect((err) => {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

module.exports = connection;

// docker build -t img .
// docker run -itd -p 7000:3000 --name node img