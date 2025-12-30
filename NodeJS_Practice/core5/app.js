import express from "express";
import pool from "./db2.js";

const app = express();
const port = 3000;
const resObj = {
  success: true,
  message: "Request Success!",
};

app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * from tasks");

    res.json({ ...resObj, data: result.rows });
  } catch (error) {
    const resObj = {
      success: false,
      message: "Failed to get the data, please try again later!",
    };
    res.status(500).json(resObj);
    console.log(error.message);
  }
});
app.post("/tasks", async (req, res) => {
  try {
    const { title } = req.body;
    await pool.query("INSERT INTO tasks (title, completed) VALUES ($1, $2)", [
      title,
      false,
    ]);
    res.json({ ...resObj, message: "Task Inserted Succsss!" });
  } catch (error) {
    res
      .status(500)
      .json({ ...resObj, success: false, message: "failed to post data" });
    console.log("Error: ", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
