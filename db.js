import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';

dotenv.config();
sqlite3.verbose();

const dbName = process.env.DATABASE_NAME;
const db = new sqlite3.Database(dbName);

const createTableSqlite3 = `
    CREATE TABLE IF NOT EXISTS user (
        userid  INTEGER PRIMARY KEY AUTOINCREMENT,
        userName TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`;

db.run(createTableSqlite3, (err) =>{
    if(err){
      return  console.log("Error creating table: ", err.message);
    }

    console.log("Table created successfully");
});


// db.close((err) =>{
//     if(err){
//         return console.log('Error closing database: ', err.message);
//     }
//     console.log("Database closed successfully");
// });


export function createUser(userName, password, callback) {

        const newUser = `
            INSERT INTO user(userName, password)
            VALUES ('${userName}', '${password}');
        `;
         db.run(newUser, (err) =>{
            if(err){
                if(err.message.includes("UNIQUE constraint")){
                    return callback('Error the username already exists');
                }
                return callback("Database error :" + err.message);
            }
            callback(null, "User created successfully");
        });  
    
}

export function loginUser (userName, password, callback){
    const verifyUser = `
    SELECT * FROM user WHERE userName = ?
    `;

    db.get(verifyUser, [userName], (err,row) =>{
        if(err){
            return callback("Login Unsuccessful: "+ err.message);
        }
        return callback(null, row);
    })
}