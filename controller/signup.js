import { CreateNewUser } from "../db.js";

export function Signup (req, res){
    
    const {userName, password} = req.body;

    if(!userName){
        console.log("Validator no work");
    }else{
        console.log("working");
        const worked = CreateNewUser(userName, password);

        if(worked){
        res.status(200).json({message: worked});
    }

    }

    


}