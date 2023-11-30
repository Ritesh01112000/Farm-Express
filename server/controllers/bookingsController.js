import mongoose from 'mongoose'
import Machines from '../models/MachineModel.js'
import Renters from '../models/RenterModel.js'
import Bookings from '../models/bookingsModel.js'

export const PostBookings = async (req,res) => {
    const {emailid,machineName,owner,machineModel,area,price,img} = req.body
    console.log("i am here")
    try{
         const newBooking =await new Bookings({
           emailid,
           machineName,
           owner,
           machineModel,
           area,
           price,
           img
       })
       console.log("i am here too")
       const result = await newBooking.save()
       return res.status(201).json("successfully Inserted");


   
   }catch(error){
    console.log(error)
   return res.status(500).json("someting went wrong in bookingsController")
      
    }
   }


   export const getBookings = async (req,res)=>{
    const {emailid} = req.params;
    
    try{
    const bookings = await Bookings.find({emailid:emailid})
    
    if(!bookings){
       return res.status(404).json("bookings not found")
    }
    else{
    res.status(200).json({bookings})
     }
    //else{
    //     res.status(401).json({ message:"Login Failed" })
    // }
    }
    catch(error){
        res.status(500).json("someting went wrong in bookingsController") 
    }
    } 
