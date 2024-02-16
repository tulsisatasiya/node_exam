const { orderSchema } = require("../models");

//add
const addOrder = (body) => {
    return orderSchema.create(body);
};

//get 
const getAllOrders = async () => {
    return orderSchema.find().populate("userId").populate("bookId");
};

//get
const getOrdersByUserId = (userId) => {
    return orderSchema.find({ userId }); 
};

//update
const updateOrder = (id, body) => {
    return orderSchema.findByIdAndUpdate(id, { $set: body }); 
};

//delete 
const deleteOrder = (id) => {
    return orderSchema.findByIdAndDelete(id);
};

module.exports = { addOrder, getAllOrders, getOrdersByUserId, updateOrder, deleteOrder };
