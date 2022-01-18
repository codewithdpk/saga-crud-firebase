import { combineReducers } from "@reduxjs/toolkit";
import { AllRecordsReducer } from "../views/AllRecords";

const rootReducer = combineReducers({
  AllStudents: AllRecordsReducer,
});

export default rootReducer;
