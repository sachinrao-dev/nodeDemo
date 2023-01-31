const Product = require("../models/product");

const getAllProduct = async (req, resp)=>{
    const QueryObject = {}
    const { company } =req.query;
    if(company){
        QueryObject.company= company;
    }

    const MyProduct =await Product.find(QueryObject);
    resp.status(200).json({MyProduct});
}
const getAllProductTesting = async (req, resp)=>{
    const MyProduct = await Product.find({});
    resp.status(200).json({MyProduct});
}

module.exports = {getAllProduct, getAllProductTesting};
