const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: "jamiu://jamiu:jamiu@localhost:5432/perntodo",
});

module.exports = pool;
