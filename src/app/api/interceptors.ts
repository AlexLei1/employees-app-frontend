import axios from 'axios'
import Cookies from 'js-cookie'
import { API_URL } from '@/configs/api.config'


export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})