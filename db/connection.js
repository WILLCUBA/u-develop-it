const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  password: '93101231947*MySql',
  database: 'election'
});

module.exports = db;
