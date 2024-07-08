const userRouter = require("./user.routes");
const productRouter = require("./product.routes");

const routes = (app) => {
  app.use("/user", userRouter);
  app.use("/api/v1", productRouter);
};

module.exports = routes;
