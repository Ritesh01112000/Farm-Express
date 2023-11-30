import {createSlice} from '@reduxjs/toolkit'

const initialState={
    selectedMachine:null,
    machineName:null,
    img:null,
    description:null
}

const mySlice = createSlice({
    name:'machineReducer',
    initialState,
    reducers:{
        updateSelectedMachine:(state,action)=>{
            state.machineName = action.payload.machineName
            state.img=action.payload.img
            state.description=action.payload.description        
        },
    },
});
export const {updateSelectedMachine} = mySlice.actions;
export default mySlice.reducer;