import { body } from "express-validator";

export const validate =
  (validations) =>
    async (req, res, next) => {

      for (const validation of validations) {
        const result = await validation.run(req);
        if (!result.isEmpty()) {
          return res.status(400).json({ errors: result.array() });
        }
      }
      next();
    }

export const signUpValidators = [
  body("userName")
    .notEmpty()
    .escape()
    .trim()
    .withMessage("Invalid password"),
  body("password")
    .notEmpty()
    .escape()
    .trim()
    .withMessage("Invalid password")
]

