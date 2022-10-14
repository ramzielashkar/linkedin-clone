const User = require("../models/users.model");
const Job = require("../models/jobs.model");
const { Application } = require("../models/application.model");
const Follow = require("../models/follows.model");

//function to apply to a job
const applyToJob = async(req, res) => {
    const {details, job_id} = req.body;
    const application = {
        details,
        "user_id" : req.user.id
    }
    Job.findById(job_id, (error, result)=> {
        try {
            result.applications.push(application);
            result.save();
            res.json(result);
        } catch (error) {
            res.status(400).send(error.message);
        } 
    })
}

// function to follow a company
const followCompany = async (req, res) => {
    const {name} = req.params;
    const company = await User.findOne({name}).lean();
    try{
        const follow = new Follow();
        follow.user_id = req.user.id;
        follow.company_id = company._id;

        await follow.save();
        res.json(follow)
    }catch(err){
        res.status(400).json({
            message: err.message,
        })
    }
}

module.exports = {
    applyToJob,
    followCompany
}
