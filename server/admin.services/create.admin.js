require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Admin = require("../models/admin.model.js");

mongoose.connect(process.env.MONGO_URI);

async function createAdmin() {
  try {
    const hashedPassword = await bcrypt.hash(
      "admin123",
      10
    );
    await Admin.create({
      email: "admin@lubrimax.com",
      password: hashedPassword,
    });

    console.log("Admin Created");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
}

createAdmin();