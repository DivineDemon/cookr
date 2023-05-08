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
        comment_id: Number(req.query.comment_id),
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

const getReplies = async (req, res) => {
  try {
    const response = await prisma.comment_replies.findMany({
      where: {
        comment_id: Number(req.query.comment_id),
      },
      select: {
        reply_id: true,
      }
    });

    // Get Replies from IDs Collected
    const replies = await Promise.all(response.map((id) => {
      const data = prisma.comment.findMany({
        where: {
          id: id.reply_id,
        },
      }).then((response) => {
        return response[0];
      }).catch((error) => {
        res.status(404).json({
          success: false,
          message: "Replies Not Found!",
          error: error.message,
        });
      });

      return data;
    }));

    res.status(200).json({
      success: true,
      message: "Retrieved all Comment Replies!",
      comment_id: Number(req.query.comment_id),
      replies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    })
  }
};

module.exports = {
  addReply,
  getReplies,
}