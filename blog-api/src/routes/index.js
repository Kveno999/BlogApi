const router = require("express").Router();
const categoryRouter = require("./CategoryRouter");
const userRouter = require("./UserRouter");
const blogRouter = require("./PostRouter");

router.use("/category", categoryRouter);
router.use("/user", userRouter);
router.use("/blog", blogRouter);
module.exports = router;
