import { FC } from 'react'
import Header from './header/Header'
import useActions from '@/hooks/useActions'


const Layout: FC = ({children}) => {

	const { logout, current } = useActions()
	current()
  	return (
		
		<>
			<div>
				<Header/>
				{children}
			</div>
		</>
	)
}

export default Layout