require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001; // http://localhost:3001
const bookRoutes = require("./routes/bookRoutes");
const mongoose = require("mongoose");

app.use(express.json()); // parse the json in the requests

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});
