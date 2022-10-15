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

// function to get company jobs
const getJobs = async (req, res) =>{
    const company_id = req.user.id;
    const jobs = await Job.find({company_id}).select("+applications");
    res.json(jobs);
}

module.exports = {
    addJob, 
    getJobs
}