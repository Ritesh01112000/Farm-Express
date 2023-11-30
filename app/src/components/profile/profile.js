import './profile.css'
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import {getBooking} from '../../action/bookings'
import { Link } from 'react-router-dom';

const Profile = ({ isOpenProfile, onClose, message }) => {
    
    const dispatch = useDispatch()
    const [userinfo , setUserInfo] = useState()
    const onLogout=()=>{

    }
    useEffect(()=>{
      const userinfoString = localStorage.getItem('userinfo');
       if (userinfoString) {
        setUserInfo( JSON.parse(userinfoString))
           console.log(userinfo,"userinfo123")
        } else {
           console.log("No 'userinfo' found in localStorage");
       }
    },[])
    

    
    
   
   return (
      <>
        {isOpenProfile && (
          <div className="profile-overlay">
            <div className="profile-content">
             
            

            <div className="profile-page">
            <img
             src="assets/profile-icon.png"
             alt="icon"
             className="profile-icon"
            />
             <h2 className="profile-name">{userinfo.name}</h2>
             {/* <h3 className="profile-name">Email ID </h3> */}
             <h4 className="profile-name">{userinfo.email}</h4>
            <Link to='/login'>
            <button className='booking-button' onClikc="onLogout"> Log Out</button>
            </Link>
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