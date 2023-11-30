import { useSelector } from "react-redux";
import Login from "../pages/auth/login";
import Dashboard from "../pages/dashboard/dashboard";
import { Link } from 'react-router-dom';
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Starter = () =>{
    const token = useSelector((state)=>state.authReducer.token)
    const navigate = useNavigate();
    useEffect(() => {
        if (token!=null) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
      }, [token, navigate]);
    


return null
// (token ? <Dashboard/> : <Login />)



}
export default Starter;
