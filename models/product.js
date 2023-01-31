const mongoose =require("mongoose");

const productSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: [true, "Price must be required"]
},
featured: {
    type: Boolean,
    default: false
},
rating:{
type: Number,
default: 4.8
},
createdAt: {
    type: Date,
    default: Date.now()
},
company:{
    type: String,
    enum:{
        values: ["Apple", "Lava", "Dell", "Hp"],
        message: `{values} is not supported` 
    }
}
});

module.exports = mongoose.model("Product", productSchema);