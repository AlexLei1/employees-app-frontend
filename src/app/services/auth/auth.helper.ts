import Cookies from "js-cookie";

export interface ITokens {
	accessToken: string
}


export const saveTokenStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
}

export const saveToStorage = (data: any) => {
	saveTokenStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
