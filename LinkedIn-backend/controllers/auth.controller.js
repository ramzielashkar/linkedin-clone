const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users.model');


// function to login 
const login = async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email}).select("+password");

    if(!user) return res.status(404).json({message: "Invalid Credentials"});

    const isMatch = bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});

    const token = jwt.sign({email: user.email, name: user.name}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
    res.status(200).json({
        'user': user, 
        'token' : token
    })
}

// function to register user
const signup = async (req, res)=>{
    const {name, email, password, type} = req.body;
    try{
        const user = new User();
        user.name = name;
        user.email = email;
        user.type = type;
        user.password = await bcrypt.hash(password, 10);

        await user.save();
        const token = jwt.sign({email: user.email, name: user.name}, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h'
        });
        res.json({
            "user": user,
            "token" : token
        })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    login,
    signup
}