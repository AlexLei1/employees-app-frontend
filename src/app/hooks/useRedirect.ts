import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'

export const useRedirect = () => {
	const { user, isAuthenticated } = useAuth()
	const { push } = useRouter()

	useEffect(() => {
		if (user) push('/')
	}, [user, push])
}
