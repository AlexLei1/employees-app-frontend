import { AuthService } from "@/services/auth/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { IAuthResponse, InterfaceNameEmailPassword, InterfaceEmailPassword } from "./user.interface";

export const login = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
	'auth/login',
	async ({email, password}, thunkAPI) => {
		try {
			const res = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return res.data
		} catch (err) {

			return thunkAPI.rejectWithValue(err)
		}
	}
)

export const register = createAsyncThunk<IAuthResponse, InterfaceNameEmailPassword>(
	'auth/register',
	async ({email, password, name}, thunkAPI) => {
		try {
			const res = await AuthService.register(email, password, name)
			toastr.success('Register', 'Completed successfully')
			return res.data
		} catch (err) {

			return thunkAPI.rejectWithValue(err)
		}
	}
)

export const current = createAsyncThunk(
	'auth/current',
	async (_, thunkAPI) => {
		try {
			const res = await AuthService.current
			debugger
			console.log(res)
			return res
		} catch(err) {
			return thunkAPI.rejectWithValue(err)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/logout', 
	async () => {
		await AuthService.logout()
})


