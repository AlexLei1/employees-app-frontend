import { FC		 } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import {MaterialIcon} from '@/ui/icons/MaterialIcon'
import { dataLink } from './header.data'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '@/store/api/auth/auth.slice'

import HeaderLink from './header-link/HeaderLink'


const Header: FC = () => {

const user = useSelector(selectUser)

	return (
		<header className={styles.header}>
			<div>
				<Link href={'/'}>
					<MaterialIcon name={'MdExplore'}/>
					<h1>Сотрудники</h1>
				</Link>
			</div> 
			{user ? 
				<HeaderLink path={'./login'} icon={'MdRefresh'} text={'logout'}/> 
				:	
				<ul>
					{dataLink.map((link) => (
						<li key={link.id}>
							<HeaderLink path={link.path} icon={link.icon} text={link.text}/>
						</li>
					))}
				</ul>}

		</header>
	)
}

export default Header 	