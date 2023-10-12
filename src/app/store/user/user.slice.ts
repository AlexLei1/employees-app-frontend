import { createSlice } from '@reduxjs/toolkit'
import { getStoreLocal } from '@/utils/local-storage/localStorage'
import {login, register, logout } from './user.actions'


const initialState = {
	user: getStoreLocal('user'),
	isLoading: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
			})
	}
})

export const { reducer } = userSlice