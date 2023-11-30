import mongoose from 'mongoose'
import Machines from '../models/MachineModel.js'
import Renters from '../models/RenterModel.js'



export const getMachines = async (req,res) => {
   
  const machines = await Machines.find()
  console.log(machines,"machines")
  console.log("inside get all machines")
  res.status(200).json({machines});
}

export const getRenters = async (req,res)=>{
   const machineName= req.params.machineName
  try{
    const renters = await Renters.find({machineName:machineName})
    if(renters){
        res.status(200).json(renters)
    }
    else{
      res.status(404)
    }
 
  }catch(e){
    console.log(e)
    }
}