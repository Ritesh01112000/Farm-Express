import Navbar from '../../components/navbar/navbar';
import './machineDetails.css'
import tractor from '../../assets/Harvester.png'
import {useEffect, useState} from 'react'
import Dialogue from './dialogue'
import { useSelector } from 'react-redux';
import {machineReducer} from '../../reducers/machineReducer'
  



const MachineDetails = () =>{

    const [isDialogueOpen, setDialogueOpen] = useState(false);
    const [rentersData,setRentersData] = useState([])
    const selectedMachinedata = useSelector((state)=>state.machineReducer)
    
    const [selectedRenter,setSelectedRenters] = useState() 
    
    const handleOpenDialogue = (event, data) => {
        setSelectedRenters(data)
        setDialogueOpen(true);
      };
  
    const handleCloseDialogue = () => {
      setDialogueOpen(false);
    };

    var token=""
    const userinfoString = localStorage.getItem('userinfo');
    if (userinfoString) {
        const userinfo = JSON.parse(userinfoString);
        token= userinfo.token
     }
    
    const fetchAllMachineDetails = async ()=>{
        const response = await fetch(`http://localhost:5000/machines/getRenters/${selectedMachinedata.machineName}`,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
            },
          })
        const rentersData = await response.json();
        setRentersData(rentersData)
         }
   
  

    useEffect(()=>{
        fetchAllMachineDetails()
    },[selectedMachinedata.machineName])


return(
    <div>
        <Navbar />
        <div className='container1'>
        <div className='title'>
            <h1>{selectedMachinedata.machineName}</h1>
        </div>
        <div className='row '>
            <div  className='col-sm-6 img-container'>
              <img src={`assets/${selectedMachinedata.img}`} alt="tractor"/>
            </div>
            <div className='col-sm-6 description'>
            <p><b>{selectedMachinedata.description}</b></p>
    <p>This powerful tractor is equipped with the latest technology...</p>
    <p>Features:</p>
    <ul>
        <li>High horsepower for efficient farming</li>
        <li>Advanced GPS navigation system</li>
        <li>Comfortable cabin for long hours of work</li>
    </ul>
                </div>
        </div>
        
        <Dialogue
        isOpen={isDialogueOpen}
        onClose={handleCloseDialogue}
        data={selectedRenter}
        img ={selectedMachinedata.img}

      />



        <div className='container-2'>
            {
                rentersData.map((data)=>(
                    <div key={data.id} onClick={(event) => handleOpenDialogue(event, data)} className='owner-container'>
            <span>Owner : {data.owner}</span>
            <div className='owner-info-container'>
                
                <span>Area : {data.area}</span>
            <span></span>
            
            <span>Machine : {data.machineModel}</span>
            <br/>
            <span>Price : {data.price}</span>
            </div>
            
        </div>
                ))
            }
       

       
       
        </div>
        
        </div>

        
    </div>
)


}
export default MachineDetails;