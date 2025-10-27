export const addNums = (req, res) =>{
     res.json({result: `${req.body.firstNum + req.body.secNum}`});
}