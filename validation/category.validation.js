const Joi = require("joi");

const addCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_desc: Joi.string().required().trim(),
    category_code: Joi.string().required().trim(),
    category_choose: Joi.string().required().trim(),
    admin_id: Joi.string().required().trim(), 
  }),
};

module.exports = {
  addCategory,
};
