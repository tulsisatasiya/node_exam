const { adminSchema } = require("../models");

// Add
const addAdmin = (body) => {
  return adminSchema.create(body);
};

// Get using name
const getAdminByName = (admin) => {
  return adminSchema.findOne({ admin});
};

// Get all
const getAllAdmin = async () => {
  return adminSchema.find().populate("adminid");
};

// Delete
const deleteAdmin = (id) => {
  return adminSchema.findByIdAndDelete(id);
};

// Update
const updateAdmin = (id, body) => {
  return adminSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = { addAdmin, getAdminByName, getAllAdmin, deleteAdmin, updateAdmin };


