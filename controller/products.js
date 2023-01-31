const Product = require("../models/product");

const getAllProduct = async (req, resp)=>{
    const MyProduct =await Product.find({});
    resp.status(200).json({MyProduct});
}
const getAllProductTesting = async (req, resp)=>{
    resp.status(200).json({setMAsg: " Hello i am testing"});
}

module.exports = {getAllProduct, getAllProductTesting};
