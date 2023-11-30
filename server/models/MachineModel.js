import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const MachineSchema = new Schema({
    machineName:{
        type:String,
        require:true
    },
    img:{
       type:String, 
       require:true
    },
    description:{
        type:String,
        require:true
    }
    
})

const Machines = mongoose.model("machines",MachineSchema);
export default Machines; 
