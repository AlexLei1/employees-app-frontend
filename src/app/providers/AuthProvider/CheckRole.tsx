import { useRouter } from 'next/router'
import { FC } from 'react'
import { TypeComponentAuthFields } from '@/types/auth.type'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/api/auth/auth.slice'



const CheckRole: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyUser}}) => {

	const user = useSelector(selectUser)
	const router = useRouter()
	const Children = () => <>{children}</>

	console.log(user)

	if (user && isOnlyUser) return <Children />
	else {
		router.pathname !== '/login' && router.replace('/login')
		return null
	}

}

export default CheckRole
