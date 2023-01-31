const getAllProduct = async (req, resp)=>{
    resp.status(200).json({setMAsg: " Hello i am product.js"});
}
const getAllProductTesting = async (req, resp)=>{
    resp.status(200).json({setMAsg: " Hello i am testing"});
}

module.exports = {getAllProduct, getAllProductTesting};
