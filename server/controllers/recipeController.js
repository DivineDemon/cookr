const { connection } = require("../utils/db");

const addRecipe = (req, res) => {
  try {
    const { name, description, ingredients, user_id } = req.body;
    const current_timestamp = new Date();
    connection.query(`INSERT INTO recipes (name, description, ingredients, user_id, created_at, updated_at) VALUES ('${name}', '${description}', '${ingredients}', ${user_id}, '${current_timestamp}', '${current_timestamp}')`, (err, rows) => {
      if (!err) {
        res.status(201).json({
          success: true,
          message: "Created a New Recipe Successfully!"
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Recipe Creation Failed!",
          err,
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

module.exports = {
  addRecipe
}