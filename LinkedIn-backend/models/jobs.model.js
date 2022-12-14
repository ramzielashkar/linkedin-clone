const mongoose = require('mongoose');
const {Application, applicationSchema} = require('./application.model');
const User = require('./users.model');

// Creating User Schema
const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    description:{
        type: String,
        required: 'Description is required'
    },
    type:{
        type: String,
        required: 'Type is required'
    },
    company_id:{
        required :'company is required',
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    applications :
        [   {user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        details: {
            type: String,
            required : 'details are required'
        },
    }]
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;