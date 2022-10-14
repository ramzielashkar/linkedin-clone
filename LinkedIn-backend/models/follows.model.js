const mongoose = require('mongoose');
const {Application, applicationSchema} = require('./application.model');
const User = require('./users.model');

// Creating User Schema
const followSchema = new mongoose.Schema({

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    company_id:{
        required :'company is required',
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

})

const Follow = mongoose.model('Follow', followSchema);

module.exports = Follow;