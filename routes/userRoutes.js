import express from "express";
import {verification} from "../authentication/verifyCode.js";
import {addNums} from "../controllers/addNumController.js";
import {displayName} from "../controllers/displayNameController.js";

const userRouter = express.Router();

userRouter.post("/display-names",verification, displayName);
userRouter.post("/add-numbers",verification, addNums);

export default userRouter;