import express from 'express';
import { signup } from '../controller/signup.js';
import { authentication } from '../controller/login.js';
import { signUpValidators, validate } from '../validator/validators.js';

const userRoute = express.Router();


userRoute.post('/signup', validate(signUpValidators), signup);

userRoute.post('/login', authentication);
export default userRoute;
