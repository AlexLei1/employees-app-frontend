import type {AppProps} from 'next/app'
import '@/assets/styles/index.scss'
import Layout from '@/components/layout/Layout'
import MainProvider from 'app/providers/MainProvider'

export default function App({Component, pageProps}: AppProps) {
  return (
	<MainProvider Component={Component}>
		<Component {...pageProps}/>
	</MainProvider>
  )
}
