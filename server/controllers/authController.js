const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { connection } = require("../utils/db");
const SECRET = "guard-recruiting-app" || process.env.JWT_SECRET;

const signUp = (req, res) => {
  try {
    // Get Data from Body
    const { name, email, password, phone, age, location, image } = req.body;
    connection.query(`SELECT * FROM user WHERE email='${email}'`, (err, rows) => {
      // Check if User Already Exists
      if (!err && rows.length != 0) {
        res.status(409).json({
          success: false,
          message: "User Already Exists",
          err,
        });
      } else {
        // Encrypt Password
        const encryptedPassword = bcrypt.hashSync(password, 10, (err, hash) => {
          if (!err) {
            return hash;
          } else {
            res.status(400).json({
              status: false,
              message: "Password Encryption Failed!",
              err,
            });
          }
        });
        // Insert User into the Database
        connection.query(
          `INSERT INTO user (name, email, password, phone, age, location, image)
          VALUES ('${name}', '${email}', '${encryptedPassword}', '${phone}', ${age}, '${location}', '${image}')`, (err, rows) => {
          if (!err) {
            res.status(201).json({
              success: true,
              message: "User Created Successfully!",
              userData: rows,
            })
          } else {
            res.status(400).json({
              success: false,
              message: "User Insertion Failure!"
            })
          }
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error,
    });
  }
};

const login = (req, res) => {
  try {
    const { email, password } = req.body;
    connection.query(`SELECT * FROM user WHERE email='${email}'`, (err, rows) => {
      if (rows.length === 0) {
        res.status(404).json({
          status: false,
          message: "User Not Found!",
        });
      } else {
        if (err) {
          res.status(400).json({
            status: false,
            message: "Please Try Again!",
            err,
          });
        } else {
          if (bcrypt.compareSync(password, rows[0].password)) {
            // Generate JWT Token
            const userToken = jwt.sign({
              id: rows[0].id,
            }, SECRET, {
              expiresIn: "30d",
            })

            // Send User Data
            res.status(200).json({
              success: true,
              message: "User Logged In!",
              user: rows[0],
              token: userToken,
            })
          } else {
            res.status(401).json({
              status: false,
              message: "Username or Password Incorrect!",
            });
          }
        }
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error,
    });
  }
};

module.exports = {
  signUp,
  login,
};