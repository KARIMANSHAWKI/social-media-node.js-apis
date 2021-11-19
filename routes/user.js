const router = require("express").Router();
const { updateUser, deleteUser, getUser , unFollowUser, followUser} = require("../controllers/users");

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unFollowUser);

module.exports = router;
