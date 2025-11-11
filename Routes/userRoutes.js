import express from "express";
import {
  detailsValidators,
  signUpValidators,
  validators,
} from "../validation/validator.js";
import { Signup } from "../controller/signup.js";
import { loginTheUser } from "../controller/login.js";
import { personalDetails } from "../controller/PersonalDetails.js";
import { jwtMiddleware } from "../auth/jwtMiddleware.js";
import { deleteDetails } from "../db.js";

const userRoutes = express.Router();

userRoutes.post("/signup", validators(signUpValidators), Signup);

userRoutes.post("/login", validators(signUpValidators), loginTheUser);

userRoutes.post(
  "/add-details",
  validators(detailsValidators),
  jwtMiddleware,
  personalDetails
);
userRoutes.post("/delete-details", jwtMiddleware, (req, res) => {
  deleteDetails(req, (response) => {
    if (!response.status) {
      return res.status(400).json({ Message: response.message });
    }
    return res
      .status(200)
      .json({ message: "Personal details deleted successfully" });
  });
});

export default userRoutes;

