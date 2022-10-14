const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

// Authentication middleware
const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if(!token) return res.status(401).json({message: "Unauthorized"})
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({email: decoded.email}).lean()
        req.user = {...user, id: user._id};
        next()

    }catch(err){
        return res.status(401).json({message: "Unauthorized"})
    }

}

module.exports = authMiddleware;

