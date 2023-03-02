import express from "express";

const products_router = express.Router();

let products = [{ id: 1, name: "macbook" }];

products_router.get("/products", (req, res) => {
  console.log("get all product request orj irlee");
  res.status(200).send("products success");
});

products_router.post("/product", (req, res) => {
  console.log(req.body);
  res.status(200).send(products);
  products.push(req.body);
});

export default products_router;
