const cors = require("cors");
const dotenv = require("dotenv").config();

// Initializing Express App
const express = require("express");
const app = express();

// Middleware
app.use(express.json({ limit: "200mb", extended: true }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));
app.use(cors());

// Routes
app.use("/auth", require("./routes/authRoute"));

// Starting the App
const PORT = dotenv.parsed.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));