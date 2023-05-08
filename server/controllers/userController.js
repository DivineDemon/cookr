const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const followUser = async (req, res) => {
  try {
    const updateFollowedUser = await prisma.user_followers.create({
      data: {
        user_id: Number(req.query.user_id),
        follower_id: req.user.id,
      },
    });

    res.status(200).json({
      success: true,
      message: "Succesfully Followed User!",
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

const unfollowUser = async (req, res) => {
  try {
    const updateUnfollowedUser = await prisma.user_followers.deleteMany({
      where: {
        AND: [
          { user_id: Number(req.query.user_id) },
          { follower_id: req.user.id },
        ],
      },
    });

    res.status(200).json({
      success: true,
      message: "Succesfully Unfollowed User!",
      status: updateUnfollowedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    });
  }
};

const followersList = async (req, res) => {
  try {
    const response = await prisma.user_followers.findMany({
      where: { user_id: req.user.id, },
    });

    res.status(200).json({
      success: true,
      message: "Retrieved all Following Users",
      count: response.length,
      following: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    })
  }
};

const followingList = async (req, res) => {
  try {
    const response = await prisma.user_followers.findMany({
      where: { follower_id: req.user.id, },
    });

    res.status(200).json({
      success: true,
      message: "Retrieved all Following Users",
      count: response.length,
      following: response,
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
  followUser,
  unfollowUser,
  followersList,
  followingList,
};