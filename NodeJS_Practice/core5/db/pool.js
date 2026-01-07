// step 4: Connect PostgreSQL to Express (Real API)
import { Pool } from "pg";
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "todo_db",
});

export default pool;
