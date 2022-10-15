const mongoose = require('mongoose');
const User = require('./users.model');

// Creating User Schema
const applicationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    details: {
        type: String,
        required : 'details are required'
    },

})

const Application = mongoose.model('Application', applicationSchema);

module.exports = {
    Application,
    applicationSchema    
};