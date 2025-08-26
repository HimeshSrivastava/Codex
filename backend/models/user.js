import mongoose, { Types } from "mongoose";

const UserSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    password:{
        type:String,
        required:true,
    },
    solvedProblem:{
        type:Array,
    }
})

export const user = mongoose.model('user',UserSchema);