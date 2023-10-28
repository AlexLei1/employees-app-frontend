import { createListenerMiddleware } from '@reduxjs/toolkit'
import { authApi } from './../store/api/auth/auth.endpoints';

// создали переменую с вызовом функции
export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: authApi.endpoints.login.matchFulfilled, // следим за успешным завершением login
  effect: async (action, listenerApi) => { // выполняем данную функцию если login успешно завершился 
    listenerApi.cancelActiveListeners() 

    if (action.payload.token) {
    	localStorage.setItem('token', action.payload.token);
    }
  },
})