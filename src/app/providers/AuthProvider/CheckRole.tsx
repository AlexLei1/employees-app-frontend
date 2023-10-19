import { useRouter } from 'next/router'
import { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/types/auth.type'


const CheckRole: FC<TypeComponentAuthFields > = ({children, Component: { isOnlyUser },}) => {
	const { user } = useAuth()
	const router = useRouter()
	const Children = () => <>{children}</>
	

	if (isOnlyUser) {
		return <Children />
	} else {
		router.pathname !== '/login' && router.replace('/login')
		return null
	}
}

export default CheckRole
