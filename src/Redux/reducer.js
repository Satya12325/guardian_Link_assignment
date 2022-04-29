import {combineReducers} from "redux";

import {data_reducer} from "./DATA/data.reducer"
export const rootReducer = combineReducers({  
   
    data :  data_reducer
})