import {Link, Navigate} from 'react-router-dom'
import './navbar.css'
import Dialogue from '../../pages/machineDetails/dialogue';
import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { updateNav } from '../../reducers/navReducer';
import { useDispatch } from 'react-redux';
import Bookings from '../bookings/bookings';
import { useNavigate } from 'react-router-dom';
import Profile from '../profile/profile';

const Navbar = () =>{
   const val=1;
   const dispatch = useDispatch();
   const nav = useSelector(state=>state.navReducer.nav)
   const navigate = useNavigate()
 
   const onHomeClick =()=>{
      dispatch(updateNav('home'))
      navigate('/dashboard')
     }
   const onBookingsClick =()=>{
      dispatch(updateNav('bookings'))
     }
   const onProfileClick =()=>{
      dispatch(updateNav('profile'))
     }
    

     const [isDialogueOpen, setDialogueOpen] = useState(false);
     const [isProfileDialogueOpen,setIsProfileDialogueOpen] = useState(false)
  

     
    
   
     const handleCloseDialogue = () => {
       setDialogueOpen(false);
       setIsProfileDialogueOpen(false)
     };
     
     useEffect(()=>{
       if(nav==='bookings'){
         setDialogueOpen(true);
       }
       if(nav!='bookings'){
        setDialogueOpen(false);
       }
       if(nav==='profile'){
        setIsProfileDialogueOpen(true);
      }
      if(nav!='profile'){
        setIsProfileDialogueOpen(false);
      }
     },[nav])


   return(
      <>
        <nav className='navbar navbar-expand-lg bg-light navbar-light border-bottom '>
        <div className='container'>
   
        
        <a href="#" className='navbar-brand text-danger' ><b>Farm</b>Express</a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
         data-bs-target="#navmenu"                               
>
<span className="navbar-toggler-icon"></span>
</button>


      
        <div className="collapse navbar-collapse"  id="navmenu"  >     
       
          <ul className="navbar-nav ms-auto"  >                
              <li className="nav-item">
                <p  className="nav-buttons" onClick={onHomeClick} style={{  backgroundColor:nav=='home'?"antiquewhite":"white"}} >Home</p>
              </li>
              <li className="nav-item">
                 <p  className="nav-buttons" onClick={onBookingsClick} style={{  backgroundColor:nav=='bookings'?"antiquewhite":"white"}}>Bookings</p>
              </li>
              <li className="nav-item">
                 <p className="nav-buttons" onClick={onProfileClick} style={{  backgroundColor:nav=='profile'?"antiquewhite":"white"}}>Profile</p>
              </li>
              <li>
              <Link to="/Login"><button  className="btn btn-outline-danger" >Log Out</button></Link>
              </li>
           </ul>
        </div>

        </div>
    </nav>

    <Bookings
        isOpen={isDialogueOpen}
        onClose={handleCloseDialogue}
        message="This is your dialogue message."
      />
      <Profile
        isOpenProfile={isProfileDialogueOpen}
        onCloseProfile={handleCloseDialogue}
        message="This is your dialogue message."
      />
    </>
    )
}
export default Navbar;