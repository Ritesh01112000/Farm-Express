import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer'
import navReducer from '../reducers/navReducer'
import machineReducer from '../reducers/machineReducer';
import allMachineReducer from '../reducers/allmachineReducer'
import bookingsReducer from '../reducers/bookingsReducer';

const store = configureStore({
  reducer:{
    authReducer,
    navReducer,
    machineReducer,
    allMachineReducer,
    bookingsReducer
  }
});
export default store;