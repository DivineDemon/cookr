const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const {
  followUser,
  unfollowUser,
  followersList,
  followingList,
} = require("../controllers/userController");

const router = express.Router();

router.post("/follow", verifyToken, followUser);
router.delete("/unfollow", verifyToken, unfollowUser);
router.get("/followers", verifyToken, followersList);
router.get("/following", verifyToken, followingList);

module.exports = router;