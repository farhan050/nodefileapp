const express=require('express');
const homecontroller=require('../Controller/Customer/homeController');
const productcontroller=require('../Controller/Customer/productController');
const router=express.Router();

//Product routes
router.get('/',homecontroller.gethome)
router.get('/products',productcontroller.getproducts)

module.exports=router;