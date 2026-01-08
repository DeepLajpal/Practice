import express from "express";
import taskRouter from "./routes/task.routes.js";
const app = express();

app.use(express.json());
app.use("/", taskRouter);

// After all your routes
app.use((req, res, next) => {
  const err = new Error("Route not found");
  err.status = 404;
  next(err); // pass to the global error handler middleware which has 4 params
});

// Global error handler middleware
app.use((err, req, res, next) => {
  // this 4 params middleware is middleware is recognized for the global error middleware
  console.error(err.stack); // Log error details
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    data: null,
  });
});

export default app;
