import { FC } from 'react'
import Header from './header/Header'


const Layout: FC = ({children}) => {
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