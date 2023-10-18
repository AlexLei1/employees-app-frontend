import { API_URL, getAuthUrl } from '@/configs/api.config'
import axios from 'axios'
import Cookies from 'js-cookie'
import { removeTokensStorage, saveToStorage } from './auth.helper'

/* /api/user/login */
/* /api/user/register */
/* /api/user/current */

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axios.post(
			`${API_URL}${getAuthUrl('/login')}`,
			{
				email,
				password
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	async register(email: string, password: string, name: string) {
		const response = await axios.post(
			`${API_URL}${getAuthUrl('/register')}`,
			{
				email,
				password,
				name
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},

	async current(token: string) {
		const response = await axios.get(
			`${API_URL}${getAuthUrl('/current')}`
		)

		if (response.data.token) {
			saveToStorage(response.data)
		}
	},

	logout() {
		removeTokensStorage()
		localStorage.w('user')
	}
}