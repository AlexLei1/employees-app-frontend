import { FC, useEffect } from 'react'
import { TypeComponentAuthFields } from '@/types/auth.type'
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '@/store/api/auth/auth.slice';
import { useCurrentQuery } from '@/store/api/auth/auth.api';
import Cookies from 'js-cookie';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyUser}}) => {
	const {data} = useCurrentQuery()
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	debugger
	const onLogoutClick = () => {
		dispatch(logout());
		Cookies.remove("token");
	};

	useEffect(() => {
		if (data?.email !== user?.email) {
			onLogoutClick()
		}
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

