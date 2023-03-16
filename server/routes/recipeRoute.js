const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const { addRecipe } = require("../controllers/recipeController");

const router = express.Router();

router.post("/add-recipe", verifyToken, addRecipe);

module.exports = router;