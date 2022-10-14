const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

// Authentication middleware
const companyMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({email: decoded.email}).lean();
        if(user.type!='company') return res.status(401).json({message: "Unauthorized"});
        next()

    }catch(err){
        return res.status(401).json({message: "Unauthorized"})
    }

}

module.exports = companyMiddleware;

