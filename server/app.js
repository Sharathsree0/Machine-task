const productRoutes = require("./routes/products.routes.js");
const adminRoutes = require("./routes/admin.routes.js");
const uploadRoutes =  require("./routes/upload.routes.js");

const express = require("express")
const cors = require("cors")
const morgan =require("morgan")

const app = express();

app.use(cors());
app.use(express.json())
app.use(morgan("dev"))

app.get("/",(req,res)=>{
    res.send("api is running...")
})
app.use("/api/upload", uploadRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);

app.use((err, req, res, next) => {
  console.log("GLOBAL ERROR:");
  console.log(err);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});


module.exports = app;