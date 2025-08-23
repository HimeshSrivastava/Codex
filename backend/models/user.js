import mongoose, { Types } from "mongoose";

const UserSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        unique:true
    },
    LastName:{
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true,
         unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    solvedProblem:{
        type:Array,
        required:true,
    }
})

export const user = mongoose.model('user',UserSchema);