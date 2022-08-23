
require("dotenv").config({ path: './config.env' });
const path = require("path");
const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

// routes

const articles = require("./routes/api/article");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
// use Routes
app.use("/api/articles", articles);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
//     console.log(process.env.NODE_ENV);

//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("Api is run");
//   });
// }
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
