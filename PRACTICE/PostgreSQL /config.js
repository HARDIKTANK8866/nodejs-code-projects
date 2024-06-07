const { Client } = require("pg");

const connectSql = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1234567890",
  database: "college",
});

connectSql.connect((err) => {
  if (err) {
    console.warn("error in connection");
  }
});

module.exports = connectSql
