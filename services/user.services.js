const { userSchema } = require("../models");

//get
const getUser = () => {
  return userSchema.find();
};

//add
const addUser = (body) => {
  return userSchema.create(body);
};

//find
const findUser = (email) => {
  return userSchema.findOne({ email });
};
//get
const getuserByemail = (email) => {
  return userSchema.findOne({ email });
};

//update
const updateUser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, { $set: body });
};

//delete
const deleteUser = (id) => {
  return userSchema.findByIdAndDelete(id);
};
module.exports = { addUser, findUser, getUser, getuserByemail, updateUser, deleteUser };
