// login,register,logout,userProfile
import validate from '../utils/validate.js'
import jwt from 'jsonwebtoken'
import { user } from "../models/user.js";
import bcrypt from "bcryptjs"
import dotenv from 'dotenv'

dotenv.config('../env');

export const handleRegister =async(req,res)=>{
    try {
         const {firstName,email,password}=req.body;
         validate(req.body);
         
         req.body.password=await bcrypt.hash(password,10);
         req.body.role="user";

         const result= await user.create(req.body);
         const token = jwt.sign({id:result._id,email,role:"user"},process.env.JWT_KEY,{expiresIn:60*60});

         res.status(201).json({
         message:"user registered successfully",
         token
         })
    } catch (error) {
        console.error("error occured",error);
    }
  
}
export const handleadmin =async(req,res)=>{
    try {
        if(req.result.role!="admin"){
           return res.status(401).json("user is not authorised");
        }
         const {firstName,email,password}=req.body;
         validate(req.body);

         
         req.body.password=await bcrypt.hash(password,10);
         

         const result=await user.create(req.body);
         const token = jwt.sign({id:result._id,email,role:req.body.role},process.env.JWT_KEY,{expiresIn:60*60});

         res.status(201).json({
         message:"user registered successfully",
         token
         })
    } catch (error) {
        console.error("error occured",error);
    }
  
}

export const handleLogin =async(req,res)=>{
  try {
      const {email, password}=req.body;
      if(!email) throw new Error("invalid credentials");
      if(!password) throw new Error("invalid credentials");

      const userDetail =await user.findOne({email});

      const ans =await bcrypt.compare(password,userDetail.password);
       
      if(!ans) throw new Error("invalid credential");

      const token = jwt.sign({email,id:userDetail._id,role:userDetail.role},process.env.JWT_KEY,{expiresIn:60*60});

      res.status(200).json({
         message:"user logged in successfully",
         token
         })

  } catch (error) {
     console.error("error occured",error);
  }
}
export const handlelogout =(req,res)=>{
    res.json({
        message:"logout successfully"
    })
}