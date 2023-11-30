import {createSlice} from '@reduxjs/toolkit'

const initialState={
      bookingData:null
}

const mySlice = createSlice({
    name:'bookingReducer',
    initialState,
    reducers:{
        updateBookings:(state,action)=>{
            state.bookingData=action.payload
          },
    },
});
export const {updateBookings} = mySlice.actions;
export default mySlice.reducer;