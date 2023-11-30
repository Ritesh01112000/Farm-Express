import './bookings.css'
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import {getBooking} from '../../action/bookings'


const Bookings = ({ isOpen, onClose, message }) => {
    const [selectedUnit, setSelectedUnit] = useState('hourly')
    const [qty,setQty] =useState(0)
    const dispatch = useDispatch()
    let emailid=''
    const bookingData = useSelector(state=>state.bookingsReducer.bookingData)
    
    useEffect(()=>{
      const userinfoString = localStorage.getItem('userinfo');
       if (userinfoString) {
           const userinfo = JSON.parse(userinfoString);
           emailid = userinfo.email
           dispatch(getBooking(emailid))
        } else {
           console.log("No 'userinfo' found in localStorage");
       }
     
      
    },[])
    

    
    
   
   return (
      <>
        {isOpen && (
          <div className="booking-overlay">
            <div className="booking-content">
             
            <div>
    
              {
               bookingData.bookings.map((data)=>(
                <div key={data._id} className='bookings-box'>
                <img src={`assets/${data.img}`} alt="tractor" style={{width:"12vh",height:"12vh"}}/>
                <div className="booking-box-content">
                <p><b>{data.machineName}: {data.machineModel}</b></p>
                <p>Ram Lal And Sons</p>
                <div className="hour-and-status">
                    <p>Price: {data.price}/hr</p>
                    {/* <div className='status-box' style={{backgroundColor:'red'
                    }}>
                      <p>ON GOING</p>
                    </div> */}
                </div>
                </div>
               </div>
               ))
              }
            </div>
             
             <div>
            


             </div>
             
              
              {/* <button className='btn-danger booking-button' onClick={onBookHandler}>Book Machinery</button>
              <button className='btn-white booking-button' onClick={onClose}>Cancel</button> */}
            </div>
          </div>
        )}
      </>
    );
  };
  export default Bookings;