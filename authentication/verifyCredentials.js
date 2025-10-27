import fs from 'fs/promises';

 export const isExist = async (req, res, next)=>{

    const data = await readFile();
    const {userName} = req.body;
    if(!data.includes(userName)){
        next();
    }
   return res.json({message: 'User already exists'});
}

async function readFile() {
    try{
       const data = await fs.readFile('login.csv', 'utf8');
        return data;
    }catch(err){
        await fs.writeFile('login.csv', '', 'utf8');
        return '';
    }
}