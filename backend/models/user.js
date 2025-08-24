import mongoose, { Types } from "mongoose";

const UserSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        unique:true
    },
    LastName:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    solvedProblem:{
        type:Array,
    }
})

export const user = mongoose.model('user',UserSchema);