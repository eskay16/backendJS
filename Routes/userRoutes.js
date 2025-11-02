import express from 'express';
import { detailsValidators, signUpValidators, validators } from '../validation/validator.js';
import { Signup } from '../controller/signup.js';
import { loginTheUser } from '../controller/login.js';
import { personalDetails } from '../controller/PersonalDetails.js';
 
const userRoutes = express.Router();

userRoutes.post('/signup', validators(signUpValidators), Signup);

userRoutes.post('/login',validators(signUpValidators), loginTheUser);

userRoutes.post('/add-details', validators(detailsValidators), personalDetails);

export default userRoutes;