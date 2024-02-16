const express = require("express");
const userRoute = require("./user.route");
const adminRoute = require("./admin.routes");
const categoryRoute = require("./categoray.route");
const bookRoute = require("./book.route");
const orderRoute = require("./order.route");

const route = express.Router();

route.use("/user", userRoute);
route.use("/admin", adminRoute);
route.use("/category", categoryRoute);
route.use("/Book", bookRoute);
route.use("/order", orderRoute);

module.exports = route;
