import { FC, useEffect } from 'react'
import { TypeComponentAuthFields } from '@/types/auth.type'
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '@/store/api/auth/auth.slice';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyUser}}) => {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	const { pathname } = useRouter()

	// useEffect(() => {
	// 	console.log('rerender AuthProvider', user)
	// },[])

	const onLogoutClick = () => {
		localStorage.removeItem('user')
		Cookies.remove("token");
		dispatch(logout());
	};

	useEffect(() => {
		const token = Cookies.get('token')
		if (!token && user) onLogoutClick()
	}, [pathname]) 

	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider