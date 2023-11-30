import User from '../models/UserModel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator';

const SECRET_KEY = "RITESH@2000"

export const signup = async (req,res) => {
 const {name,email,password} = req.body
 console.log(name)
 console.log(email)

 try{
    const existingUser = await User.findOne({email:req.body.email})
    if(existingUser){
        return res.status(409).json({message:"email Already existed"})
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)
    const newUser =await new User({
        name,
        email,
        password:hashedPassword
    })
    await newUser.save()

    const token = jwt.sign({ userId: newUser._id }, SECRET_KEY, {expiresIn: '1h', });

    res.status(201).json({ name,email,token });


  
}catch(error){
    console.log(error)
 }
}



export const login = async (req,res)=>{
const {email,password} = req.body;


const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }




try{
const existingUser = await User.findOne({email:email})
console.log(existingUser)
if(!existingUser){
   return res.status(404).json("user not registered")
}


const matchPassword = await bcrypt.compare(password,existingUser.password)

if(matchPassword){
const token = await jwt.sign({userId: existingUser._id},SECRET_KEY,{expiresIn:'1h'}) 
const name = existingUser.name
res.status(200).json({name,email,token,message:"Login Successfull" })
}else{
    res.status(401).json({ message:"Login Failed" })
}
}
catch(error){
    res.status(500).json("something went wrong while logging in") 
}
} 