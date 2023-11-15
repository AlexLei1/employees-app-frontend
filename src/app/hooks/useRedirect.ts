import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'

export const useRedirect = () => {
	const { user } = useAuth()
	const { push } = useRouter()
	console.log(user)
	useEffect(() => {
		if (user) push('/')
	}, [user, push])
}
