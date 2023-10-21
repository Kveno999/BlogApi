const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, minlength: 1, required: true },
    description: { type: String,  minlength: 1, required: true },
    category: {type: Category, required: false},
    timestamp: {type: Number, require: false, default: Date.now()}
  },
  { versionKey: false }
);

const Category = mongoose.model("Post", PostSchema);
module.exports = { Post, PostSchema };