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

// function to search for jobs
const search = async (req, res) => {
    const {job} = req.params;
    const result = await Job.find({ "type": { "$regex": job, "$options": "i" } }).populate('company_id');
    res.json({result});
} 

// function to get job by name
const getJob = async (req, res) => {
    const {name} = req.params;
    const result = await Job.findOne({name}).populate('company_id');
    if(!result) return res.json({message: "Job not Found"});
    res.json({result});
}

// function to edit profile
const editProfile = async (req, res) => {
    const {name, email, bio, profile_picture} = req.body;
    const id = req.user.id;
    try {
        const user = await User.findByIdAndUpdate(id,{
            name, 
            email,
            bio,
            profile_picture
        });
        res.json({user});
    } catch (error) {
        res.status(400).json({
            message: err.message,
        })
    }

}



module.exports = {
    applyToJob,
    followCompany,
    search,
    getJob,
    editProfile
}
