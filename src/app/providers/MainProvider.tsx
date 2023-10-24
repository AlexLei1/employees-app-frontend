
import { FC } from 'react'
import { Provider } from 'react-redux'
import Layout from '@/components/layout/Layout'
import AuthProvider from './AuthProvider/AuthProvider'
import { TypeComponentAuthFields } from '@/types/auth.type'



const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		
		<AuthProvider Component={Component}>
			
		</AuthProvider>

		
	)
}

export default MainProvider
