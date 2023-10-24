import React, { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import styles from './layout.module.scss'

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {

  	return (
		<>
			<div className={styles.layout}>
				<Header/>
				{children}
			</div>
		</>
	)
}

export default Layout