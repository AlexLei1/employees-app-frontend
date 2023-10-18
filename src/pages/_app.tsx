import type {AppProps} from 'next/app'
import '@/assets/styles/index.scss'
import Layout from '@/components/layout/Layout'
import MainProvider from 'app/providers/MainProvider'
import { TypeComponentAuthFields } from '@/types/auth.type'

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({Component, pageProps}: TypeAppProps) {
  return (
	<MainProvider Component={Component}>
		<Component {...pageProps}/>
	</MainProvider>
  )
}
