const mongoose = require("mongoose");

// Schema
const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Food Title is require"],
    },
    description: {
      type: String,
      required: [true, "Food description is require"],
    },
    price: {
      type: String,
      required: [true, "Food price is require"],
    },
    imageUrl: {
      type: String,
      default:
        "https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
    },
    foodTags: {
      type: String,
    },
    category: {
      type: String,
    },
    code: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    resturant: {
      type: mongoose.Schema.Types.ObjectId,
    },
    rating: {
      type: Number,
      default: 5,
      min:1,
      max:5
    },
    ratingCount: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Foods", foodSchema);
