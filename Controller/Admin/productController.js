const productmodel=require("../../Models/product")
exports.getProducts=(req,res,next)=>{
    productmodel.fetchallproducts((products)=>{
        res.render("Admin/product/products",{pageTitle:"Products",products:products})
    })
}

exports.getaddProduct=(req,res,next)=>{
    res.render("Admin/product/addproduct",{pageTitle:"Add Product"});
}

exports.postaddProduct=(req,res,next)=>{
    const {title,price,description,imageURL,bannerimageURL}=req.body;
    productmodel.createproduct(title,price,description,imageURL,bannerimageURL);
    res.redirect("/admin/products")
}