const express = require("express");
const validate = require("../middlewares/validate");
const { bookValidation } = require("../validation");
const { bookController } = require("../controllers");
const { upload } = require("../middlewares/multer");
const route = express.Router();

route.post("/add", upload.single("Book_img"),validate(bookValidation.addBook), bookController.addBook);
route.get("/get", bookController.getAllBooks);
route.delete("/delete/:id", bookController.deleteBook);
route.put("/update/:id",validate(bookValidation.addBook),bookController.updateBook);

module.exports = route;
