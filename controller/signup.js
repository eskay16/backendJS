import { createUser } from "../db.js";

export async function signup(req, res) {

  const { userName, password } = req.body;

  if (!userName || !password) return res.json({ message: "Username or password cannot be empty" });

  createUser(userName, password, (err, result) => {
    if (err) {
      return res.json({ message: err });
    }
    return res.json({ message: result });
  });
}
