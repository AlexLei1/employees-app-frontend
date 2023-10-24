 import type {AppProps} from 'next/app'
import '@/assets/styles/index.scss'
import Layout from '@/components/layout/Layout'
import MainProvider from 'app/providers/MainProvider'
import { TypeComponentAuthFields } from '@/types/auth.type'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthProvider from 'app/providers/AuthProvider/AuthProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

type TypeAppProps = AppProps & TypeComponentAuthFields

const App = ({Component, pageProps}: TypeAppProps) => {
  return (
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<AuthProvider Component={Component}>
				<Layout>
					<Component {...pageProps}/>
				</Layout>
			</AuthProvider>
		</QueryClientProvider>
	</Provider>
  )
}
export default App