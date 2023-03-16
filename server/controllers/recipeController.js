const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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

module.exports = {
  addRecipe
}