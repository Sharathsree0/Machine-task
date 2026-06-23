const express = require("express");

const upload = require("../middleware/uploader.middleware.js");

const { uploadImage,} = require("../controller/uploader.controller.js");

const protect = require("../middleware/auth.middleware.js");

const router = express.Router();

router.post(  "/",  protect,  upload.single("image"),  uploadImage);

module.exports = router;