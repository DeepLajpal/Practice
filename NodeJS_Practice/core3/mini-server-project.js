const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == ("/" || "")) {
    res.setHeader("Content-Type", "text/html");
    res.end("<div>Home Page</div>");
  } else if (req.url == "/about") {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hi Iam about page");
  } else if (req.url == "/products") {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify([
        {
          id: 1,
          name: "Apple",
        },
        {
          id: 2,
          name: "Grapes",
        },
      ])
    );
  } else {
    res.statusCode = 404;
    res.end("Page Not Found By Deep!");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
