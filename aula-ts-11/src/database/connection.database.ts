import pg from "pg";

const { Pool } = pg;

const configDatabase = new Pool({
  connectionString: "postgres://postgres:123456@localhost:5432/exercise11",
});

const db = configDatabase;

export default db;
