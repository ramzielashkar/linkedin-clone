const Job = require("../models/jobs.model");
const User = require("../models/users.model");

// function to add a job

const addJob = async (req, res) =>{
    const {name, description, type} = req.body;
    try{
        const job = new Job();
        job.name = name;
        job.description = description;
        job.type = type;
        job.company_id = req.user.id;

        await job.save();
        res.json(job)
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    addJob
}