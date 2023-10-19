import { IUser } from "@/types/user.types"

export interface IUserState {
	name: string
	email: string
}

export interface ITokens {
	token: string
}

export interface IUserInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface InterfaceEmailPassword { // данные которые отправляем серверу
	email: string
	password: string
}
export interface InterfaceNameEmailPassword { // данные которые отправляем серверу
	name: string
	email: string
	password: string
}


export interface IAuthResponse extends ITokens { // даныне которые приходят от сервера
	user: IUser 
}
