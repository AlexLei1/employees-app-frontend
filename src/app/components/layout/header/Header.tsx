import { FC, MouseEvent, forwardRef } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import {MaterialIcon} from '@/ui/icons/MaterialIcon'
import { dataLink } from './header.data'
import cn from 'classnames'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '@/store/api/auth/auth.slice'
import Cookies from 'js-cookie';


const Header: FC = () => {

const user = useSelector(selectUser);
const { asPath } = useRouter()
const dispatch = useDispatch();
const router = useRouter()

const onLogoutClick = () => {
	dispatch(logout());
	Cookies.remove("token");
};
	
	
	return (
		<header className={styles.header}>
			<div>
				<Link href={'/'}>
					<MaterialIcon name={'MdExplore'}/>
					<h1>Сотрудники</h1>
				</Link>
			</div> 
			
			
			{user ? 
				<a onClick={() => onLogoutClick()}>
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