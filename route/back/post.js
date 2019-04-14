const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "abcd@1234",
  port: 5432
});

if (pool) {
  console.log("connected");
}
