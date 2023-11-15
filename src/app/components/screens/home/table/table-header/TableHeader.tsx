import { FC } from 'react'
import styles from './tableHeader.module.scss'
const TableHeader: FC = () => {
	return (
		<div className={styles.tableHeader}>
			<span>Имя</span>
			<span>Возраст</span>
			<span>Адрес</span>
		</div>
	)
}

export default TableHeader