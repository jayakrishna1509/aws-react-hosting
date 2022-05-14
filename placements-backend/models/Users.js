const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    
    pwd: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
    }
}, { collection: 'Users' },
);

const UserModel = mongoose.model("Admin", UserSchema);
module.exports = UserModel;