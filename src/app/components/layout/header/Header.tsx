import { FC } from 'react'
import styles from './header.module.scss'
import cn from 'classnames'
import Link from 'next/link'

const Header: FC = () => {
	return (
		<header>
			<div>
				icon
				title
			</div>
			<ul>
				<li>login</li>
				<li>register</li>
			</ul>
		</header>
	)
}

export default Header 	