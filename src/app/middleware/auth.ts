import { createListenerMiddleware } from '@reduxjs/toolkit'
import { authApi } from '../store/api/auth/auth.api';
import  Cookies  from 'js-cookie';

// создали переменую с вызовом функции
export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: authApi.endpoints.login.matchFulfilled, // следим за успешным завершением login
  effect: async (action, listenerApi) => { // выполняем данную функцию если login успешно завершился 
    listenerApi.cancelActiveListeners() 

    if (action.payload.token) {
    	Cookies.set('token', action.payload.token)
    }
  },
})
