import { FC } from 'react'
import { TypeComponentAuthFields } from '@/types/auth.type'
import { useCurrentQuery } from '@/store/api/auth/auth.endpoints'

const AuthProvider: FC<TypeComponentAuthFields> = ({children}) => {
	const {isLoading} = useCurrentQuery()

	if (isLoading) {
		return <span>Загрузка</span>
	}
	return children
}

export default AuthProvider


/* 
AuthProvider - данный компонент оборачивает в 
себя все приложение и служит провайдером для проверки авторизации пользователя

1. 
2.
3.
4.
5.
*/