const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

let products = [
  {
    id: 1,
    name: "Apple 1Kg",
    price: "200",
  },
  {
    id: 2,
    name: "Orange 2Kg",
    price: "300",
  },
  {
    id: 3,
    name: "Banana 12pc",
    price: "400",
  },
];
app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/products", (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body) res.send("No Data Received");

  body.forEach((product) => {
    const productId = Date.now();
    products.push({ id: productId, ...product });
  });
  res.send({
    message: "Data received & updated, Thanks :)",
    products: products,
  });
});

app.delete("/products/:id", (req, res) => {
  const id = req.params?.id;
  if (!id) {
    res.type("plain");
    res.send("Ohh! Products id Not Received, please provide the product id.");
  }

  products = products.filter((product) => {
    if (product.id != id) return product;
  });

  res.send({
    message: `Product with the id: ${id} deleted!`,
    products: products,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
