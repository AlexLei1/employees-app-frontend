import { FC } from 'react'
import styles from './SubTitle.module.scss'

interface ISubTitle {
	text: string
	size: string
}

const SubTitle: FC<ISubTitle> = ({text, size}) => {
	return (
		<div className={styles.subTitle}>
			<p style={{fontSize:`${size}px`}}>{text}</p>
		</div>
	)
}

export default SubTitle