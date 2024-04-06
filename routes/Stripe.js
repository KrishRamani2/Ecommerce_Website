const router = require("express").Router();

const Stripe = require("stripe")(process.env.STRIPE_KEY)

router.post("/payment",(req,res)=>{
    Stripe.charges.create({
        tokenId:req.body.tokenId,
        amount:req.body.amount,
        currency:"INR",
    },(StripeErr, StripeRes)=>{
        if(StripeErr){
            res.status(401).json(StripeErr);
        }else{
            res.status(201).json(StripeRes);
        }
    })
})








module.exports = router;