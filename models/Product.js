const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
  {
    company:{
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    img1: {
      type: String,
    },
    img2: {
      type: String,
    },
    img3: {
      type: String,
    },
    img4: {
      type: String,
    },
    img5: {
      type: String,
    },
    categories: {
      type: Array,
      default: [],
    },
    size: {
      type: Array,
      required: true,
    },
    star: {
      type: Number, 
      default:4,
    },
    color: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    prevPrice: {
      type: Number,
      required: true,
    },
    instock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
