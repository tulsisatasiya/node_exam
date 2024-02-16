const express = require("express");
const validate = require("../middlewares/validate");
const { categoryValidation } = require("../validation");
const { categoryController } = require("../controllers");
const route = express.Router();

route.post("/add", validate(categoryValidation.addCategory), categoryController.addcategoray);
route.get("/get", categoryController.getcategoray);
route.delete("/delete/:id", categoryController.deletecategoray);
route.put("/update/:id",validate(categoryValidation.addCategory),categoryController.updatecategoray);

module.exports = route;
