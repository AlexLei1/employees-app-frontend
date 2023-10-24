import { FC, MouseEvent } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import {MaterialIcon} from '@/ui/icons/MaterialIcon'




const Header: FC = () => {
	
	// const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
	// 	e.preventDefault()
	// 	logout()
	// }

	

	return (
		<header className={styles.header}>

			<div>
				<Link href={'/'}>
					<MaterialIcon name={'MdExplore'}/>
					<h2>Сотрудники</h2>
				</Link>
			</div> 
			
			<ul>
				<li>
					<Link href='/login'>
						<a onClick={() => console.log('logout')}>
							<MaterialIcon name={'MdRefresh'}/>
							<span>logout</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/login'>
						<a onClick={() => console.log('login')}>
							<MaterialIcon name={'MdRefresh'}/>
							<span>login</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/register'>
						<a onClick={() => console.log('register')}>
							<MaterialIcon name={'MdLocalFireDepartment'}/>
							<span>register</span>
						</a>
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header 	