import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
    } catch (error) {
        console.error("connection invalid",error);
    }
}

export default connection;