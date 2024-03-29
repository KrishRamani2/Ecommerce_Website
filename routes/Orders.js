const router = require("express").Router();
const Order = require("../models/Order");
const { VerifyToken, 
    VerifyTokenandAuthorization, 
    VerifyTokenAndAdmin 
} = require('./VerifyTokens');

router.post("/",async(req,res)=>{
    const NewOrder = new Order(req.body)
    try {
      const SavedOrder = await NewOrder.save();
      res.status(201).json(SavedOrder);
    }catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id",VerifyTokenAndAdmin,async(req,res)=>{
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        {new:true}

    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(401).json(error);
  }
});
router.delete("/:id",VerifyTokenAndAdmin,async(req,res)=>{
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (error) {
      res.status(401).json(error);
    }
  });
 router.get("/find/:userId",VerifyTokenandAuthorization,async(req,res)=>{
   try {
    const Order = await Order.find({userId:req.params.userId});
    res.status(201).json(Order);
 
   } catch (error) {
      res.status(500).json(error)
   }
});

router.get("/",async (req,res)=>{
    try {
        const orders = await Order.find()
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error)
    }
});

  router.get("/income",  async (req, res) => {
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));
    try {
        const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth  } ,...(productId &&{
          products:{$elemMatch:{ productId:productId}}
        })} },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
            $group: {
                _id: "$month",
                total: { $sum: "$sales" },
              },
        },
      ]);
      res.status(201).json(income);
    } catch (error) {
      res.status(401).json(error);
    }
  });
module.exports = router;
