const http = require("http");

// Default Status Code in Node = 200
const server = http.createServer((req, res) => {
  //    // ✔ Send JSON response
  //   res.setHeader("Content-type", "application/json");
  //   res.end(JSON.stringify({ id: "Hello World" }));
  // //   ✔ Send HTML
  //   res.setHeader("Content-type", "text/html");
  //   res.end(JSON.stringify("<h1>Hello World</h1>"));
  ////   ✔ Send 404
  res.statusCode = 404;
  res.end("Page Not Found by Deep!");
});

server.listen(3000, () => {
  console.log("Server running on port number 3000");
});
