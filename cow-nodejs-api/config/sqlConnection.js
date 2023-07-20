var mysql = require("mysql");

const sqlConnection = async (credentials, query, callback) => {
  let connection = mysql.createConnection(credentials);
  connection.query(query, (error, results, fields) => {
    if (error) {
      callback(
        {
          code: error.code,
          errno: error.errno,
          sqlMessage: error.sqlMessage,
          sqlState: error.sqlState,
        },
        null
      );
    } else {
        callback(null, { results, fields });
    }
  });
  connection.end();
};

module.exports = sqlConnection;
