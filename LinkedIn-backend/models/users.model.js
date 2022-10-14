const mongoose = require('mongoose');

// Creating User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required',
        unique: true
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },
    type :{
        type: String,
        required : 'user type is required',
        enum: ['user', 'company']
    },
    bio:{
        type: String,
        default: ''
    },
    profile_picture:{
        type: String,
        default: ''
    },

})

const User = mongoose.model('User', userSchema);

module.exports = User;