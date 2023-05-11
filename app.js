// app.js -> contains configurations and middleware setup

const express = require("express");
const helmet = require("helmet");
const app = express();

// Helmet middleware added for security
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "example.com"],
      },
    },
    xssFilter: true,
    noSniff: true,
    referrerPolicy: true,
    hsts: true,
    hidePoweredBy: true,
    noCache: true,
    contentSecurityPolicy: false,
    XContentOptions: "nosniff",
  })
);

// GET request sends query to API with the specified search term, limit and media type
app.get("/search", async (req, res) => {
  try {
    let searchTerm = req.query.term;
    let amount = req.query.limit;
    let mediaType =
      req.query.entity === "all" ? "" : `&entity=${req.query.entity}`;

    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchTerm}&limit=${amount}&entity=${mediaType}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
