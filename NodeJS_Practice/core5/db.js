import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "todo_db",
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to the DB Success!");
  } catch (error) {
    console.log("Unable to establish a connection with DB: \n \n", error);
  }
};

connectDB();
