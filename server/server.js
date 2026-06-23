    require("dotenv").config();

    const app = require("./app.js")
    const connectDb = require("./config/db.js")

    connectDb();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT,()=>{
        console.log(`server is running on the port ${PORT}`)
    })
