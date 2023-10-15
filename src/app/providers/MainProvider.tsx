import AuthProvider from './AuthProvider/AuthProvider'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import Layout from '@/components/layout/Layout'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<AuthProvider Component={Component}>
					<Layout>{children}</Layout>
				</AuthProvider>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
