import express from 'express';
import { signup } from '../controller/signup.js';

const userRoute = express.Router();

userRoute.post('/signup', signup);

export default userRoute;