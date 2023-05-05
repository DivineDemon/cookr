const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const { addReply } = require("../controllers/replyController");

const router = express.Router();

router.post("/", verifyToken, addReply);

module.exports = router;