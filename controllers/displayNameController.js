export const displayName = (req, res)=>{

    const gotNames = req.body.name.split(',');

   const finalNames = gotNames.map((dName) =>{
    return ({name: dName})
   });
   res.json({finalNames});

}