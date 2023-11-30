import './profile.css'
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import {getBooking} from '../../action/bookings'


const Profile = ({ isOpenProfile, onClose, message }) => {
    
    const dispatch = useDispatch()
    var userinfo="";
    useEffect(()=>{
      const userinfoString = localStorage.getItem('userinfo');
       if (userinfoString) {
           userinfo = JSON.parse(userinfoString);
           console.log(userinfo)
        } else {
           console.log("No 'userinfo' found in localStorage");
       }
    },[])
    

    
    
   
   return (
      <>
        {isOpenProfile && (
          <div className="booking-overlay">
            <div className="booking-content">
             
            <div>
                 <h3>Name </h3>
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
  export default Profile;