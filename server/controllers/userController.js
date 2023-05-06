const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const followUser = async (req, res) => {
  try {
    const followedUser = await prisma.user.update({
      where: { id: req.query.user_id },
      data: { followers: { increment: 1 }, },
    });

    const followingUser = await prisma.user.update({
      where: { id: req.user.id },
      data: { following: { increment: 1 }, },
    });

    // Update Followed User
    const updateFollowedUser = await prisma.user_followers.create({
      user_id: req.query.user_id,
      follower_id: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Succesfully Followed User!",
      followed: followedUser,
      follower: followingUser,
      status: updateFollowedUser,
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
};