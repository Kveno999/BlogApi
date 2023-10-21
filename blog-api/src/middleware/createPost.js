const validatePost = (req, res, next) => {
    const errors = [];
    for (const prop in req.body) {
      if (!req.body[prop]) {
        return res.send({ message: "All fields are required" });
      }
    }
  
    if (errors.length) return res.status(422).send({ message: errors });
    return next();
  };
  
  module.exports = validatePost;
  