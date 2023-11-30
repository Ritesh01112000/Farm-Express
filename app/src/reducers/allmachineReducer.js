import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data:null
}

const mySlice = createSlice({
    name:'allMachineReducer',
    initialState,
    reducers:{
        addAllMachines:(state,action)=>{
            state.data = action.payload;
           
        },
    },
});
export const {addAllMachines} = mySlice.actions;
export default mySlice.reducer;