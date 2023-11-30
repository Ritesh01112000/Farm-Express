import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name:null,
    token:null,
}

const mySlice = createSlice({
    name:'authReducer',
    initialState,
    reducers:{
        updateUserInfo:(state,action)=>{
            state.name = action.payload.name
            state.token = action.payload.token;
      
        },
    },
});
export const {updateUserInfo} = mySlice.actions;
export default mySlice.reducer;