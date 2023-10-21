const router = require("express").Router();
const PostController = require("../controllers/PostController");
const createPostMiddleware = require("../middleware/createPost");

router
  .route("/")
  .post([createPostMiddleware], PostController.createPost);

module.exports = router;
