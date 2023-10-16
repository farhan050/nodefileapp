
exports.get404page=(req,res,next)=>{
    res.render("Error/404",{pageTitle:"Page Not Found"})
}