import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
dotenv.config()

const portNum = process.env.PORT_NUMBER;

app.use(express.json());
app.use(cookieParser())

app.use('/user', userRoutes);
app.listen(portNum, (err) => {
  if (err) {
    console.log("Unable to listen: ", err.message);
  } else {
    console.log("server successfully  started");
  }
})
