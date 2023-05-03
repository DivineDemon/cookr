const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const {
  addComment,
  deleteComment,
  getUserComments,
  getRecipeComments,
  getComment,
  updateComment,
  likeComment
} = require("../controllers/commentController");

const router = express.Router();

router.patch("/like", likeComment);
router.get("/user-comments", getUserComments);
router.get("/recipe-comments", getRecipeComments);
router.post("/add-comment/:recipe_id", verifyToken, addComment);
router.route("/")
  .delete(deleteComment)
  .get(getComment)
  .patch(updateComment);

module.exports = router;