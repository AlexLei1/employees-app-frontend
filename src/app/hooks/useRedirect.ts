import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'

export const useRedirect = () => {
	const { user, isAuthenticated } = useAuth()
	console.log(isAuthenticated)
	const { push } = useRouter()

	useEffect(() => {
		if (user) push('/')
	}, [user, push])
}
