const router = require("express").Router();
const Product = require("../models/Product");
const { VerifyToken, 
    VerifyTokenandAuthorization, 
    VerifyTokenAndAdmin 
} = require('./VerifyTokens');

router.post("/new",async(req,res)=>{
    const NewProduct = new Product(req.body)
    try {
      const SavedProduct = await NewProduct.save();
      res.status(201).json(SavedProduct);
    }catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id",async(req,res)=>{
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        {new:true}

    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(401).json(error);
  }
});
router.delete("/:id",async(req,res)=>{
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (error) {
      res.status(401).json(error);
    }
  });
  router.get("/find/:id",async(req,res)=>{
    try {
     const product = await Product.findById(req.params.id);
     res.status(201).json(product);
 
    } catch (error) {
       res.status(500).send("ERROR")
    }
 });
 router.get("/",  async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;
        let admin;
        if(qNew){
            products = await Product.find().sort({createdAt:-1}).limit(1);
        }else if(qCategory){
            products = await Product.find({
                categories:{
                    $in:[qCategory],
                },
            });
        }
        else{
            products = await Product.find();
        }
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;