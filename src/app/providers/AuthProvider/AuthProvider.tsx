import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import  useActions from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/types/auth.type'


const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({children, Component: { isOnlyUser }}) => {
	const { user } = useAuth()
	const { logout, current } = useActions()
	const { pathname } = useRouter()
	
	useEffect(() => {
		const token = Cookies.get('token')
		if (token) current()
	}, [])  // eslint-disable-line react-hooks/exhaustive-deps
	
	// если пользователь авторизован но токен отсутствует сработывает функция
	useEffect(() => {
		const token = Cookies.get('token')
		if (!token && user) logout()
	}, [pathname])  // eslint-disable-line react-hooks/exhaustive-deps
	
	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
