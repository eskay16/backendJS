import { loginUser } from "../db.js";
import jwt from "jsonwebtoken";

const jwt_secret = process.env.JWT_SECRET;

export const loginTheUser = (req, res) => {
  const { userName, password } = req.body;

  loginUser(userName, (err, result) => {
    if (err) {
      return res.json({ message: "error :" + err });
    }
    
    if (!result) {
      return res.json({ message: "User does not exist" });
    }
    if (password !== result.password) {
      return res.json({ message: "Incorrect username or passowrd" });
    }

    const token = jwt.sign({ userName: userName }, jwt_secret);
    

    return res
      .status(200)
      .cookie("customer", token, { http: true, expiresIn: 1000 * 60 * 60 })
      .json({ message: "Welcome :"+  userName});
  });
};
