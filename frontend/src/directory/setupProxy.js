const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/" , "/otherApi"], {
      // target: "http://localhost:8080",
      target: "https://evening-lake-82112-ba62a6e69b2a.herokuapp.com/",
    })
  );
};
// https://evening-lake-82112-ba62a6e69b2a.herokuapp.com/
