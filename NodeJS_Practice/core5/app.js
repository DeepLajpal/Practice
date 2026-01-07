import express from "express";
import pool from "./db2.js";

const app = express();
const port = 3000;
const successResObj = {
  success: true,
  message: "Request Success!",
};
const errorResObj = {
  success: false,
  message: "Request Failed! Please try again Later.",
};

app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * from tasks");

    res.json({ ...successResObj, data: result.rows });
  } catch (error) {
    res.status(500).json(errorResObj);
    console.log(error.message);
  }
});
app.post("/tasks", async (req, res) => {
  try {
    let isTitleExistInBody = false;
    for (const prop in req.body) {
      if (prop == "title") {
        isTitleExistInBody = true;
      }
    }
    if (!isTitleExistInBody) {
      res.status(400).json({
        ...errorResObj,
        message: "Task Not Received, Please provide a valid input!",
      });
    }
    const { title } = req.body;

    // using parameterized queries for protection against SQL injection type attacks
    const result = await pool.query(
      "INSERT INTO tasks (title, completed) VALUES ($1, $2) RETURNING *",
      [title, false]
    );
    res.status(201).json({
      ...successResObj,
      message: "Task Inserted Succsss!",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json(errorResObj);
    console.log("Error: ", error.message);
  }
});

app.put("/tasks/:id", async (req, res) => {
  const { title, completed } = req.body;
  const { id } = req.params;

  try {
    const result = await pool.query(
      "UPDATE tasks SET title = $2, completed = $3 WHERE id = $1 RETURNING *",
      [id, title, completed]
    );
    if (result.rows.length == 0) {
      return res.status(404).send({ ...errorResObj, message: "id not found" });
    }
    res.status(201).send({ ...successResObj, data: result.rows });
  } catch (error) {
    res.status(500).send(errorResObj);
    console.log("Error: ", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
