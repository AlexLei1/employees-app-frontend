import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { TypeComponentAuthFields } from '@/types/auth.type'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/api/auth/auth.slice'
import { useCurrentQuery } from '@/store/api/auth/auth.api'

const CheckRole: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyUser}}) => {
	const router = useRouter()
	const isAuthenticaterd = useSelector(selectUser)
	const {data} = useCurrentQuery()

	console.log(data)

	if (data && !!isOnlyUser) {
		return <>{children}</>
	} else {
		router.pathname !== '/login' && router.replace('/login')
		return null
	}
}

export default CheckRole
