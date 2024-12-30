const jwt = require('jsonwebtoken');

const jwtAuthMiddleWare = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.status(401).json({error:'Token not found'});
    
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error:'Unauthorized'});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({error:'Invalid token'});
    }
};

const generateToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET,{expiresIn: 3000});
};

module.exports = {
    jwtAuthMiddleWare,
    generateToken
};