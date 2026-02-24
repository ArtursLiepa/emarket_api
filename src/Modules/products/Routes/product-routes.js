const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
} = require("../Controller/productController");

router.get("/", getProducts);
router.post("/", createProduct);

module.exports = router;
