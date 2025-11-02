import { insertDetails } from "../db.js";


export function  personalDetails (req, res){

    insertDetails(req, (err, result) =>{
        if(err){
            return res.json({message: "Failed to add personal details "+ err});
        }
        return res.status(200).json({message: "successful"});
    })
}