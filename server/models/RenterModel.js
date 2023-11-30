import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const RenterSchema = new Schema({
    machineName:{
        type:String,
        require:true
    },
    owner:{
       type:String, 
       require:true
    },
    machineModel:{
        type:String,
        require:true
    },
    area:{
       type:String, 
       require:true
    },
    price:{
       type:String, 
       require:true
    }
    
})

const Renters = mongoose.model("renters",RenterSchema);
export default Renters; 
