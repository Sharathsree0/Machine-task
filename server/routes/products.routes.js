const express = require("express");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  getCategories,
  deleteProduct,
} = require("../controller/product.controller.js");
const protect = require("../middleware/auth.middleware");

const router = express.Router();

router.route("/")
  .get(getProducts)
  .post(createProduct);

router.get("/categories", getCategories);

router.route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);



  router.route("/:id")
  .get(getProductById)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

  router.route("/")
  .get(getProducts)
  .post(protect, createProduct);

  module.exports = router;