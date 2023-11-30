import {createSlice} from '@reduxjs/toolkit'

const initialState={
    nav:'home'
}

const mySlice = createSlice({
    name:'navReducer',
    initialState,
    reducers:{
        updateNav:(state,action)=>{
            state.nav = action.payload;
        },
    },
});
export const {updateNav} = mySlice.actions;
export default mySlice.reducer;