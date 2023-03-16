const jwt = require("jsonwebtoken");

const SECRET = "cookr-recipe-web-application" || process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        res.status(403).json({
          status: false,
          message: "Invalid Token!",
          err
        });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("User not Authorized!");
  }
};

module.exports = verifyToken;