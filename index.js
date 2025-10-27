 import express from "express";

 const app = express();


app.use(express.json());

app.use('/home', (req, res) =>{
    res.json({message: "Welcome"});
});

app.listen(4000, ()=>{
    console.log("http://localhost:4000");
});