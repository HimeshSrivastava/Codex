import validator from 'validator'

const validate= (data)=>{
    const madentoryFeild=["firstName","email","password"];
     
    const IsAllowed= madentoryFeild.every((k)=>Object.keys(data).includes(k));
    if(!IsAllowed) throw new Error("missing feild");
    if (!validator.isEmail(data.email)) throw new Error("invalid email");
    if(!validator.isStrongPassword(data.password)) throw new Error("invalid password");

}

export default validate;