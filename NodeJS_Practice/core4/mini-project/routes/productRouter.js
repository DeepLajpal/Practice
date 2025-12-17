const express = require("express");
const router = express.Router();

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
router.get("/", (req, res) => {
  res.send({
    success: true,
    message: "All Products Data fetched Successfully",
    data: products,
  });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body || body.length == 0) {
    res.status(400).send({
      success: false,
      message: "No Data Received",
    });
  }

  const newProducts = Array.isArray(body) ? body : [body];

  newProducts?.forEach((product) => {
    const productId = Date.now();
    products.push({ id: productId, ...product });
  });
  res.status(201).send({
    success: true,
    message: "Data received & updated, Thanks :)",
    products: products,
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params?.id;
  const productsExists = products.findIndex((product) => product?.id == id);
  if (productsExists == -1) {
    return res.status(404).send({
      success: false,
      message: `Product with id ${id} not found`,
    });
  }

  products = products.filter((product) => product.id != id);

  res.status(200).send({
    success: true,
    message: `Product with the id: ${id} deleted!`,
    products: products,
  });
});

module.exports = router;
