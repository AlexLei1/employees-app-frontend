import { FC, MouseEvent, forwardRef } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import {MaterialIcon} from '@/ui/icons/MaterialIcon'
import { dataLink } from './header.data'
import cn from 'classnames'
import { useRouter } from 'next/router';


const Header: FC = () => {
	
const { asPath } = useRouter()
	// const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
	// 	e.preventDefault()
	// 	logout()
	// }
	
	

	return (
		<header className={styles.header}>
			<div>
				<Link href={'/'}>
					<MaterialIcon name={'MdExplore'}/>
					<h1>Сотрудники</h1>
				</Link>
			</div> 
			
			
			{false ? 
				<a onClick={() => console.log('logout')}>
					<MaterialIcon name={'MdRefresh'}/>
					<span>logout</span>
				</a>
				:	
				<ul>
					{dataLink.map((link) => (
						<li key={link.id}>
								<Link className={cn({[styles.active]: asPath === link.path})} href={link.path}>
									<MaterialIcon name={link.icon}/>
									<span>{link.text}</span>
								</Link>
							</li>
					))}
				</ul>}

		</header>
	)
}

export default Header 	