import { loginUser } from "../db.js";

export function authentication(req, res){

    const {userName, password} =req.body;

    loginUser(userName, password, (err, data) =>{
        if(err){
            return res.json({message: 'Unsuccessful Login: '+err.message});
        }
        if(!data){
            return res.json({message: 'User not found or incorrect credentials'});
        }
        return res.json({message: 'successful Login welcome: '+data.userName});
    });
}