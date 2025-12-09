const express = require("express");

const app = express();
// 4. Middleware
app.use((req, res, next) => {
  console.log("1st Middleware");
  res.statusCode = 403;
  res.send("Middleware Handled Everything");
});

// 1. Routing

app.get("/", (req, res) => {
  res.statusCode = 404;
  res.send("Page not found @deep");
});
app.get("/home", (req, res) => {
  res.send("Thank you for visiting /home route");
});
app.post("/login", (req, res) => {
  res.send("Thank you for visiting /login route");
});
app.put("/user/1", (req, res) => {
  res.send("Thank you for visiting /user put route");
});
app.delete("/user/1", (req, res) => {
  res.send("Thank you for visiting /user delete route");
});

// 3. Params
app.get("/products/search", (req, res) => {
  try {
    res.send(
      `Hey your query params are: \n Keyword: ${req.query.keyword}\n Page: ${req.query.page} `
    );
  } catch (err) {
    res.send(`Unable to resolve ${req.path}`);
  }
});

//2. Route Parameters

app.get("/products/:id", (req, res) => {
  console.log("iam route /products/:id");
  res.send(
    `Thank you for visiting route ${req.path} and params ${req.params.id}`
  );
});

app.listen(3000, () => console.log("Server running on port 3000"));
