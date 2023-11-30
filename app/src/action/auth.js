import *as api from '../api/index'
import {updateUserInfo} from '../reducers/authReducer';


export const login = (authData , navigate) => async (dispatch) =>{
    try{
        const {data} = await api.login(authData)
        const response = data; 
      
        localStorage.setItem('userinfo', JSON.stringify(response));
        dispatch(updateUserInfo(data))
        navigate('/dashboard')
    }catch(error){
        console.log(error,"error in login action")
        if (error.response && error.response.status === 404) {
            const errorMessage = error.response.data.message || "Please enter correct emailId and password";
            alert(errorMessage);}

    }
}


export const signup = (authData , navigate) => async (dispatch) =>{
    try{
        const response = await api.signup(authData)
        console.log(response.status,"in response")
      if(response.status==201){
        navigate('/login') 
        alert("You are Registered with FarmEXPRESS successfully")
      } 
    }catch(error){
        console.log(error,"error in login action")
        if (error.response && error.response.status === 409) {
            const errorMessage = error.response.data.message || "Email already exists";
            alert(errorMessage);
        } else {
            console.log(error, "error in signup action");
            alert("Something went wrong");
        }
    }
}