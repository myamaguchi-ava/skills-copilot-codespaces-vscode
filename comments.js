// Create web server
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Set up the static files
app.use(express.static(path.join(__dirname, "public")));

// Set up the routes
const comments = require("./routes/comments");
app.use("/comments", comments);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});