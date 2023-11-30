import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import machinesRouter from './routes/machines.js'
import bookingsRouter from './routes/bookings.js'
import bodyParser from 'body-parser';
import cors from 'cors';
import Machines from './models/MachineModel.js'

const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors({
//     origin: 'https://your-react-app.com', // Replace with the actual origin of your React app
//   }));


const PORT = process.env.PORT|| 4000;




app.get('/',(req,res)=>{
res.send("This is my Cap Stone Project")
})

app.use('/user',userRouter)
app.use('/machines',machinesRouter)
app.use('/bookings',bookingsRouter)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

mongoose.connect(process.env.CONNECTION_URL)
 .then(()=> {console.log("Connected to DB")})
 .catch((err)=>console.log(err.message))