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
      error: error.message,
    });
  }
};

const getRecipeComments = async (req, res) => {
  try {
    const recipe_id = Number(req.query.recipe_id);
    const response = await prisma.recipe_comments.findMany({
      where: {
        recipe: {
          id: recipe_id,
        },
      },
      select: {
        comment_id: true,
      },
    });

    // Get Comments from IDs Collected
    const comments = await Promise.all(response.map((id) => {
      const data = prisma.comment.findMany({
        where: {
          id: id.comment_id,
        },
      }).then((response) => {
        return response[0];
      }).catch((error) => {
        res.status(404).json({
          success: false,
          message: "Comments Not Found!",
          error: error.message,
        });
      });

      return data;
    }));

    res.status(200).json({
      success: true,
      message: "Retrieved all Recipe Comments!",
      recipe_id,
      comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
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
      error: error.message,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const { content, likes } = req.body;

    // Create New Comment
    const newComment = await prisma.comment.create({
      data: {
        content,
        likes,
        user: {
          connect: { id: req.user.id },
        },
      },
    });

    // Associate New Comment with Respective Recipe
    const response = await prisma.recipe_comments.create({
      data: {
        recipe_id: Number(req.params.recipe_id),
        comment_id: newComment.id,
      },
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
      error: error.message,
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
      error: error.message,
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