require('dotenv').config();
require("./database/connection");


const express = require("express");
const app = express();
const port = process.env.PORT;
const productRoute = require("./routes/Products");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/Users");
const cartRoute = require("./routes/Carts");
const orderRoute = require("./routes/Orders");
const mailRoute = require("./routes/Mails");
const stripeRoute = require("./routes/Stripe");
const  cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/checkout",stripeRoute)
app.use("/api/order",orderRoute);
app.use("/api/cart",cartRoute);
app.use("/api/product",productRoute);
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/mail",mailRoute);

app.listen(port,()=>{
    console.log("Backend is running...");
})