const express = require("express");
const validate = require("../middlewares/validate");
const { userValidation } = require("../validation");
const { userController } = require("../controllers");
const { restrict, authanticate } = require("../middlewares/auth");
const { upload } = require("../middlewares/multer");



const route = express.Router();
route.get( "/getuser",authanticate,restrict(["admin"]),userController.getUser);
route.get("/getProfile",authanticate,restrict(["admin"]),userController.getProfile);
route.post("/register",upload.single("profile_pic"),validate(userValidation.adduser),userController.addUser);
route.post("/login", userController.loginUser);

module.exports = route;