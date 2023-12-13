const path = require("path");
const products = require("../models/product.model");
exports.getProduct = (req, res)=>{
    res.sendfile(path.join(__dirname+ "/../views/product.html"));

}

exports.postProduct =  (req, res)=>{
    const callFormat = req.body;
    const productName = callFormat.productName;
    const qty = Number(callFormat.qty);
    const product = {
        productName,
        qty,
    };
    products.push(product);
    res.status(201).json({
        success:true,
        products,
    });
};