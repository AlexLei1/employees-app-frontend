import React, { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import useActions from '@/hooks/useActions'


const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {

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