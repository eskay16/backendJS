import { createUser } from "../db.js";

export async function signup(req, res) {
    
        const {userName, password} = req.body;
        if((!userName || userName.trim() === "") || (!password || password.trim() === "")){
            return res.json({message: "Username or password cannot be empty"});   
        }else{
            createUser(userName, password, (err, result)=>{
            if(err){
                return res.json({message: err});
            }
           return res.json({message: result});
        });
        }
        
        
    


}