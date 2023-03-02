import express from "express";

const orders_router = express.Router();

orders_router.get("/orders", (req, res) => {
  console.log("get all orders request orj irlee");
  res.status(200).send("orders");
});

export default orders_router;
