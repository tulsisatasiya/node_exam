const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",

    },

    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BookSchema",
    },

    orderDate: {
        type: Date,
        required: true,
        trim: true,
    },
    returnDate: {
        type: String,
        required: true,
        trim: true,
    },
    isReturned: {
        type: String,
        required: true,
        trim: true,
    },


}
);
const order = mongoose.model("orderSchema", orderSchema);

module.exports = order;