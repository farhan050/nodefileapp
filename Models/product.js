const { v4: uuidv4 } = require('uuid');
const path=require('path');
const rootpath=path.dirname(require.main.filename)
const filesystem=require('../utils/filesystem')
exports.createproduct=(title,price,description,imageURL,bannerimgaeURL)=>{
    try {
        let id=uuidv4();
        const product={
                id:id,
                title:title,
                price:+price,
                description:description,
                imageURL:imageURL,
                bannerimgaeURL:bannerimgaeURL
        }
    filesystem.writefile(path.join(rootpath,"Data","product.json"),product)
    } catch (error) {
        console.log(error)
    }
    
}

exports.fetchallproducts=(callback)=>{
    filesystem.readfile(path.join(rootpath,"Data","product.json"),(products)=>{    
        return callback(products)
    })
}