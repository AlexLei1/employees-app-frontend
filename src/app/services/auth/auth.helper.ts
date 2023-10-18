import Cookies from "js-cookie";

export interface ITokens {
	token: string
}

export const saveTokenStorage = (data: ITokens) => {
	Cookies.set('token', data.token)
}

export const saveToStorage = (data: any) => {
	saveTokenStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
	Cookies.remove('token')
}
