const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addReply = async (req, res) => {
  try {
    const { content, likes } = req.body;

    // Create New Comment
    const newReply = await prisma.comment.create({
      data: {
        content,
        likes,
        user: {
          connect: { id: req.user.id },
        },
      },
    });

    // Associate New Reply with Respective Comment
    const response = await prisma.comment_replies.create({
      data: {
        comment_id: Number(req.params.comment_id),
        reply_id: newReply.id,
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

module.exports = {
  addReply,
}