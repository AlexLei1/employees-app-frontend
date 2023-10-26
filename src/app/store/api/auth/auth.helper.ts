import { IAuthResponse } from "@/store/user/user.interface";
import Cookies from "js-cookie";

export const saveToStorage = (data: IAuthResponse) => {
	Cookies.set('token', data.token)
	localStorage.setItem('user', JSON.stringify(data)) // сохраняем user в localStorage
}

export const removeTokensStorage = () => {
	Cookies.remove('token')
}
