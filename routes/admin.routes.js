const express = require("express");
const validate = require("../middlewares/validate");
const { adminValidation } = require("../validation");
const { adminController } = require("../controllers");
const route = express.Router();

route.post("/add", validate(adminValidation.addadmin), adminController.addAdmin);
route.get("/get", adminController.getAdmin);
route.delete("/delete/:id", adminController.deleteAdmin);
route.put("/update/:id",validate(adminValidation.addadmin),adminController.updateAdmin);

module.exports = route;
