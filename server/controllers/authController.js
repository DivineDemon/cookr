const bcrypt = require("bcrypt");
const { connection } = require("../utils/db");

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
              message: "Please Try Again!"
            })
          }
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User Insertion Failure!",
      error,
    });
  }
}

module.exports = {
  signUp
};