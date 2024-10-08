import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  user: null, 
  jobData:  [],
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: { },
});

export const { resetState } = jobsSlice.actions;
export default jobsSlice.reducer;
