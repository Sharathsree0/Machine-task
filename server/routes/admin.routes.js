const express = require("express");

const {
  loginAdmin,
} = require("../controller/admin.controller.js");

const router = express.Router();

router.post("/login", loginAdmin);

module.exports = router;