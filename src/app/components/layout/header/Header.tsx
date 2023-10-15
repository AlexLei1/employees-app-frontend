import { FC } from 'react'
import styles from './header.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import {MaterialIcon} from '@/ui/icons/MaterialIcon'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div>
				<ul>
					<li><MaterialIcon name={'MdLabelImportant'}/></li>
				</ul>
			</div> 
			<ul>
				<li>
					<Link href='/login'>login</Link>
				</li>
				<li>
					<Link href='/register'>register</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header 	