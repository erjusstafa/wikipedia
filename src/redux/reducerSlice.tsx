import { combineReducers } from "@reduxjs/toolkit";
import dataSliceReducer from "../redux/features/dataSlice"
const rootReducer = combineReducers({
    wikipedia  : dataSliceReducer
});

export default rootReducer;