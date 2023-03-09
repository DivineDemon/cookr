const express = require("express");
const { signUp } = require("../controllers/authController");

const router = express.Router();

router.post("/", signUp);

module.exports = router;