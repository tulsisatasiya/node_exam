const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    admin: {
        type: String,
        required: true,
        trim: true,
    },

    adminid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
    },
    admin_level: {
        type: String,
        required: true,
        trim: true,

    }
});

const Admin = mongoose.model("adminSchema", adminSchema);

module.exports = Admin;
