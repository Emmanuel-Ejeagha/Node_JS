const express = require("express");
const app = express();
const port = 3000;

//  root route
app.get("/", (req, res) => {
  res.send("Welcome to our home page");
});

// to get all product
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "product 1",
    },
    {
      id: 2,
      label: "product 2",
    },
    {
      id: 3,
      label: "product 3",
    },
    {
      id: 4,
      label: "product 4",
    },
  ];
  res.json(products);
});

//  get a sigle product
app.get("/products/:id", (req, res) => {
  console.log("req.params", req.params);
  const productId = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: "product 1",
    },
    {
      id: 2,
      label: "product 2",
    },
    {
      id: 3,
      label: "product 3",
    },
    {
      id: 4,
      label: "product 4",
    },
  ];
  const getSingleProduct = products.find((product) => product.id === productId);
  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("Product not found! Try with a different id");
  }
});

app.listen(port, () => {
  console.log(`Server is now running at port http://localhost:${port}`);
});
