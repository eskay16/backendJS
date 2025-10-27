import fs from 'fs/promises';


export const writeData = async (req, res)=>{
    const {userName, password} = req.body;
    saveDetails(userName, password);
    return res.json({message: 'successful signup'});
}

async function saveDetails(userName, password) {
    try{
        const content = `username:${userName} password:${password}\n`;
        await fs.appendFile('login.csv', content, 'utf8');
        console.log("success adding file");
    }catch(err){
        console.log("error adding file: ", err);
    }
    
}
