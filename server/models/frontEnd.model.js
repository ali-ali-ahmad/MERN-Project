const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const frontEndSchema = new mongoose.Schema({
    html: {
        type: Array
    },

    width: {type:Number},
    height: {type:Number},
    color: {type:String},
    BGColor: {type:String},

    firstName: {
    type: String,
    required: [true, "First name is required"]
    },
    lastName: {
    type: String,
    required: [true, "Last name is required"]
    },
    email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
    }
    },
    password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be 8 characters or longer"]
    }
}, {timestamps: true});
module.exports.FrontEnd = mongoose.model('frontEnd', frontEndSchema)