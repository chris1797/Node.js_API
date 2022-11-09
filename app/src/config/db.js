const mysql = require("mysql");

const db = mysql.createConnection({
  host: "",
  user: "admin",
  password: "",
  database: "wedidlist_db",
});

db.connect();

module.exports = db;
