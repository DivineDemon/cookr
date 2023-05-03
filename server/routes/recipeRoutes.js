const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const {
  addRecipe,
  getAllRecipes,
  getUserRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
  likeRecipe,
  downloadRecipe
} = require("../controllers/recipeController");

const router = express.Router();

router.get("/", getAllRecipes);
router.patch("/like", likeRecipe);
router.get("/user", getUserRecipes);
router.patch("/download", downloadRecipe);
router.post("/add-recipe", verifyToken, addRecipe);
router.route("/recipe")
  .get(getRecipe)
  .delete(deleteRecipe)
  .patch(updateRecipe);

module.exports = router;