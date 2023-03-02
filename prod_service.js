import { pool } from "./mysql-config.js";

export async function getProducts(limit) {
  const [rows] = await pool.query(
    `SELECT product_id FROM products limit ${limit}`,
  );
  return rows;
}
