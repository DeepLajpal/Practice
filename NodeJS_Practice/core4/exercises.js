const express = require("express");
const fs = require("fs");

const app = express();

// ✔ Task 2 — Create Logging Middleware
// Example:

// [GET] /products  at  3:12 PM

app.use((req, res, next) => {
  const logTime = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const logData = `[${req?.method}] ${req?.path} at ${logTime}\n`;
  fs.appendFileSync("./log.txt", logData);
  // res.send("I am middleware for handling * requests res.");
  next();
});

// ✔ Task 1 — Create All 4 Routes
// GET /hello
// POST /hello
// PUT /hello
// DELETE /hello
// Each should return a different message.

app.get("/hello", (req, res) => {
  res.send("I am hello get");
});
app.put("/hello", (req, res) => {
  res.send("I am hello put");
});
app.post("/hello", (req, res) => {
  res.send("I am hello post");
});
app.delete("/hello", (req, res) => {
  res.send("I am hello delete");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// ✔ Task 3 — Create Route Params Practice
// GET /user/10
// GET /order/55

app.get("/user/:id", (req, res) => {
  const log = `User with id: ${req?.params?.id} called!`;
  console.log(log);
  res.send(log);
});
app.get("/order/:id", (req, res) => {
  const log = `Order with id: ${req?.params?.id} called!`;
  console.log(log);
  res.send(log);
});

// ✔ Task 4 — Query Params Practice

// GET /search?name=aman&city=delhi

app.get("/search", (req, res) => {
  const log = `Query Param:\n 1) Name: ${req?.query?.name}\n 2) City: ${req?.query?.city}`;
  console.log(log);
  res.send(log);
});
