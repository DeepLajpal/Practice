import express from "express";
import taskRouter from "./routes/task.routes.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", taskRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
