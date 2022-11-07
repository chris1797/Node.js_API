const mysql = require("mysql");

const db = mysql.createConnection({
  host: "wedidlist-db.cdpxejd3chdm.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "skblue1797!",
  database: "wedidlist_db",
});

db.connect();

module.exports = db;
