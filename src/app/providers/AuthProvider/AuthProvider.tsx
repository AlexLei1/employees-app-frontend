import { FC } from 'react'
import { TypeComponentAuthFields } from '@/types/auth.type'
import { useCurrentQuery } from '@/store/api/auth/auth.api'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/api/auth/auth.slice'
import dynamic from 'next/dynamic';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyUser}}) => {
	const {isLoading, error} = useCurrentQuery()
	const user = useSelector(selectUser)


	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider

