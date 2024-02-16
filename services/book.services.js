const { bookSchema } = require("../models");


//add
const addBook = (body) => {
    return bookSchema.create(body);
};

//get
const getAllBooks = async () => {
    return bookSchema.find().populate("category_id"); 
};

// get
const getBookByTitle = (Book_title) => {
    return bookSchema.findOne({Book_title}).populate("category_id"); 
};

//update 
const updateBook = (id, body) => {
    return bookSchema.findByIdAndUpdate(id,{ $set: body}); 
};

//delete
const deleteBook = (id) => {
    return bookSchema.findByIdAndDelete(id);
};

module.exports = { addBook, getAllBooks, getBookByTitle, updateBook, deleteBook };
