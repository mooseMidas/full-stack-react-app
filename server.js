// server.js -> responsible for creating and strating the server

const app = require("./app");
const port = process.env.PORT || 8080;
const express = require("express");
const path = require("path");

app.listen(port, () => console.log("Server started on port 8080"));

app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});
