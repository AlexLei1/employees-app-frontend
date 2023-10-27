import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './rootReducer'
import { api } from './api/api'
import { listenerMiddleware } from 'app/middleware/auth'

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch