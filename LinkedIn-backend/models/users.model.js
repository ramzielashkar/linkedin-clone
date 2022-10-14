const mongoose = require('mongoose');

// Creating User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
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
    },
    profile_picture:{
        type: String
    },

})

const User = mongoose.model('User', userSchema);

module.exports = User;