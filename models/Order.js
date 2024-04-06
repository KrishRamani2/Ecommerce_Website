const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    addressflatno: { type: String, required: true },
    addressstreet: { type: String, required: true },
    addresscity: { type: String, required: true },
    addressstate: { type: String, required: true },
    addresspin: { type: Number, required: true },
    addresscontact: { type: Number, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
