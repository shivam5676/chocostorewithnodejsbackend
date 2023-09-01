const express = require("express");

const router = express.Router();
const product=require("../model/product")
const productController=require("../controller/user")
router.post("/user/add-product",productController.addProduct );

router.get("/user/get-product",productController.getProduct);

router.get("/user/delete-product/:id",productController.deleteProduct);

router.post("/user/update-product/:id",productController.editProduct);


module.exports=router;
