const express = require("express");
const validate = require("../middlewares/validate");
const { ordersValidation } = require("../validation");
const { orderController } = require("../controllers");
const route = express.Router();

route.post("/add", validate(ordersValidation.addOrder), orderController.addOrder);
route.get("/get", orderController.getAllOrders);
route.delete("/delete/:id", orderController.deleteOrder);
route.put("/update/:id",validate(ordersValidation.addOrder),orderController.updateOrder);

module.exports = route;
