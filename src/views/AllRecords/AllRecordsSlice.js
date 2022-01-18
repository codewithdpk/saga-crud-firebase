import { createSlice } from "@reduxjs/toolkit";

const initialState = { students: [], isLoading: true, loaded: false };

const AllRecordsSlice = createSlice({
  name: "AllRecords",
  initialState,
  reducers: {
    setStudentSuccess(state = initialState, action) {
      state.students = action.payload;
      state.isLoading = false;
      state.loaded = true;
    },
    setStudentFailed(state = initialState, action) {
      state.students = [];
      state.isLoading = false;
      state.loaded = false;
    },
    setStudentRequest(state, action) {},
  },
});

export const { setStudentSuccess, setStudentFailed, setStudentRequest } =
  AllRecordsSlice.actions;
export const AllRecordsReducer = AllRecordsSlice.reducer;
