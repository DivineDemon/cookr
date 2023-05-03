const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllRecipes = async (_, res) => {
  try {
    const response = await prisma.recipe.findMany();
    res.status(200).json({
      status: true,
      message: "Retrieved All Recipes!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error,
    });
  }
};

const getUserRecipes = async (req, res) => {
  try {
    const user_id = Number(req.query.user_id);
    const response = await prisma.recipe.findMany({
      where: {
        user: {
          id: user_id,
        },
      },
    });

    res.status(200).json({
      status: true,
      message: "Retrieved User Recipes!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error,
    });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe_id = Number(req.query.recipe_id);
    const response = await prisma.recipe.findUnique({
      where: {
        id: recipe_id,
      },
    });

    res.status(200).json({
      status: true,
      message: "Retrieved Recipe!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error,
    });
  }
};

const addRecipe = async (req, res) => {
  try {
    const { name, description, ingredients, user_id, likes, downloads, deleted_at } = req.body;
    const response = await prisma.recipe.create({
      data: {
        name,
        description,
        ingredients,
        likes,
        downloads,
        deleted_at,
        user: {
          connect: { id: user_id },
        },
      }
    });

    res.status(200).json({
      status: true,
      message: "Recipe Added Successfully!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error,
    });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe_id = Number(req.query.recipe_id);
    const response = await prisma.recipe.delete({
      where: {
        id: recipe_id,
      },
    });

    res.status(200).json({
      status: true,
      message: "Recipe Deleted Successfully!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error,
    });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe_id = Number(req.query.recipe_id);
    const response = await prisma.recipe.update({
      where: {
        id: recipe_id,
      },
      data: req.body,
    });

    res.status(200).json({
      status: true,
      message: "Recipe Updated Successfully!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error,
    });
  }
};

module.exports = {
  addRecipe,
  getRecipe,
  deleteRecipe,
  updateRecipe,
  getAllRecipes,
  getUserRecipes,
}