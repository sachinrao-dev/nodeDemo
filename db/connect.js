const mongoose = require("mongoose");
// const uri = "mongodb+srv://Sachinrao:Sachin@demoapi.sl8bu7h.mongodb.net/demoApi?retryWrites=true&w=majority";
// const uri = "mongodb+srv://Sachinrao:Sachin@28@demoapi.sl8bu7h.mongodb.net/demoApi?retryWrites=true&w=majority"
mongoose.set("strictQuery", false);

const mongooseDB = ()=>{
    return mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = mongooseDB;