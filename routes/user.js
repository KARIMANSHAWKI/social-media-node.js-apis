const router = require("express").Router();
const { updateUser, deleteUser, getUser } = require("../controllers/users");

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);

module.exports = router;
