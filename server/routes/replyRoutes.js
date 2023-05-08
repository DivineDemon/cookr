const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const { addReply, getReplies } = require("../controllers/replyController");

const router = express.Router();

router.route("/")
  .post(verifyToken, addReply)
  .get(getReplies);

module.exports = router;