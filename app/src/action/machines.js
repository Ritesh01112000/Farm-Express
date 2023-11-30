import * as api from '../api/index'
import { addAllMachines } from '../reducers/allmachineReducer'

export const getAllMachines = () => async (dispatch)=>{
     console.log("get all machines")
     const {data} = await api.getAllMachines()
     const num = data.machines[0].machineName
     dispatch(addAllMachines(data))

    }