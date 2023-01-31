const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongooseDB = (uri)=>{
    // console.log("db is connectf");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = mongooseDB;