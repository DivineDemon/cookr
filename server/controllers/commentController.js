const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserComments = async (req, res) => {
  try {
    const user_id = Number(req.query.user_id);
    const response = await prisma.comment.findMany({
      where: {
        user: {
          id: user_id,
        },
      },
    });

    res.status(200).json({
      status: true,
      message: "Retrieved User Comments!",
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

const getRecipeComments = async (req, res) => {
  try {
    const recipe_id = Number(req.query.recipe_id);
    const response = await prisma.comment.findMany({
      where: {
        recipe: {
          id: recipe_id,
        },
      },
    });

    res.status(200).json({
      status: true,
      message: "Retrieved Recipe Comments!",
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

const getComment = async (req, res) => {
  try {
    const comment_id = Number(req.query.comment_id);
    const response = await prisma.comment.findUnique({
      where: {
        id: comment_id,
      },
    });

    res.status(200).json({
      status: true,
      message: "Retrieved Comment!",
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

const addComment = async (req, res) => {
  try {
    const { name, description, ingredients, likes, downloads } = req.body;
    const response = await prisma.comment.create({
      data: {
        name,
        description,
        ingredients,
        likes,
        downloads,
        user: {
          connect: { id: req.user.id },
        },
      }
    });

    res.status(200).json({
      status: true,
      message: "Comment Added Successfully!",
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

const deleteComment = async (req, res) => {
  try {
    const comment_id = Number(req.query.comment_id);
    const response = await prisma.comment.delete({
      where: {
        id: comment_id,
      },
    });

    res.status(200).json({
      status: true,
      message: "Comment Deleted Successfully!",
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

const updateComment = async (req, res) => {
  try {
    const comment_id = Number(req.query.comment_id);
    const response = await prisma.comment.update({
      where: {
        id: comment_id,
      },
      data: req.body,
    });

    res.status(200).json({
      status: true,
      message: "Comment Updated Successfully!",
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
  addComment,
  getComment,
  deleteComment,
  updateComment,
  getUserComments,
  getRecipeComments,
}