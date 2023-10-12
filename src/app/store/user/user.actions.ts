import { AuthService } from "@/services/auth/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";


export const login = createAsyncThunk(
	'auth/login',
	async ({email, password}, thuncAPI) => {
		try {
			const res = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return res.data
		} catch (err) {
			console.log(err)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const register = createAsyncThunk(
	'auth/register',
	async ({email, password, name}, thuncAPI) => {
		try {
			const res = await AuthService.register(email, password, name)
			toastr.success('Register', 'Completed successfully')
			return res.data
		} catch (err) {
			console.log(err)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/logout', 
	async () => {
		await AuthService.logout()
})
