import express from 'express';
import { signup } from '../controller/signup.js';
import { authentication } from '../controller/login.js';

const userRoute = express.Router();

userRoute.post('/signup', signup);

userRoute.post('/login', authentication);
export default userRoute;