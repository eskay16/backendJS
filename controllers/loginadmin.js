import fs from 'fs';
import readline from 'readline';


export const loginAdmin = async (req, res) =>{
    const {userName, password} = req.body;
   const verified = await readFileLines(userName, password);
    if(verified){
        return res.json({message: `Welcome: ${userName}`});
    }else{
     return res.json({message: `Wrong credentials`});   
    }

}

async function  readFileLines(userName, password) {
    const fileStream = fs.createReadStream('login.csv');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    for await (const line of rl){
        const loginData = line.split(' ');
        const savedUserName = loginData[0].split(':')[1].trim();
        const savedPassword = loginData[1].split(':')[1].trim();

        if(userName === savedUserName && password === savedPassword){
            rl.close();
            return true;
        }

    }
    rl.close();
    return false;
}