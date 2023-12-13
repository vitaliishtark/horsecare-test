import { createSlice } from "@reduxjs/toolkit";
import { Employee, fetchEmployees } from "../thunks/employeeThunk";

interface EmployeesState {
    users: Employee[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: EmployeesState = {
    users: [],
    loading: false,
    error: null,
  };

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchEmployees.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchEmployees.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? 'An error occurred';
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
    },
  });
  
  export const { reducer } = employeesSlice;
  export default employeesSlice.reducer;