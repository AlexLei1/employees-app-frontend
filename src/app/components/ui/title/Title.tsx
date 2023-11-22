import { FC } from 'react'
import styles from './Title.module.scss'

interface ITitle {
	text: string
	size: string
}

const Title: FC<ITitle> = ({text, size}) => {
	return (
		<div className={styles.title}>
			<p style={{fontSize:`${size}px`}}>{text}</p>
		</div>
	)
}

export default Title