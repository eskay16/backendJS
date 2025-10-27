export const verification = (req, res, next)=>{
    const dumCode = "bbc123";
    const {code} = req.body;
    if(code === dumCode){
        console.log("You are welcome dicksucker");
        next();
    }

    res.json({error: 'Sorry you do not have access'});
return;
}