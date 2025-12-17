const express = require("express");
const productsRouter = require("./routes/productRouter.js");
const logger = require("./middleware/logger.js");

const app = express();
const port = 3000;

app.use(express.json());

app.use(logger); // applied on all routes

app.use("/products", productsRouter); // for routes /products

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
