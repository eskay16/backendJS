import express from 'express';
import { isExist } from '../authentication/verifyCredentials.js';
import { writeData } from '../controllers/writeLoginDetails.js';
import { loginAdmin } from '../controllers/loginadmin.js';


const adminRouter = express.Router();


adminRouter.post('/signup', isExist, writeData);

adminRouter.post('/login', loginAdmin);

export default adminRouter;

