import express from "express";
import orders_router from "./orders.js";
import products_router from "./products.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use(products_router);
app.use(orders_router);

app.listen(port, () => {
  console.log("listening on", port);
});
