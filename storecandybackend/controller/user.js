const product=require("../model/product")


exports.addProduct=async (req, res, next) => {
    try {
      console.log(req.body);
      const name = req.body.choclate;
      const descr = req.body.description;
      const qty = req.body.quantity;
      const price = req.body.price;
      console.log("route activated");
      const data = await product.create({
        choclate: name,
        description: descr,
        quantity: qty,
        price,
        price,
      });
  
      res.status(201).json({ productdetail: data });
    } catch (err) {
      console.log(err);
    }
  }
  exports.getProduct= async (req, res, next) => {
    try {
      const response = await product.findAll();
      console.log(response);
      res.status(200).json({ allUser: response });
    } catch (err) {
      console.log(err);
    }
  }
  exports.deleteProduct= async (req, res, next) => {
    try {
      const prodid = req.params.id;
      console.log(prodid);
      const response = await product.findByPk(prodid);
      response.destroy();
    } catch (err) {
      console.log(err);
    }
  }
  exports.editProduct= async (req, res, next) => {
    try {
      const prodid = req.params.id;
      console.log(prodid);
      const updatedvalue = req.body;
      console.log(updatedvalue);
  
      const response = await product.findByPk(prodid);
      if (!response) {
        return res.status(404).json({ message: "product not found" });
      }
      response.quantity = updatedvalue.quantity;
      await response.save();
  
      res
        .status(200)
        .json({ message: "data updated successfully", updatedProduct: response });
    } catch (err) {
      console.log(err);
    }
  }