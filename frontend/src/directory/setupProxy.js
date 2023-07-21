const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/" , "/otherApi"], {
      target: "https://evening-lake-82112-ba62a6e69b2a.herokuapp.com/",
    })
  );
};

