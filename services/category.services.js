const { catogarySchema } = require("../models");


//add
const addCategory = (body) => {
    return catogarySchema.create(body);
};

//get
const getAllCategories = async () => {
    return catogarySchema.find().populate("admin_id"); 
};

//get
const getCategoryByName = (category_name) => {
    return catogarySchema.findOne({ category_name}).populate("admin_id"); 
};

//update 
const updateCategory = (id, body) => {
    return catogarySchema.findByIdAndUpdate(id,{ $set: body}); 
};

//delete
const deleteCategory = (id) => {
    return catogarySchema.findByIdAndDelete(id);
};

module.exports = { addCategory, getAllCategories, getCategoryByName, updateCategory, deleteCategory };
