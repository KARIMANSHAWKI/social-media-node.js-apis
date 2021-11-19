const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
  likeOrDislike,
  getPost,
  timeLine,
} = require("../controllers/posts");

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id", getPost);
router.put("/:id/like", likeOrDislike);
router.get("/timeline/all", timeLine);

module.exports = router;
