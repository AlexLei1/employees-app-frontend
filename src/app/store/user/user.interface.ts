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

export interface InterfaceEmailPassword {
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		isAdmin: boolean
	}
}
