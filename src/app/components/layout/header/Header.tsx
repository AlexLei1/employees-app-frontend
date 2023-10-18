import { FC, MouseEvent } from 'react'
import styles from './header.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import {MaterialIcon} from '@/ui/icons/MaterialIcon'
import useActions from '@/hooks/useActions'

const Header: FC = () => {

	const { logout } = useActions()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<header className={styles.header}>
			<div>
				<ul>
					<li>
						<MaterialIcon name={'MdExplore'}/>
						<Link href={'/'}>Сотруднири</Link>
					</li>
				</ul>
			</div> 
			<ul>
				<li>
					<MaterialIcon name={'MdRefresh'}/>
					<Link href='/login'>login</Link>
				</li>
				<li>
					<MaterialIcon name={'MdLocalFireDepartment'}/>
					<Link href='/register'>register</Link>
				</li>
				<li>
					<MaterialIcon name={'MdLocalFireDepartment'}/>
					<Link href='/register'>register</Link>
				</li>
				<li>
					<button onClick={logoutHandler}>
						<MaterialIcon name="MdLogout" />
						<span>Logout</span>
					</button>
				</li>
			</ul>
		</header>
	)
}

export default Header 	