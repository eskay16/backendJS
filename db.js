import sqlite3 from "sqlite3";
import dotenv from "dotenv";

dotenv.config();
const dbName = process.env.DATABASE_NAME;
sqlite3.verbose();

const db = new sqlite3.Database(dbName);

const createTable = `
    CREATE TABLE IF NOT EXISTS user(
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    firstName TEXT,
    lastName TEXT,
    age INTEGER,
    email TEXT,
    gender CHAR

    );
`;

db.run(createTable, (err) => {
  if (err) {
    console.log("err: ", err.message);
  } else {
    console.log("created sucessfully");
  }
});

const addNewUser = `
    INSERT INTO user (userName, password)
    VALUES(?, ?);
`;

export function CreateNewUser(userName, password, callback) {
  db.run(addNewUser, [userName, password], (err) => {
    if (err) {
      console.log("Unable to add to database", err.message);
      return callback({ message: err.message, status: false });
    }
    return callback({
      userName: userName,
      status: true,
    });
  });
}

export function loginUser(userName, callback) {
  const getUser = `
    SELECT * FROM user WHERE userName = ?
`;
  db.get(getUser, [userName], (err, row) => {
    if (err) {
      return callback("Login was unsuccessfull " + err.message);
    }
    return callback(null, row);
  });
}

export function insertDetails(req, callback) {
  const { firstName, lastName, age, email, gender, userName } = req.body;
  const personalDetails = `
    UPDATE user
    SET firstName = ?,
        lastName =  ?,
        age = ?,
        email = ?,
        gender = ?
    WHERE 
        userName = ?;
    `;

  db.run(
    personalDetails,
    [firstName, lastName, age, email, gender, userName],
    (err) => {
      if (err) {
        return callback({
          message: "Details did not add successfully " + err.message, status: false
        });
      }
      return callback({
        message: "successful insertion",
        status: true
      });
    }
  );
}
