import { FC, MouseEvent } from 'react'
import styles from './header.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import {MaterialIcon} from '@/ui/icons/MaterialIcon'
import useActions from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const Header: FC = () => {
	const {user} = useAuth()
	console.log(user)
	const { logout, current } = useActions()
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
			</ul>
			<div>
				<button onClick={() => logout}>Logout</button>
				<button onClick={() => current}>Current</button>
				
			</div>
		</header>
	)
}

export default Header 	