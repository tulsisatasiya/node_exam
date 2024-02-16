const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        trim: true,
    },

    category_desc: {
        type: String,
        required: true,
        trim: true,
    },
    category_code: {
        type: String,
        required: true,
        trim: true,
    },
    category_choose: {
        type: String,
        trim: true,
        required: true,
    },
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "adminSchema",
     
    },

}
);
const category = mongoose.model("CategorySchema", CategorySchema);

module.exports = category;