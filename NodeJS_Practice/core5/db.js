import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "todo_db",
});
// step 1: connection to the postgres
// const connectDB = async () => {
//   try {
//     await client.connect();
//     console.log("Connected to the DB Success!");
//   } catch (error) {
//     console.log("Unable to establish a connection with DB: \n \n", error);
//   }
// };

// connectDB();

// step 2: execute query with client
const runQuery = async () => {
  try {
    await client.connect();
    console.log("Successfully Connected to the Postgres!");

    //insert into table tasks
    await client.query("INSERT INTO tasks (title, completed) VALUES ($1, $2)", [
      "Learning Postgres",
      false,
    ]);
    console.log("Insert done!");
    const result = await client.query("SELECT * from tasks");
    console.log("Data query run Success! \n", "Your Rows Data: ", result.rows);

    await client.end(); //closes the database connection
    console.log("Database connection closed!");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

runQuery();
