import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { BASE_URL } from "../../utils/helper";
 
export const newJobsApis = createAsyncThunk(
  "master/newJobs",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(`${BASE_URL}/job/newAll`, data);
      console.log(response, "response...")
      return response;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

 