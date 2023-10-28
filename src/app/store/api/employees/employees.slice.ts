
import { createSlice } from "@reduxjs/toolkit";
import { employeesApi } from './employees.endpoints';
import { RootState } from "../../store";
import { Employee } from './../../../types/employees.type';

interface InitialState {
  employees: Employee[] | null;
}

const initialState: InitialState = {
  employees: null,
};

export const endpointsSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(employeesApi.endpoints.getAllEmployees.matchFulfilled, (state, action) => {
        state.employees = action.payload;
      })
  },
});

export const {reducer} = endpointsSlice

export const selectEmployees = (state: RootState) => state.employees.employees;
