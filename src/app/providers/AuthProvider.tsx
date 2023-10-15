import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import  {useActions} from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'


const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser }
}) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, []) 

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [pathname]) 

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<>
			{children}
		</>
	)
}

export default AuthProvider
