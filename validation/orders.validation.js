const Joi = require("joi");

const addOrder = {
  body: Joi.object().keys({
    userId: Joi.string().required().trim(),
    bookId: Joi.string().required().trim(),
    orderDate: Joi.date().required(),
    returnDate: Joi.string().required().trim(),
    isReturned: Joi.string().required().trim(),
  }),
};

module.exports = {
  addOrder,
};
