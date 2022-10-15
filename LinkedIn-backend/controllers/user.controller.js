const User = require("../models/users.model");
const Job = require("../models/jobs.model");
const { Application } = require("../models/application.model");
const Follow = require("../models/follows.model");
const fs = require("fs");
const mime = require('mime');

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
    const id = req.user.id;
    const {name, email, bio} = req.body;
    const matches = req.body.profile_picture.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    const response ={};
    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
    const decodedImg = response;
    const imageBuffer = decodedImg.data;
    const type = decodedImg.type;
    const fileName = `${id}.png`;
    
    fs.writeFileSync("./public/" + fileName, imageBuffer, 'utf8');
        try {
        const user = await User.findByIdAndUpdate(id,{
            name, 
            email,
            bio,
            profile_picture: fileName
        });
        res.json({user});
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }

}

// function to get all jobs
const getAllJobs = async (req, res) => {
    const result = await Job.find().populate('company_id');
    if(!result) return res.json({message: "Job not Found"});
    res.json({result});
}




module.exports = {
    applyToJob,
    followCompany,
    search,
    getJob,
    editProfile,
    getAllJobs
}
