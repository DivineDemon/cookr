const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addReply = async (req, res) => {
  try {
    const { content, likes } = req.body;
    const response = await prisma.comment.create({
      data: {
        content,
        likes,
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
      error: error.message,
    });
  }
};

module.exports = {
  addReply,
}