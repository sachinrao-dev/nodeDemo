const express = require("express");
const app = express();
const productRoutes = require("./routes/products");
const connectDB = require("./db/connect");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.get("/", (req, resp)=>{
    resp.send("Hii I am on live server");
});

// middleware or to set route

app.use("/api/products", productRoutes);

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URl);

        app.listen(port, ()=>{
            console.log(`${port} is live`);
        });
        
    } catch (error) {
        console.log(error);
        
    }
}

start();