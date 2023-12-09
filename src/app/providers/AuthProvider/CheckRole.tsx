import { useRouter } from 'next/router'
import { FC } from 'react'
import { TypeComponentAuthFields } from '@/types/auth.type'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/api/auth/auth.slice'

const CheckRole: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyUser}}) => {
	const router = useRouter()
	const user = useSelector(selectUser)
	
	if (user && isOnlyUser) {
		return <>{children}</>
	} else {
		router.pathname !== '/login' && router.replace('/login')
		return null
	}
}

export default CheckRole
