import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import './serviceoptions.css';
import image from '../../assets/FarmBGM.jpg';
import tractor from '../../assets/tractor.jpeg'
import harvester from '../../assets/harvester.jpeg'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import MachineDetails from '../machineDetails/machineDetails'
import { useDispatch,useSelector } from 'react-redux';
import { updateSelectedMachine } from '../../reducers/machineReducer';
import { getAllMachines } from '../../action/machines';

const ServiceOptions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [machines, setMachines] = useState([]);

  const [loading, setLoading] = useState(true);
  const data = useSelector(state=>state.allMachineReducer.data)
  
  useEffect(()=>{
    setLoading(false);
    setMachines(data.machines)
  },[data])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //          dispatch(getAllMachines(),navigate)
  
  //    } catch (error) {
  //       console.error('Error fetching machines', error);
  //     }
  //   }
  //   fetchData();
  // }, []);
 
  

  const onMachineSelect = (props) => {
    navigate('/machinedetails')
    dispatch(updateSelectedMachine(props))
  }


  

  return (
    <div>
       
      <Navbar />

      <div className="container-x">
        {loading ? (
          <h1>Loading...</h1>
        ) : machines.length === 0 ? (
          <h1>No machines found</h1>
        ) : (
          machines.map((data) => (
          
              <div onClick={()=>onMachineSelect(data)} className="card" key={data._id}>
              <img className="card-image" src={`assets/${data.img}`} alt="Card Image" />
              <div className="card-content">
                <h3>{data.machineName}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceOptions;
