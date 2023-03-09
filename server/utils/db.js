const mysql = require("mysql");

const db_config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true,
  connectionLimit: 10,
};

const pool = mysql.createPool(db_config);
pool.on("acquire", function (connection) {
  console.log("Connection %d acquired", connection.threadId);
});

module.exports = {
  connection: pool,
};