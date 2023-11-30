import { useState } from "react";
import './machineDetails.css'
import { updateNav } from '../../reducers/navReducer';
import { useDispatch } from 'react-redux';
import { addBookings } from "../../action/bookings";
import PropTypes from 'prop-types';


const Dialogue = ({ isOpen, onClose, data, img}) => {
 
    const [selectedUnit, setSelectedUnit] = useState('hourly')
    const [qty,setQty] =useState(0)
    const dispatch = useDispatch();
    let emailid ="";
    const handleUnitChange = (event) => {
        setSelectedUnit(event.target.value);
      };
    const onSubsHandler=()=>{
        if(qty!=0)  
        setQty(qty-1)
         }
    const onAddHandler=()=>{
            setQty(qty+1)
           }


    const userinfoString = localStorage.getItem('userinfo');
       if (userinfoString) {
           const userinfo = JSON.parse(userinfoString);
           emailid = userinfo.email
        } else {
           console.log("No 'userinfo' found in localStorage");
       }
    const onBookHandler=()=>{
      
      const authData={
        machineName:data.machineName,
        owner:data.owner,
        machineModel:data.machineModel,
        area:data.area,
        price:data.price,
        emailid:emailid,
        img:img

      }
      dispatch( addBookings(authData) )
     
      onClose(); 
    }


  
    return (
      <>
        {isOpen && (
          <div className="dialogue-overlay">
            <div className="dialogue-content">
             
              <p><b>Owner : </b>{data.owner}</p>
              <p><b>Machinery : </b>{data.machineName}</p>
              <p><b>Machinery Details : </b>{data.machineModel}</p>
              <p><b>Area : </b>{data.area}</p>
            <hr/>
              <p><b><u>Pricing</u></b></p>
              <p>
        <input
          type="radio"
          id="hourly"
          name="unit"
          value="hourly"
          checked={selectedUnit === 'hourly'}
          onChange={handleUnitChange}
        />
        <label htmlFor="hourly"><b>Hourly : </b> {data.price}/hr</label>
      </p>

      <p>
        <input
          type="radio"
          id="hectare"
          name="unit"
          value="hectare"
          checked={selectedUnit === 'hectare'}
          onChange={handleUnitChange}
        />
        <label htmlFor="hectare"><b>Hectare : </b> {data.price}/Hc</label>
      </p>

     <div className="total-box">
        <div>
            <p><b>Total {selectedUnit === 'hourly' ? 'Hours' : 'Hectare'} : </b> </p> 
        </div>
      <div className="inc-desc-btn-box">
        <div className="desc-btn-inner-box" onClick={onSubsHandler}>
         <p>-</p>
        </div>
        <div className="Qty-inner-box">
          <p>{qty}</p>
        </div>
        <div className="inc-btn-inner-box" onClick={onAddHandler}>
         <p>+</p>
        </div>
      </div>
      </div>

             
              <hr/>
              
              <button className='btn-danger dialogue-button' onClick={onBookHandler}>Book Machinery</button>
              <button className='btn-white dialogue-button' onClick={onClose}>Cancel</button>
            </div>
          </div>
        )}
      </>
    );
  };

  Dialogue.propTypes = {
    isOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    img: PropTypes.string.isRequired, 
    data: PropTypes.object.isRequired
  };

  export default Dialogue;