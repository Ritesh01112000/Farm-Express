import axios from 'axios'

var token
const userinfoString = localStorage.getItem('userinfo');
if (userinfoString) {
    const userinfo = JSON.parse(userinfoString);
    token= userinfo.token
 }

const header = {
    'Content-Type': 'application/json',
    'Authorization': token,
  }
const apiUrl = process.env.REACT_APP_SERVER_URL;
console.log(apiUrl,"apiUrl")

const API = axios.create({baseURL:apiUrl})



export const login = (authData)=> API.post('/user/login',authData,)
export const signup = (authData)=> API.post('/user/signup',authData,)
export const getAllMachines = () =>API.get('/machines/all') 
export const getRenters = (id) => API.get(`/machines/getRenters/${id}`,{headers:header})
export const insertBookings = (authData) =>API.post('/bookings/booking-details',authData,{headers: header,})
export const getBookings = (emailid) => API.get(`/bookings/getbookings/${emailid}`,{headers: header,})




