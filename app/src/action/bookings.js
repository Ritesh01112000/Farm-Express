import * as api from '../api/index'
import { updateNav } from '../reducers/navReducer';
import { updateBookings } from '../reducers/bookingsReducer';

export const addBookings = (authData) => async (dispatch)=>{
    console.log("add bookings")
     const {data} = await api.insertBookings(authData)
     dispatch(updateNav('bookings'))
    }

 export const getBooking = (emailid) => async (dispatch)=>{
    console.log("get bookings")
     const {data} = await api.getBookings(emailid)
     const response=data
     dispatch(updateBookings(response))
 }   