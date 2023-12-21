import { ResLoginData } from './../types/user.types';

export const saveToStorage = (data: ResLoginData | undefined) => {
	localStorage.setItem('user', JSON.stringify(data))
}
