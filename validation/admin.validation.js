const Joi = require("joi");

const addadmin = {
  body: Joi.object().keys({
   
    admin: Joi.string().required().trim(),
    adminid: Joi.string().required().trim(),
    admin_level: Joi.string().required().trim(),
    
  }),
};
module.exports = {
    addadmin,
};
