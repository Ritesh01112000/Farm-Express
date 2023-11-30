import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const BookingsSchema = new Schema({
    emailid:{
        type:String,
        required:true
    },
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
    },
    img:{
      type:String,
      require:true
    }
    
})

const Bookings = mongoose.model("bookings",BookingsSchema);
export default Bookings; 
