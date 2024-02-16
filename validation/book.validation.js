const Joi = require("joi");

const addBook = {
  body: Joi.object().keys({
    Book_img: Joi.string().trim(),
    Book_title: Joi.string().required().trim(),
    Book_author: Joi.string().required().trim(),
    category_id: Joi.string().required().trim(), 
    availableCopies: Joi.number().required(),
    totalCopies: Joi.number().required(),
  }),
};

module.exports = {
  addBook,
};
