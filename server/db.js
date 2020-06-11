const Pool = require("pg").Pool;

const pool = new Pool({
  user: "jamiu",
  host: localhost,
  password: "jamiu",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
