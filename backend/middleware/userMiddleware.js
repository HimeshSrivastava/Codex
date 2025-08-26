import { user } from "../models/user.js";
import jwt from 'jsonwebtoken'

const userMiddleware=async(req,res,next)=>{
  try {
    const token=req.header('Authorization')?.replace('Bearer ','');  
    if(!token){
       return res.status(401).json("token not found");
    }

    const decoded=jwt.verify(token,process.env.JWT_KEY);
    const decodedUser= await user.findById(decoded.id);

    if(!decodedUser){
        return res.json("user not found");
    }

    req.result=decodedUser;
    next();
    } catch (error) {
     console.error("error occured",error);
    }
}

export default userMiddleware;