import express from "express";
import userRouter from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
const app = express();

app.use(express.json());

app.use("/user",userRouter);

app.use("/admin", adminRouter);




app.listen(4000, ()=>{
console.log("welcome it is working");
});

