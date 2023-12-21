import { FC, useEffect } from 'react'
import { TypeComponentAuthFields } from '@/types/auth.type'
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '@/store/api/auth/auth.slice';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { api } from '@/store/api/api';
import { useCurrentQuery } from '@/store/api/auth/auth.api';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyUser}}) => {
	const dispatch = useDispatch()

	const onLogoutClick = () => {
		localStorage.removeItem('user')
		dispatch(api.util.resetApiState());
		dispatch(logout())
	};
	// при первом рендере и переходе на другую страницу проверяет наличие токена в cookies и выходит из системы при отсутствии данных
	useEffect(() => {
		const token = Cookies.get('token')
		if (!token) onLogoutClick()
	}, []) 

	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider