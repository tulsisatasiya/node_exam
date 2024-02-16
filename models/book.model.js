const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    Book_img: {
        type: String,
    },

    Book_title: {
        type: String,
        required: true,
        trim: true,
    },

    Book_author: {
        type: String,
        required: true,
        trim: true,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CategorySchema",
     
    },
    availableCopies: {
        type: Number,
        trim: true,
        required: true,
    },
    totalCopies: {
        type: Number,
        trim: true,
        required: true,
    },
}
);
const Book = mongoose.model("BookSchema", BookSchema);

module.exports = Book;