const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

// App Initialization
const app = express();

// JSON BigInt Parsing Support
BigInt.prototype.toJSON = function () { return this.toString() };

// Middleware
app.use(express.urlencoded({ limit: "200mb", extended: true }));
app.use(express.json({ limit: "200mb", extended: true }));
app.use(cors());

// Routes
app.use("/api/user", require("./routes/authRoutes"));
app.use("/api/recipe", require("./routes/recipeRoutes"));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}.`))