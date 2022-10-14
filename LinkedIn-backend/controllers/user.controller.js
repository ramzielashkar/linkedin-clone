const User = require("../models/users.model");
const Job = require("../models/jobs.model");
const { Application } = require("../models/application.model");

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

module.exports = {
    applyToJob
}
