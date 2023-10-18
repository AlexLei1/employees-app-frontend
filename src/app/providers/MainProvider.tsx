
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import Layout from '@/components/layout/Layout'
import { store } from '@/store/store'
import AuthProvider from './AuthProvider/AuthProvider'
import { TypeComponentAuthFields } from '@/types/auth.type'


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
