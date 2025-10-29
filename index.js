import express from "express";
import dotenv from 'dotenv';
import userRoute from "./Routes/userRoutes.js";

dotenv.config();
const portNum = process.env.PORT_NUMBER;

const app = express();


app.use(express.json());


app.use('/user', userRoute);

app.listen(portNum, () => {
  console.log(`http://localhost:${portNum}`);
});
