const express=require('express');
const productcontroller=require('../Controller/Admin/productController');
const adminpannelController=require('../Controller/Admin/adminpanelController')
const router=express.Router();

//Product Routes
router.get("/products",productcontroller.getProducts);
router.get("/addproduct",productcontroller.getaddProduct);
router.post("/addproduct",productcontroller.postaddProduct)

//Admin Panel Routes
router.get('/admin-panel',adminpannelController.getadminpannel)

module.exports=router;