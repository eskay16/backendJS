import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const jwtMiddleware = (req, res, next)=>{

    try {
        
        const token = req.cookies['customer'];
        if(!token) {
            return res.status(400).json({Message: "authentication missing"})};

            const decoded = jwt.verify(token, JWT_SECRET);
            console.log(decoded);

            if('userName' in decoded){
                console.log(decoded.userName);
                req.user = decoded;
                return next();
            }

            return res.status(400).json({Message: "invalid token"});

    } catch (err) {
        return res.status(400).json({Message: "something went wrong "+ err.message});
    }
}