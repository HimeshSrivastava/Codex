import express from "express";
import dotenv from "dotenv";
import connection from "./DB/connection.js";

const app=express();

dotenv.config();
app.use(express.json());

import authRouter from './routes/auth.js'

app.use("/auth",authRouter);

app.listen(process.env.PORT,()=>{
    connection();
    console.log(`server is connected ${process.env.PORT}`);
})


