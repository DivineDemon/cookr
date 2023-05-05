const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const followUser = async (req, res) => {
  try {
    const updateFollowedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: { followers: { increment: 1 }, },
    });

    const updateFollowingUser = await prisma.user.update({
      where: { id: req.query.user_id },
      data: { following: { increment: 1 }, },
    });

    res.status(200).json({
      success: true,
      message: "Succesfully Followed User!",
      followed: updateFollowedUser,
      follower: updateFollowingUser,
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
  followUser,
}