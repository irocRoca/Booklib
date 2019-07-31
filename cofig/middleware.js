import jwt from 'jsonwebtoken';

const verification = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];

    if(!token) return res.status(401).({error: 'Authorization Denied'})
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECERT);
        req.user = decoded;

    } catch(e) {
        return res.status(400).json({error: "Invalid Token"})
    }
}

module.export = verification;