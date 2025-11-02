 import { loginUser } from "../db.js";
 
export const loginTheUser = (req, res)=>{
    const {userName, password} = req.body;

    loginUser(userName, (err, result)=>{
        if(err){
            return res.json({message: "error :" + err});
        }
        if(password !== result.password){
            
        }
        if(!result){
            return res.json({message: "User does not exist"});
        }
        return res.json({message: "Welcome :" + userName});
    })

}