const { Post, Category } = require("../models");

exports.createPost = async (req, res) => {
  try {
    const {title, description, categoryId} = req.body
    const categoryModel = await Category.findOne(categoryId)
    const post = await Post.create({ title, description, categoryModel });
    return res.send(post);
  } catch (_) {
    return res.send({ msg: "Opps.. Something went wrong" });
  }
};