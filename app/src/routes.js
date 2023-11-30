import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import Starter from './components/starter'
import Dashboard from './pages/dashboard/dashboard'
import SelectOptions from './pages/serviceOptions/serviceoptions'
import MachineDetails from './pages/machineDetails/machineDetails'

const AllRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element ={<Starter/>}/>
            <Route path='/login'element ={<Login/>}/>
            <Route path='/signup' element ={<Signup/>}/>
            <Route path ='/dashboard' element ={<Dashboard/>}/>
            <Route path ='/selectoptions' element ={<SelectOptions/>}/> 
            <Route path ='/machinedetails' element ={<MachineDetails/>}/> 
        </Routes>
    )
}
export default AllRoutes;