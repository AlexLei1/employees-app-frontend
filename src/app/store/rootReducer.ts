import { reducer as authReduser } from "./api/auth/auth.slice"
import { api } from './api/api';
import { combineReducers } from "@reduxjs/toolkit";

export const reducers = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authReduser,
	
})
