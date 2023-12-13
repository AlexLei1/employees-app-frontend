import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import cn from 'classnames'
import styles from './headerLink.module.scss'
import { TypeMaterialIconName } from '@/types/icons.types'
import { useDispatch } from 'react-redux'
import { logout } from '@/store/api/auth/auth.slice';
import Cookies from 'js-cookie';

interface IHeaderLink {
	path: string	
	icon: TypeMaterialIconName
	text: string
}

const HeaderLink: FC<IHeaderLink> = ({path, icon, text}) => {
	const dispatch = useDispatch()
	const {asPath} = useRouter()

	const onLogoutClick = () => {
		dispatch(logout());
	 	localStorage.removeItem('user')
		Cookies.remove("token");
	};

	return (
		<Link className={cn(styles.link, {[styles.active]: asPath === path})} onClick={text === 'logout' ? () => onLogoutClick() : undefined} href={path}>
			<MaterialIcon name={icon}/>
			<span>{text}</span>
		</Link>
	)
}

export default HeaderLink