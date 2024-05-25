const mongoose = require("mongoose");

// Schema
const foodSchema = new mongoose.Schema(
  {
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);
