const mongoose = require("mongoose");

// 1- Create Schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Category Name is required"],
      unique: [true, "Name must be unique"],
      minlength: [3, "Too short name"],
      maxlength: [40, "Too long name"],
    },
    // A and B => xxx.com/a-and-b
    slug: {
      type: String,
      lowercase: true,
    },
    image: String,
  },
  { timestamps: true }
);

// 2- Create Model
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
