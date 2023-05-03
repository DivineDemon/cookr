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
    const { comment, likes } = req.body;
    const response = await prisma.comment.create({
      data: {
        comment,
        likes,
        user: {
          connect: { id: req.user.id },
        },
        recipe: {
          connect: { id: Number(req.params.recipe_id) },
        }
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
      error: error.message,
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

const likeComment = async (req, res) => {
  try {
    const comment_id = Number(req.query.comment_id);
    const response = await prisma.comment.update({
      where: { id: comment_id },
      data: { likes: { increment: 1 } },
    });

    res.status(200).json({
      status: true,
      message: "Comment Liked Successfully!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    });
  }
};

module.exports = {
  addComment,
  getComment,
  likeComment,
  deleteComment,
  updateComment,
  getUserComments,
  getRecipeComments,
}