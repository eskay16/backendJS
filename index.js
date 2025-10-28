import express from "express";
import dotenv from 'dotenv';
import userRoute from "./Routes/userRoutes.js";

dotenv.config();
const portNum = process.env.PORT_NUMBER;

const app = express();


app.use(express.json());

app.use('/home', (req, res) =>{
    res.json({message: "Welcome"});
});

app.use('/user', userRoute);

app.listen(portNum, ()=>{
    console.log("http://localhost:4000");
});