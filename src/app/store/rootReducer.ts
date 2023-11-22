import { reducer as authReducer } from "./api/auth/auth.slice"
import { reducer as endpointsSlice } from "./api/employees/employees.slice"
import { api } from './api/api';
import { combineReducers } from "@reduxjs/toolkit";

export const reducers = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authReducer,
	employees: endpointsSlice
})

